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
			zoomed: null,
		};
		this.captureFile = this.captureFile.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.imageZoom = this.imageZoom.bind(this);
	}

	async componentDidMount() {
		accounts = await web3.eth.getAccounts();
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
		ipfs.files.add(this.state.buffer, async (error, result) => {
			if (error) {
				console.error(error);
				return;
			}
			await PostFactory.methods
				.createPost(result[0].hash)
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
					};
					new_posts.push(currentPost);
				}
				return new_posts;
			})(posts);
			this.setState({ posts: new_posts });
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
				<form
					onSubmit={this.onSubmit}
					style={{ margin: "20px", textAlign: "center" }}
				>
					<input type="file" onChange={this.captureFile} />
					<button type="submit" className="btn btn-primary">
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
					{this.state.posts.map((post, index) => (
						<div
							className="card"
							style={{
								margin: "20px auto 20px",
								width: "650px",
								height: "650px",
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
									width: "100%",
									height: "500px",
									overflow: "hidden",
									display: "flex",
								}}
							>
								<img
									src={`https://ipfs.io/ipfs/${post.imageUrl}`}
									className="card-img-top img-fluid"
									style={{
										objectFit: "contain",
										cursor: "zoom-in",
									}}
									onClick={this.imageZoom}
								/>
							</div>
							<hr></hr>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default PostIndex;
