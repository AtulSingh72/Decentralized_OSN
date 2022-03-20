import React from "react";
import CommentCard from "../CommentCard/CommentCard";
import CommentFullPost from "../CommentFullPost/CommentFullPost";

const FullPost = (props) => {
	return (
		<div className="card">
			<h5 className="card-header">
				<img
					src={`https://identicon-api.herokuapp.com/${props.author}/40?format=png`}
					style={{
						margin: "5px 20px 5px 5px",
						borderRadius: "50%",
						background: "white",
					}}
				/>
				{props.author}
			</h5>
			<p className="content">{props.content}</p>
			<div className="image-container">
				<img
					src={`https://ipfs.io/ipfs/${props.imageUrl}`}
					className="card-img-top img-fluid"
					style={{
						objectFit: "contain",
						cursor: "zoom-in",
						borderRadius: "25px",
						height: "auto",
						width: "auto",
						margin: "0 auto",
						maxHeight: "600px",
					}}
					onClick={props.imageZoom}
				/>
			</div>
			<hr style={{ width: "80%", margin: "20px auto" }}></hr>
			<div>
				<button
					className="btn btn-outline-dark"
					style={{
						width: "fit-content",
						margin: "0 5px 20px 20px",
						padding: "10px",
					}}
					onClick={props.donate}
				>
					<img
						className="icons"
						src="https://cdn-icons-png.flaticon.com/512/1777/1777889.png"
						style={{
							margin: "auto 5px",
							width: "25px",
						}}
					/>
					Tip this post
				</button>
				<button
					className="btn btn-outline-primary"
					style={{
						width: "fit-content",
						margin: "0 20px 20px 5px",
						padding: "10px",
						float: "right",
					}}
					onClick={props.toggleCommentView}
				>
					<i
						className="fa fa-comments icons"
						style={{ margin: "0 5px", fontSize: "20px" }}
					></i>{" "}
					Comments
				</button>
			</div>
			{props.hideComments ? null : (
				<div className="comments-div">
					<form
						style={{
							margin: "20px auto",
							textAlign: "center",
							width: "750px",
							borderRadius: "5px",
							border: "1px solid gray",
						}}
						onSubmit={props.postComment}
					>
						<textarea
							placeholder="Comment on this post..."
							style={{
								width: "100%",
								height: "100px",
								padding: "12px",
								border: "0px solid black",
								fontSize: "18px",
							}}
							onChange={props.readContent}
							value={props.comment_content}
						/>
						<br></br>
						<input
							type="file"
							style={{ margin: "10px" }}
							id="file_upload_2"
							onChange={props.captureFile}
						/>
						<button
							type="submit"
							className="btn btn-primary"
							style={{ margin: "10px" }}
						>
							{props.uploading && (
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
											<br></br>It might take upto 10
											mins!!
										</div>
									</span>
								</div>
							)}
							{!props.uploading && "Submit"}
						</button>
					</form>
					{props.comments
						.slice(0)
						.reverse()
						.map((comment, comment_index) => (
							<CommentFullPost
								comment={comment}
								comment_index={
									props.comments.length - 1 - comment_index
								}
							/>
						))}
				</div>
			)}
			<style jsx>
				{`
					.card {
						max-width: 800px;
						margin: 40px auto;
					}
					.content {
						font-size: 30px;
						margin: 20px 40px;
					}
					.image-container {
						text-align: center;
						margin: 20px;
					}
					button {
						font-size: 15px;
					}
				`}
			</style>
		</div>
	);
};

export default FullPost;
