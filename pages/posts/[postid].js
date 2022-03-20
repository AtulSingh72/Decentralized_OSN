import { withRouter } from "next/router";
import React, { Component } from "react";
import ipfs from "../../ethereum/ipfs";
import { web3, metamask_provider } from "../../ethereum/web3";
import PostFactory from "../../ethereum/factory";
import ZoomedImage from "../../componenets/ZoomedImage/ZoomedImage";
import PostContract from "../../ethereum/build/Post.json";
import Head from "next/head";
import FullPost from "../../componenets/FullPost/FullPost";
import DonateCard from "../../componenets/DonateCard/DonateCard";
import MetamaskCard from "../../componenets/MetamaskCard/MetamaskCard";
import Navbar from "../../componenets/Navbar/Navbar";

let accounts = [];

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			author: null,
			content: null,
			imageUrl: null,
			address: this.props.address,
			comments: [],
			hideComments: true,
			zoomed: null,
			is_donate: false,
			metamask: true,
			min_tip: 0,
			value: 0,
			comment_content: "",
			disable_transact_okay: true,
			donating: false,
			uploading: false,
		};
	}

	static getInitialProps(props) {
		return { address: props.query.postid };
	}

	async componentWillReceiveProps(nextProps) {
		const post_address = nextProps.address;
		const Post = new web3.eth.Contract(
			JSON.parse(PostContract.interface),
			post_address
		);
		const author = await Post.methods.author().call();
		const content = await Post.methods.content().call();
		const imageUrl = await Post.methods.image_hash().call();
		this.setState({
			author: author,
			content: content,
			imageUrl: imageUrl,
			comments: [],
			address: nextProps.address,
			hideComments: true,
		});
	}

	async componentDidMount() {
		accounts = await web3.eth.getAccounts();
		const post_address = "0x" + this.state.address;
		const Post = new web3.eth.Contract(
			JSON.parse(PostContract.interface),
			post_address
		);
		const author = await Post.methods.author().call();
		const content = await Post.methods.content().call();
		const imageUrl = await Post.methods.image_hash().call();
		this.setState({
			author: author,
			content: content,
			imageUrl: imageUrl,
			comments: [],
		});
	}

	takeback = (event) => {
		event.preventDefault();
		this.setState({ metamask: true, is_donate: false });
	};

	imageZoom = async (event) => {
		event.preventDefault();
		event.stopPropagation();
		console.log(this.state.imageUrl);
		if (this.state.zoomed !== null) {
			this.setState({ zoomed: null });
		} else {
			this.setState({
				zoomed: `https://ipfs.io/ipfs/${this.state.imageUrl}`,
			});
		}
	};

	readContent = (event) => {
		event.preventDefault();
		this.setState({ comment_content: event.target.value });
	};

	toggleCommentView = async (event) => {
		if (!this.state.hideComments) {
			this.setState({ hideComments: true });
		} else {
			const post_address = "0x" + this.state.address;
			const Post = new web3.eth.Contract(
				JSON.parse(PostContract.interface),
				post_address
			);
			const comments_address = await Post.methods.getComments().call();
			const comments = await (async function (comments_address) {
				let new_comments = [];
				for (let i = 0; i < comments_address.length; i++) {
					const Comment = new web3.eth.Contract(
						JSON.parse(PostContract.interface),
						comments_address[i]
					);
					const currentComment = {
						address: comments_address[i],
						imageUrl: await Comment.methods.image_hash().call(),
						author: await Comment.methods.author().call(),
						content: await Comment.methods.content().call(),
					};
					new_comments.push(currentComment);
				}
				return new_comments;
			})(comments_address);
			this.setState({ comments: comments, hideComments: false });
		}
	};

	donate = async (event) => {
		event.persist();
		event.stopPropagation();
		event.preventDefault();
		let tip = await PostFactory.methods.min_contribution().call();
		tip = web3.utils.fromWei(tip, "ether");
		this.setState({
			is_donate: true,
			min_tip: tip,
		});
	};

	captureFile = (event) => {
		event.preventDefault();
		event.stopPropagation();
		const file = event.target.files[0];
		const reader = new window.FileReader();
		reader.readAsArrayBuffer(file);
		reader.onloadend = () => {
			this.setState({ buffer: Buffer(reader.result) });
		};
	};

	isdonatebuttonon = (event) => {
		event.preventDefault();
		let new_value = true;
		if (event.target.value >= this.state.min_tip) {
			new_value = false;
		}
		this.setState({
			value: event.target.value,
			disable_transact_okay: new_value,
		});
	};

	transact = async (event) => {
		event.persist();
		event.preventDefault();
		accounts = await web3.eth.getAccounts();
		if (metamask_provider == false || accounts.length == 0) {
			this.setState({ metamask: false, is_donate: false });
		} else {
			this.setState({ metamask: true, donating: true });
			const address = this.state.address;
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
	};

	postComment = async (event) => {
		event.persist();
		event.preventDefault();
		event.stopPropagation();
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
				const parent_address = "0x" + this.state.address;
				await PostFactory.methods
					.createComment(
						parent_address,
						result[0].hash,
						this.state.comment_content
					)
					.send({ from: accounts[0] });
				const parent_post = new web3.eth.Contract(
					JSON.parse(PostContract.interface),
					parent_address
				);
				const comments_address = await parent_post.methods
					.getComments()
					.call();
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
				this.setState({
					comments: comments,
					comment_content: "",
					uploading: false,
				});
				const file_uploader = document.getElementById("file_upload_2");
				file_uploader.value = "";
			});
		}
	};

	render() {
		return (
			<div className="row">
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
				<div
					className="col-3"
					style={{ position: "relative", textAlign: "right" }}
				>
					<Navbar />
				</div>
				<div className="container col-9">
					{this.state.is_donate == true && (
						<DonateCard
							min_tip={this.state.min_tip}
							isdonatebuttonon={this.isdonatebuttonon}
							takeback={this.takeback}
							transact={this.transact}
							disable_transact_okay={
								this.state.disable_transact_okay
							}
							donating={this.state.donating}
						/>
					)}
					{this.state.metamask == false && (
						<MetamaskCard takeback={this.takeback} />
					)}
					{this.state.zoomed !== null && (
						<ZoomedImage
							zoomed={this.state.zoomed}
							imageZoom={this.imageZoom}
						/>
					)}
					<FullPost
						address={this.state.address}
						content={this.state.content}
						author={this.state.author}
						imageUrl={this.state.imageUrl}
						comments={this.state.comments}
						hideComments={this.state.hideComments}
						toggleCommentView={this.toggleCommentView}
						imageZoom={this.imageZoom}
						donate={this.donate}
						comment_content={this.state.comment_content}
						postComment={this.postComment}
						readContent={this.readContent}
						captureFile={this.captureFile}
						uploading={this.state.uploading}
					/>
				</div>
			</div>
		);
	}
}

export default withRouter(Post);
