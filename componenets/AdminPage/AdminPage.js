import React from "react";
import AdminPageCards from "./AdminPageCards/AdminPageCards";
import styles from "./AdminPage.module.css";

const AdminPage = (props) => {
	return (
		<div className={styles.adminPage}>
			<AdminPageCards
				onClick={() => {
					console.log("clicked");
				}}
			>
				<h1>Change Minimum Contribution Amount</h1>
			</AdminPageCards>
			<AdminPageCards onClick={props.seeAdminsList}>
				<h1>View All DAO Admins</h1>
			</AdminPageCards>
		</div>
	);
};

export default AdminPage;
