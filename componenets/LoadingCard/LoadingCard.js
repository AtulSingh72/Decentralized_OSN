import React from "react";
import Backdrop from "../Overlay/Backdrop/Backdrop";
import Modal from "../Overlay/Modal/Modal";

const loadingCard = () => {
	return (
		<Backdrop>
			<Modal>
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
			</Modal>
		</Backdrop>
	);
};

export default loadingCard;
