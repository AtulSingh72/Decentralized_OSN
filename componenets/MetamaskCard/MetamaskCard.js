import React from "react";

const metamaskCard = (props) => {
	return (
		<div
			style={{
				position: "fixed",
				zIndex: "1",
				width: "100%",
				height: "100%",
				textAlign: "center",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				left: "0",
				top: "0",
				background: "rgba(0, 0, 0, 0.8)",
			}}
		>
			<div
				style={{
					width: "50%",
					height: "50%",
					background: "white",
					borderRadius: "70px",
					padding: "25px",
				}}
			>
				<img
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2Fa-%2FAAuE7mC1z-HXEKxL4YhAhc7WDHWA6Rnly1I592T5ag%3Ds900-mo-c-c0xffffffff-rj-k-no&f=1&nofb=1"
					style={{
						width: "200px",
						margin: "0px 20px 10px",
					}}
				/>
				<h2 style={{ margin: "5px" }}>OOPS!</h2>
				<h5 style={{ margin: "10px" }}>
					Either the MetaMask extension is not installed or you aren't
					logged into metamask.
				</h5>
				<button
					onClick={props.takeback}
					className="btn btn-info"
					style={{ margin: "20px 40px" }}
				>
					<i className="fa fa-arrow-left"></i> | Naah! Take me back to
					feeds
				</button>
				<a
					href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
					className="btn btn-warning"
					target={"_blank"}
					style={{ margin: "20px 40px" }}
				>
					<i className="fa fa-chrome"></i> | Get MetaMask Extenstion
				</a>
			</div>
		</div>
	);
};

export default metamaskCard;
