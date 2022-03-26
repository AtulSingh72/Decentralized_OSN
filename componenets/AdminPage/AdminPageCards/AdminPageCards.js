import React from "react";
import styles from "./AdminPageCards.module.css";

const AdminPageCards = (props) => {
	return (
		<div className={styles.cards} onClick={props.onClick}>
			{props.children}
		</div>
	);
};

export default AdminPageCards;
