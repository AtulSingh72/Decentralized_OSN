import React, { Component } from "react";
import PostFactory from "../ethereum/factory";

class PostIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: PostIndex.getInitialProps().posts,
			buffer: null,
		};

		this.captureFile = this.captureFile.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	static async getInitialProps() {
		const posts = await PostFactory.methods.getPosts().call();
		return { posts: posts };
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

	onSubmit(event) {
		event.preventDefault();
		console.log("Submit File");
	}

	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<input type="file" onChange={this.captureFile} />
				<input type="submit" />
			</form>
		);
	}
}

export default PostIndex;
