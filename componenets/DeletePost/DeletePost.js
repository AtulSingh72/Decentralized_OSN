import React, { Component } from "react";
import Backdrop from "../Overlay/Backdrop/Backdrop";
import Modal from "../Overlay/Modal/Modal";
import PostContract from "../../ethereum/build/Post.json";
import { web3, metamask_provider } from "../../ethereum/web3";

class DeletePost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			url: "",
		};
	}

	inputValue = (event) => {
		event.preventDefault();
		this.setState({ url: event.target.value });
	};

	deletePost = async (event) => {
		event.preventDefault();
		let accounts = await web3.eth.getAccounts();
		let curr_url = this.state.url;
		const url_split = curr_url.split("/");
		curr_url = url_split[url_split.length - 1];
		curr_url = "0x" + curr_url;
		const Post = new web3.eth.Contract(
			JSON.parse(PostContract.interface),
			curr_url
		);
		console.log(accounts[0]);
		await Post.methods.deletePost().send({ from: accounts[0] });
		this.setState({ url: 0 });
	};

	render() {
		return (
			<Backdrop takeback={this.props.takeback}>
				<Modal>
					<img
						src="https://vrchatguide.com/wp-content/uploads/2021/03/undraw_Throw_away_re_x60k-770x515.png?ezimgfmt=rs%3Adevice%2Frscb3-1"
						style={{
							width: "200px",
							margin: "0px 20px 10px",
						}}
					/>
					<h2 style={{ margin: "5px" }}>Delete a Post</h2>
					<h5 style={{ margin: "10px" }}>
						The Post along with all the comments on that post will
						be deleted.<br></br> This would be repeated for each
						subsequent comment.
					</h5>
					<input
						type="text"
						className="form-control"
						style={{
							width: "70%",
							margin: "40px auto",
							textAlign: "center",
							fontSize: "20px",
						}}
						placeholder="Enter the URL of the Post"
						onChange={this.inputValue}
						value={this.state.url}
					></input>
					<button
						onClick={this.deletePost}
						className="btn btn-info"
						style={{ margin: "20px 40px" }}
					>
						<i className="fas fa-check-circle"></i> | Done!!! Delete
						the post
					</button>
				</Modal>
			</Backdrop>
		);
	}
}

export default DeletePost;
