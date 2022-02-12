import React, { Component } from "react";
import PostFactory from "../ethereum/factory";

class PostIndex extends Component {
	async componentDidMount() {
		const posts = await PostFactory.methods.getPosts().call();
		console.log(posts);
	}

	render() {
		return <div>Welcome to Decentralized OSN</div>;
	}
}

export default PostIndex;
