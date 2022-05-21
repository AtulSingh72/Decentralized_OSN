import React from "react";
import styles from "./RemoveAdmin.module.css";

const RemoveAdmin = (props) => {
	return (
		<div className={styles.deleteDiv}>
			<span>
				<input
					id="admin_id"
					className={"form-control " + styles.form}
					type="text"
				/>
			</span>
			<span>
				<button
					className={styles.floatingButton + " btn btn-danger btn-lg"}
					onClick={props.removeAdmin}
				>
					<i
						className="fa fa-user-times"
						style={{ margin: "10px" }}
					></i>{" "}
					Remove Admin
				</button>
			</span>
		</div>
	);
};

export default RemoveAdmin;
