import React from "react";

const tweetForm = (props) => {
	return (
		<form
			onSubmit={props.submit}
			style={{
				margin: "20px auto",
				textAlign: "center",
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
			<input
				type="file"
				onChange={props.captureFile}
				style={{ margin: "10px" }}
				id="file_upload"
			/>
			<button
				type="submit"
				className="btn btn-primary"
				style={{ margin: "10px" }}
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
				{!props.uploading && "Submit"}
			</button>
		</form>
	);
};

export default tweetForm;
