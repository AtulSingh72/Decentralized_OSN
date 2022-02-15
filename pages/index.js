import React, { Component } from "react";
import PostFactory from "../ethereum/factory";
import PostContract from "../ethereum/build/Post.json";
import ipfs from "../ethereum/ipfs";
import web3 from "../ethereum/web3";

let accounts = [];

class PostIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: this.props.posts,
			buffer: null,
		};
		this.captureFile = this.captureFile.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
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

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input type="file" onChange={this.captureFile} />
					<input type="submit" />
				</form>
				<div>
					{this.state.posts.map((post) => (
						<div>
							<img
								src={`https://ipfs.io/ipfs/${post.imageUrl}`}
							/>
							<h3>Uploader: {post.author}</h3>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default PostIndex;
