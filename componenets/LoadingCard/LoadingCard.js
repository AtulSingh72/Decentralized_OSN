import React from "react";

const loadingCard = () => {
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
					width: "40%",
					height: "40%",
					background: "white",
					borderRadius: "70px",
					padding: "25px",
				}}
			>
				<img
					src="https://c.tenor.com/UTxZPwKlNNIAAAAi/ethereum-ethereum-crypto.gif"
					style={{
						width: "200px",
						margin: "0px 20px 40px",
					}}
				/>
				<h2 style={{ margin: "20px" }}>
					Welcome to your Decentralized World!!
				</h2>
				<h5 style={{ margin: "10px" }}>
					Hold tight while we setup the contents for you
				</h5>
			</div>
		</div>
	);
};

export default loadingCard;
