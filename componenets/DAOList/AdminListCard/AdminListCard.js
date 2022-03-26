import React from "react";
import styles from "./AdminListCard.module.css";

const AdminListCard = (props) => {
	return (
		<div className={styles.nameCard + " row"}>
			<div className="col-2">
				<img
					src={`https://identicon-api.herokuapp.com/${props.children}/40?format=png`}
					style={{
						margin: "5px 20px 5px 5px",
						borderRadius: "50%",
						background: "white",
					}}
					key={props.index}
				/>
			</div>
			<div className={"col-10 " + styles.addressDiv}>
				<h4>{props.children}</h4>
			</div>
		</div>
	);
};

export default AdminListCard;
