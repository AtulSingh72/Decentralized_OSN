import React, { Component } from "react";
import PostFactory from "../ethereum/factory";
import PostContract from "../ethereum/build/Post.json";
import ipfs from "../ethereum/ipfs";
import { web3, metamask_provider } from "../ethereum/web3";
import Head from "next/head";

let accounts = [];

class PostIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: this.props.posts,
			buffer: null,
			content: "",
			zoomed: null,
			loading: true,
			uploading: false,
			matamask: true,
			is_donate: false,
			min_tip: 0,
			value: 0,
			tip_post_key: 0,
			donating: false,
			disable_transact_okay: true,
		};
		this.captureFile = this.captureFile.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.imageZoom = this.imageZoom.bind(this);
		this.readContent = this.readContent.bind(this);
		this.takeback = this.takeback.bind(this);
		this.transact = this.transact.bind(this);
		this.donate = this.donate.bind(this);
		this.isdonatebuttonon = this.isdonatebuttonon.bind(this);
		this.postComment = this.postComment.bind(this);
		this.commentHide = this.commentHide.bind(this);
	}

	async componentDidMount() {
		accounts = await web3.eth.getAccounts();
		this.setState({ loading: false });
	}

	static async getInitialProps() {
		const posts = await PostFactory.methods.getPosts().call();
		let new_posts = await (async function (posts) {
			let new_posts = [];
			for (let i = 0; i < posts.length; i++) {
				const Post = new web3.eth.Contract(
					JSON.parse(PostContract.interface),
					posts[i]
				);
				const currentPost = {
					imageUrl: await Post.methods.image_hash().call(),
					author: await Post.methods.author().call(),
					content: await Post.methods.content().call(),
					comments: await Post.methods.getComments().call(),
				};
				new_posts.push(currentPost);
			}
			return new_posts;
		})(posts);
		return { posts: new_posts };
	}

	isdonatebuttonon(event) {
		event.preventDefault();
		let new_value = true;
		if (event.target.value >= this.state.min_tip) {
			new_value = false;
		}
		this.setState({
			value: event.target.value,
			disable_transact_okay: new_value,
		});
	}

	captureFile(event) {
		event.preventDefault();
		const file = event.target.files[0];
		const reader = new window.FileReader();
		reader.readAsArrayBuffer(file);
		reader.onloadend = () => {
			this.setState({ buffer: Buffer(reader.result) });
		};
	}

	takeback(event) {
		event.preventDefault();
		this.setState({ metamask: true, is_donate: false });
	}

	async donate(event) {
		event.persist();
		event.preventDefault();
		console.log(event.target);
		let tip = await PostFactory.methods.min_contribution().call();
		tip = web3.utils.fromWei(tip, "ether");
		this.setState({
			is_donate: true,
			min_tip: tip,
			tip_post_key: event.target.getAttribute("data-index"),
		});
	}

	async transact(event) {
		event.persist();
		event.preventDefault();
		accounts = await web3.eth.getAccounts();
		console.log(accounts);
		if (metamask_provider == false || accounts.length == 0) {
			this.setState({ metamask: false });
		} else {
			this.setState({ metamask: true, donating: true });
			const index = this.state.tip_post_key;
			console.log(index);
			const address = await PostFactory.methods
				.deployedPosts(index)
				.call();
			const post = new web3.eth.Contract(
				JSON.parse(PostContract.interface),
				address
			);
			await post.methods.receiveContribution().send({
				from: accounts[0],
				value: web3.utils.toWei(this.state.value, "ether"),
			});
			this.setState({
				metamask: true,
				value: 0,
				is_donate: false,
				donating: false,
			});
		}
	}

	async commentHide(event) {
		event.preventDefault();
		const index = event.target.getAttribute("data-index");
		var comments_div = document.getElementById("comments" + index);
		if (comments_div.style.display === "none") {
			comments_div.style.display = "block";
		} else {
			comments_div.style.display = "none";
		}
		const comments_address = this.state.posts[index].comments;
		if (
			comments_address.length != 0 &&
			typeof comments_address[0] == "string"
		) {
			const comments = await (async function (comments_address) {
				let new_comments = [];
				for (let i = 0; i < comments_address.length; i++) {
					const Comment = new web3.eth.Contract(
						JSON.parse(PostContract.interface),
						comments_address[i]
					);
					const currentComment = {
						imageUrl: await Comment.methods.image_hash().call(),
						author: await Comment.methods.author().call(),
						content: await Comment.methods.content().call(),
					};
					new_comments.push(currentComment);
				}
				return new_comments;
			})(comments_address);
			let new_posts = this.state.posts;
			new_posts[index].comments = comments;
			this.setState({ posts: new_posts });
		}
	}

	async postComment(event) {
		event.persist();
		event.preventDefault();
		accounts = await web3.eth.getAccounts();
		const parent_index = event.target.getAttribute("data-index");
		console.log(parent_index);
		if (metamask_provider == false || accounts.length == 0) {
			this.setState({ metamask: false });
		} else {
			this.setState({ metamask: true, uploading: true });
			ipfs.files.add(this.state.buffer, async (error, result) => {
				if (error) {
					console.error(error);
					return;
				}
				const parent_address = await PostFactory.methods
					.deployedPosts(parent_index)
					.call();
				await PostFactory.methods
					.createComment(
						parent_address,
						result[0].hash,
						this.state.content
					)
					.send({ from: accounts[0] });
				const parent_post = new web3.eth.Contract(
					JSON.parse(PostContract.interface),
					parent_address
				);
				const comments_address = await parent_post.methods
					.getComments()
					.call();
				let new_posts = this.state.posts;
				const comments = await (async function (comments_address) {
					let new_comments = [];
					for (let i = 0; i < comments_address.length; i++) {
						const Comment = new web3.eth.Contract(
							JSON.parse(PostContract.interface),
							comments_address[i]
						);
						const currentComment = {
							imageUrl: await Comment.methods.image_hash().call(),
							author: await Comment.methods.author().call(),
							content: await Comment.methods.content().call(),
						};
						new_comments.push(currentComment);
					}
					return new_comments;
				})(comments_address);
				new_posts[parent_index].comments = comments;
				this.setState({
					posts: new_posts,
					content: "",
					uploading: false,
				});
				const file_uploader = document.getElementById("file_upload_2");
				file_uploader.value = "";
			});
		}
	}

	async onSubmit(event) {
		event.preventDefault();
		accounts = await web3.eth.getAccounts();
		if (metamask_provider == false || accounts.length == 0) {
			this.setState({ metamask: false });
		} else {
			this.setState({ metamask: true, uploading: true });
			ipfs.files.add(this.state.buffer, async (error, result) => {
				if (error) {
					console.error(error);
					return;
				}
				await PostFactory.methods
					.createPost(result[0].hash, this.state.content)
					.send({ from: accounts[0] });
				const posts = await PostFactory.methods.getPosts().call();
				let new_posts = await (async function (posts) {
					let new_posts = [];
					for (let i = 0; i < posts.length; i++) {
						const Post = new web3.eth.Contract(
							JSON.parse(PostContract.interface),
							posts[i]
						);
						const currentPost = {
							imageUrl: await Post.methods.image_hash().call(),
							author: await Post.methods.author().call(),
							content: await Post.methods.content().call(),
							comments: await Post.methods.getComments().call(),
						};
						new_posts.push(currentPost);
					}
					return new_posts;
				})(posts);
				this.setState({
					posts: new_posts,
					content: "",
					uploading: false,
				});
				const file_uploader = document.getElementById("file_upload");
				file_uploader.value = "";
			});
		}
	}

	async imageZoom(event) {
		event.preventDefault();
		if (this.state.zoomed !== null) {
			this.setState({ zoomed: null });
		} else {
			this.setState({ zoomed: event.target.getAttribute("src") });
		}
	}

	readContent(event) {
		event.preventDefault();
		this.setState({ content: event.target.value });
	}

	render() {
		return (
			<div className="container">
				<Head>
					<title>DOSN</title>
					<link
						href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
						rel="stylesheet"
						integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
						crossorigin="anonymous"
					></link>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
					></link>
					<script
						src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
						integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
						crossorigin="anonymous"
					></script>
					<script
						src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
						integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
						crossorigin="anonymous"
					></script>
					<script src="https://cdn.jsdelivr.net/npm/jdenticon@2.2.0"></script>
				</Head>
				{this.state.is_donate == true && (
					<div
						style={{
							position: "fixed",
							zIndex: "1",
							width: "100%",
							height: "100%",
							textAlign: "center",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							left: "0",
							top: "0",
							background: "rgba(0, 0, 0, 0.8)",
						}}
					>
						<div
							style={{
								width: "50%",
								height: "50%",
								background: "white",
								borderRadius: "70px",
								padding: "25px",
							}}
						>
							<img
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FMVgBbtMBGQTi6og4mF%2Fgiphy.gif&f=1&nofb=1"
								style={{
									width: "200px",
									margin: "0px 20px 10px",
								}}
							/>
							<h2 style={{ margin: "5px" }}>
								Choose your TIP amount
							</h2>
							<div
								className="input-group input-group-lg flex-nowrap"
								style={{
									width: "60%",
									margin: "30px auto 10px",
								}}
							>
								<input
									className="form-control"
									type="number"
									placeholder={`Minimum TIP Amount is ${this.state.min_tip} ETH`}
									min="10"
									onChange={this.isdonatebuttonon}
								/>
								<span
									className="input-group-text"
									id="addon-wrapping"
								>
									ETH
								</span>
							</div>
							<button
								onClick={this.takeback}
								className="btn btn-info"
								style={{ margin: "20px 40px" }}
							>
								<i className="fa fa-close"></i> | Naah! Take me
								back to feeds
							</button>
							<button
								className="btn btn-warning"
								style={{ margin: "20px 40px" }}
								id="donate-ok"
								onClick={this.transact}
								disabled={this.state.disable_transact_okay}
							>
								<div>
									{this.state.donating == true && (
										<div>
											<img
												src="https://c.tenor.com/k-A2Bukh1lUAAAAi/loading-loading-symbol.gif"
												style={{
													height: "28px",
													margin: "0 15px 0 0",
												}}
											/>
											| Transaction is being performed
										</div>
									)}
									{this.state.donating == false && (
										<div>
											<i className="fa fa-check"></i>|
											Done! Send this TIP amount
										</div>
									)}
								</div>
							</button>
						</div>
					</div>
				)}
				{this.state.metamask == false && (
					<div
						style={{
							position: "fixed",
							zIndex: "1",
							width: "100%",
							height: "100%",
							textAlign: "center",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							left: "0",
							top: "0",
							background: "rgba(0, 0, 0, 0.8)",
						}}
					>
						<div
							style={{
								width: "50%",
								height: "50%",
								background: "white",
								borderRadius: "70px",
								padding: "25px",
							}}
						>
							<img
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa-%2FAAuE7mC1z-HXEKxL4YhAhc7WDHWA6Rnly1I592T5ag%3Ds900-mo-c-c0xffffffff-rj-k-no&f=1&nofb=1"
								style={{
									width: "200px",
									margin: "0px 20px 10px",
								}}
							/>
							<h2 style={{ margin: "5px" }}>OOPS!</h2>
							<h5 style={{ margin: "10px" }}>
								Either the MetaMask extension is not installed
								or you aren't logged into metamask.
							</h5>
							<button
								onClick={this.takeback}
								className="btn btn-info"
								style={{ margin: "20px 40px" }}
							>
								<i className="fa fa-arrow-left"></i> | Naah!
								Take me back to feeds
							</button>
							<a
								href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
								className="btn btn-warning"
								target={"_blank"}
								style={{ margin: "20px 40px" }}
							>
								<i className="fa fa-chrome"></i> | Get MetaMask
								Extenstion
							</a>
						</div>
					</div>
				)}
				{this.state.loading && (
					<div
						style={{
							position: "fixed",
							zIndex: "1",
							width: "100%",
							height: "100%",
							textAlign: "center",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							left: "0",
							top: "0",
							background: "rgba(0, 0, 0, 0.8)",
						}}
					>
						<div
							style={{
								width: "40%",
								height: "40%",
								background: "white",
								borderRadius: "70px",
								padding: "25px",
							}}
						>
							<img
								src="https://c.tenor.com/UTxZPwKlNNIAAAAi/ethereum-ethereum-crypto.gif"
								style={{
									width: "200px",
									margin: "0px 20px 40px",
								}}
							/>
							<h2 style={{ margin: "20px" }}>
								Welcome to your Decentralized World!!
							</h2>
							<h5 style={{ margin: "10px" }}>
								Hold tight while we setup the contents for you
							</h5>
						</div>
					</div>
				)}
				<form
					onSubmit={this.onSubmit}
					style={{
						margin: "20px auto",
						textAlign: "center",
						width: "650px",
						borderRadius: "5px",
						border: "1px solid gray",
					}}
				>
					<textarea
						placeholder="Let's tweet something..."
						style={{
							width: "100%",
							height: "150px",
							padding: "12px",
							border: "0px solid black",
						}}
						onChange={this.readContent}
						value={this.state.content}
					/>
					<br></br>
					<input
						type="file"
						onChange={this.captureFile}
						style={{ margin: "10px" }}
						id="file_upload"
					/>
					<button
						type="submit"
						className="btn btn-primary"
						style={{ margin: "10px" }}
					>
						{this.state.uploading && (
							<div style={{ margin: "5px" }}>
								<span style={{ float: "left" }}>
									<img
										src="https://c.tenor.com/k-A2Bukh1lUAAAAi/loading-loading-symbol.gif"
										style={{
											height: "28px",
											margin: "0 15px 0 0",
										}}
									/>
								</span>
								<span style={{ float: "right" }}>
									<div>
										Uploading...<br></br>It might take upto
										10 mins!!
									</div>
								</span>
							</div>
						)}
						{!this.state.uploading && "Submit"}
					</button>
				</form>
				{this.state.zoomed !== null && (
					<div
						style={{
							position: "fixed",
							zIndex: "1",
							width: "100%",
							height: "100%",
							textAlign: "center",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							left: "0",
							top: "0",
							background: "rgba(0, 0, 0, 0.8)",
						}}
					>
						<img
							src={this.state.zoomed}
							onClick={this.imageZoom}
							style={{
								maxWidth: "90%",
								maxHeight: "90%",
								cursor: "zoom-out",
							}}
						/>
					</div>
				)}
				<div>
					{this.state.posts
						.slice(0)
						.reverse()
						.map((post, index) => (
							<div
								className="card"
								style={{
									margin: "20px auto 20px",
									width: "650px",
									height: "fit-content",
								}}
								key={index}
							>
								<h6 className="card-header">
									<img
										src={`https://identicon-api.herokuapp.com/${post.author}/40?format=png`}
										style={{
											margin: "5px 20px 5px 5px",
											borderRadius: "50%",
											background: "white",
										}}
										key={index}
									/>
									{post.author}
								</h6>
								<div
									className="card-img-top img-fluid"
									style={{
										maxWidth: "90%",
										height: "auto",
										overflow: "hidden",
										display: "flex",
										margin: "0 auto",
										padding: "20px",
									}}
								>
									<img
										src={`https://ipfs.io/ipfs/${post.imageUrl}`}
										className="card-img-top img-fluid"
										style={{
											objectFit: "contain",
											cursor: "zoom-in",
											borderRadius: "25px",
											height: "auto",
											width: "auto",
											margin: "0 auto",
											maxHeight: "500px",
										}}
										onClick={this.imageZoom}
									/>
								</div>
								<div
									className="card-body"
									style={{ height: "auto" }}
								>
									<p
										className="card-text"
										style={{
											fontSize: "22px",
											margin: "20px",
										}}
									>
										{post.content}
									</p>
								</div>
								<hr
									style={{
										width: "80%",
										margin: "0 auto 20px",
									}}
								></hr>
								<div>
									<button
										className="btn btn-outline-dark"
										style={{
											width: "fit-content",
											margin: "0 40px 20px",
											padding: "10px",
										}}
										onClick={this.donate}
										data-index={
											this.state.posts.length - 1 - index
										}
									>
										<img
											src="https://cdn-icons-png.flaticon.com/512/1777/1777889.png"
											style={{
												width: "28px",
												margin: "auto 5px",
											}}
										/>
										Tip this post
									</button>
									<button
										className="btn btn-outline-primary"
										style={{
											width: "fit-content",
											margin: "0 40px 20px",
											padding: "10px",
											float: "right",
										}}
										data-index={
											this.state.posts.length - 1 - index
										}
										onClick={this.commentHide}
									>
										<i
											className="fa fa-comments"
											style={{ margin: "0 5px" }}
										></i>{" "}
										Comments
									</button>
								</div>
								<div
									id={
										"comments" +
										(this.state.posts.length - index - 1)
									}
									style={{ margin: "10px", display: "none" }}
								>
									<form
										onSubmit={this.postComment}
										style={{
											margin: "20px auto",
											textAlign: "center",
											width: "550px",
											borderRadius: "5px",
											border: "1px solid gray",
										}}
										data-index={
											this.state.posts.length - 1 - index
										}
									>
										<textarea
											placeholder="Comment on this post..."
											style={{
												width: "100%",
												height: "100px",
												padding: "12px",
												border: "0px solid black",
											}}
											onChange={this.readContent}
											value={this.state.content}
										/>
										<br></br>
										<input
											type="file"
											onChange={this.captureFile}
											style={{ margin: "10px" }}
											id="file_upload_2"
										/>
										<button
											type="submit"
											className="btn btn-primary"
											style={{ margin: "10px" }}
										>
											{this.state.uploading && (
												<div style={{ margin: "5px" }}>
													<span
														style={{
															float: "left",
														}}
													>
														<img
															src="https://c.tenor.com/k-A2Bukh1lUAAAAi/loading-loading-symbol.gif"
															style={{
																height: "28px",
																margin: "0 15px 0 0",
															}}
														/>
													</span>
													<span
														style={{
															float: "right",
														}}
													>
														<div>
															Uploading...
															<br></br>It might
															take upto 10 mins!!
														</div>
													</span>
												</div>
											)}
											{!this.state.uploading && "Submit"}
										</button>
									</form>
									{post.comments
										.slice(0)
										.reverse()
										.map((comment, comment_index) => (
											<div
												className="card"
												style={{
													margin: "20px auto 20px",
													width: "550px",
													height: "fit-content",
												}}
												key={
													"comments_" + comment_index
												}
											>
												<p
													className="card-header"
													style={{
														fontWeight: "500",
														fontSize: "13px",
													}}
												>
													<img
														src={`https://identicon-api.herokuapp.com/${comment.author}/20?format=png`}
														style={{
															margin: "5px 20px 5px 5px",
															borderRadius: "50%",
															background: "white",
														}}
														key={
															"comments_" +
															comment_index
														}
													/>
													{comment.author}
												</p>
												<div
													className="card-img-top img-fluid"
													style={{
														maxWidth: "90%",
														height: "auto",
														overflow: "hidden",
														display: "flex",
														margin: "0 auto",
														padding: "10px",
													}}
												>
													<img
														src={`https://ipfs.io/ipfs/${comment.imageUrl}`}
														className="card-img-top img-fluid"
														style={{
															objectFit:
																"contain",
															borderRadius:
																"25px",
															height: "auto",
															width: "auto",
															margin: "0 auto",
															maxHeight: "250px",
														}}
													/>
												</div>
												<div
													className="card-body"
													style={{ height: "auto" }}
												>
													<p
														className="card-text"
														style={{
															fontSize: "16px",
															margin: "0px",
														}}
													>
														{comment.content}
													</p>
												</div>
											</div>
										))}
								</div>
							</div>
						))}
				</div>
			</div>
		);
	}
}

export default PostIndex;
