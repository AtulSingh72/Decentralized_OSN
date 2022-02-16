import React, { Component } from "react";
import PostFactory from "../ethereum/factory";
import PostContract from "../ethereum/build/Post.json";
import ipfs from "../ethereum/ipfs";
import web3 from "../ethereum/web3";
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
		};
		this.captureFile = this.captureFile.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.imageZoom = this.imageZoom.bind(this);
		this.readContent = this.readContent.bind(this);
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
				};
				new_posts.push(currentPost);
			}
			return new_posts;
		})(posts);
		return { posts: new_posts };
	}

	captureFile(event) {
		event.preventDefault();
		const file = event.target.files[0];
		const reader = new window.FileReader();
		reader.readAsArrayBuffer(file);
		reader.onloadend = () => {
			this.setState({ buffer: Buffer(reader.result) });
			console.log("buffer", this.state.buffer);
		};
	}

	async onSubmit(event) {
		event.preventDefault();
		accounts = await web3.eth.getAccounts();
		console.log(accounts);
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
					};
					new_posts.push(currentPost);
				}
				return new_posts;
			})(posts);
			this.setState({ posts: new_posts, content: "" });
			const file_uploader = document.getElementById("file_upload");
			file_uploader.value = "";
		});
	}

	async imageZoom(event) {
		event.preventDefault();
		console.log(event.target.getBoundingClientRect());
		if (this.state.zoomed !== null) {
			this.setState({ zoomed: null });
		} else {
			this.setState({ zoomed: event.target.getAttribute("src") });
		}
	}

	readContent(event) {
		event.preventDefault();
		this.setState({ content: event.target.value });
		console.log(this.state.content);
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
						Submit
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
							</div>
						))}
				</div>
			</div>
		);
	}
}

export default PostIndex;
