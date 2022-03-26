import React from "react";
import Backdrop from "../Overlay/Backdrop/Backdrop";
import Modal from "../Overlay/Modal/Modal";
import styles from "./DAOList.module.css";
import AdminListCard from "./AdminListCard/AdminListCard";

const metamaskCard = (props) => {
	return (
		<Backdrop takeback={props.takeback}>
			<Modal>
				<h2 style={{ margin: "5px" }}>Current Admins</h2>
				<div className={styles.namesDiv}>
					{props.admins
						.slice(0)
						.reverse()
						.map((admin, index) => (
							<AdminListCard key={index}>{admin}</AdminListCard>
						))}
				</div>
				<button
					onClick={props.takeback}
					className="btn btn-info"
					style={{ margin: "20px 40px", bottom: "0" }}
				>
					<i className="fa fa-arrow-left"></i> | Done! Take me back to
					Admin Page
				</button>
			</Modal>
		</Backdrop>
	);
};

export default metamaskCard;
