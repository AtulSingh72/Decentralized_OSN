import React from "react";
import styles from "./TweetForm.module.css";

const tweetForm = (props) => {
	return (
		<form
			onSubmit={props.submit}
			style={{
				margin: "20px auto",
				maxWidth: "1000px",
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
				onChange={props.readContent}
				value={props.content}
			/>
			<br></br>
			<div className={styles.formfooter}>
				<label
					className={styles.inputbutton + " " + styles.mobilebutton}
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
					style={{ margin: "10px auto", display: "inline-block" }}
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
									Uploading...<br></br>It might take upto 10
									mins!!
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
	);
};

export default tweetForm;
