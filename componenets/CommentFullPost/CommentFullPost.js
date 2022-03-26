import React from "react";
import { useRouter } from "next/router";

const CommentFullPost = (props) => {
	const router = useRouter();
	return (
		<div
			className="card"
			style={{
				margin: "20px auto 20px",
				maxWidth: "750px",
				height: "fit-content",
			}}
			key={"comments_" + props.comment_index}
			onClick={(event) => {
				router.push(`/posts/${props.comment.address.substring(2)}`);
			}}
		>
			<p
				className="card-header"
				style={{
					fontWeight: "500",
					fontSize: "17px",
				}}
			>
				<img
					src={`https://identicon-api.herokuapp.com/${props.comment.author}/30?format=png`}
					style={{
						margin: "5px 20px 5px 5px",
						borderRadius: "50%",
						background: "white",
					}}
					key={"comments_" + props.comment_index}
				/>
				{props.comment.author}
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
					src={`https://ipfs.io/ipfs/${props.comment.imageUrl}`}
					className="card-img-top img-fluid"
					style={{
						objectFit: "contain",
						borderRadius: "25px",
						height: "auto",
						width: "auto",
						margin: "0 auto",
						maxHeight: "300px",
					}}
				/>
			</div>
			<div className="card-body" style={{ height: "auto" }}>
				<p
					className="card-text"
					style={{
						fontSize: "22px",
						margin: "0px",
					}}
				>
					{props.comment.content}
				</p>
			</div>
			<style jsx>{`
				.card:hover {
					background-color: #f9f9f9;
					cursor: pointer;
				}
			`}</style>
		</div>
	);
};

export default CommentFullPost;
