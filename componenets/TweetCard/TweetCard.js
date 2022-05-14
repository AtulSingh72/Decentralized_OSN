import React, { useEffect } from "react";
import { useRouter } from "next/router";
import CommentCard from "../CommentCard/CommentCard";
import styles from "./TweetCard.module.css";

const tweetCard = (props) => {
	console.log(props.post);
	const router = useRouter();
	useEffect(() => {
		props.isLoaded();
	}, []);
	return (
		<div
			className="card"
			style={{
				margin: "20px auto 20px",
				maxWidth: "1000px",
				height: "fit-content",
			}}
			key={props.index}
		>
			<h6 className="card-header">
				<img
					src={`https://identicon-api.herokuapp.com/${props.post.author}/40?format=png`}
					style={{
						margin: "5px 20px 5px 5px",
						borderRadius: "50%",
						background: "white",
					}}
					key={props.index}
				/>
				{props.post.author}
			</h6>
			<div
				className={styles.opener}
				onClick={(event) => {
					router.push(`/posts/${props.post.address.substring(2)}`);
				}}
			>
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
						src={`https://ipfs.io/ipfs/${props.post.imageUrl}`}
						className="card-img-top img-fluid"
						style={{
							objectFit: "contain",
							cursor: "zoom-in",
							borderRadius: "25px",
							height: "auto",
							width: "auto",
							margin: "0 auto",
							maxHeight: "500px",
							minHeight: "65px",
						}}
						onClick={props.imageZoom}
						onLoad={props.imageLoaded}
						data-index={props.postLength - 1 - props.index}
					/>
				</div>
				<div className="card-body" style={{ height: "auto" }}>
					<p
						className="card-text"
						style={{
							fontSize: "22px",
							margin: "20px",
						}}
					>
						{props.post.content}
					</p>
				</div>
			</div>
			<hr
				style={{
					width: "80%",
					margin: "0 auto 20px",
				}}
			></hr>
			<div className={styles.postCardFooter}>
				<button
					className={"btn btn-outline-dark " + styles.mobilebutton}
					onClick={props.donate}
					data-index={props.postLength - 1 - props.index}
				>
					<img
						src="https://cdn-icons-png.flaticon.com/512/1777/1777889.png"
						style={{
							width: "28px",
							margin: "auto 5px",
						}}
						data-index={props.postLength - 1 - props.index}
					/>
					<span>Tip this post</span>
				</button>
				<button
					className={"btn btn-outline-primary " + styles.mobilebutton}
					style={{
						float: "right",
					}}
					data-index={props.postLength - 1 - props.index}
					onClick={props.commentHide}
				>
					<i
						className="fa fa-comments"
						style={{ margin: "0 5px" }}
						data-index={props.postLength - 1 - props.index}
					></i>{" "}
					<span>Comments</span>
				</button>
			</div>
			<div
				id={"comments" + (props.postLength - props.index - 1)}
				style={{ margin: "10px", display: "none" }}
			>
				<form
					onSubmit={props.postComment}
					style={{
						margin: "20px auto",
						textAlign: "center",
						maxWidth: "550px",
						borderRadius: "5px",
						border: "1px solid gray",
					}}
					data-index={props.postLength - 1 - props.index}
				>
					<textarea
						placeholder="Comment on this post..."
						style={{
							width: "100%",
							height: "100px",
							padding: "12px",
							border: "0px solid black",
						}}
						onChange={props.readContent}
						value={props.content}
					/>
					<br></br>
					<div className={styles.formfooter}>
						<label
							className={
								styles.inputbutton + " " + styles.mobilebutton
							}
						>
							<input
								className={styles.fileinput}
								type="file"
								onChange={props.captureFile}
								id="file_upload"
							/>
							<i
								className="fa fa-picture-o"
								aria-hidden="true"
								style={{ margin: "5px auto" }}
							></i>
							<span>Upload Image</span>
						</label>
						<button
							type="submit"
							className="btn btn-primary"
							style={{
								margin: "10px auto",
								display: "inline-block",
							}}
						>
							{props.uploading && (
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
											Uploading...<br></br>It might take
											upto 10 mins!!
										</div>
									</span>
								</div>
							)}
							{!props.uploading && (
								<div className={styles.mobilebutton}>
									<i
										className="fa fa-upload"
										aria-hidden="true"
										style={{ margin: "5px" }}
									></i>{" "}
									<span>Submit</span>
								</div>
							)}
						</button>
					</div>
				</form>
				{props.post.comments
					.slice(0)
					.reverse()
					.map((comment, comment_index) => (
						<CommentCard
							comment={comment}
							comment_index={comment_index}
						/>
					))}
			</div>
		</div>
	);
};

export default tweetCard;
