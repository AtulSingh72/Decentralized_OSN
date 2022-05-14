import React from "react";
import styles from "./NominateYourself.module.css";

const NominateYourself = (props) => {
	return (
		<button
			className={styles.floatingButton + " btn btn-success btn-lg"}
			onClick={props.nominateMyself}
		>
			<i className="fas fa-award" style={{ margin: "10px" }}></i> Nominate
			Myself
		</button>
	);
};

export default NominateYourself;
