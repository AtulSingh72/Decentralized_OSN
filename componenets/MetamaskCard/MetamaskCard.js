import React from "react";
import Backdrop from "../Overlay/Backdrop/Backdrop";
import Modal from "../Overlay/Modal/Modal";

const metamaskCard = (props) => {
	return (
		<Backdrop takeback={props.takeback}>
			<Modal>
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
			</Modal>
		</Backdrop>
	);
};

export default metamaskCard;
