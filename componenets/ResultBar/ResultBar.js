import React from "react";
import styles from "./ResultBar.module.css";

const ResultBar = (props) => {
	return (
		<div className={styles.ResultBar}>
			<div className={styles.candidateImage}>
				<img
					src={`https://identicon-api.herokuapp.com/${props.candidate}/40?format=png`}
					style={{
						margin: "5px 20px 5px 5px",
						borderRadius: "50%",
						background: "white",
					}}
					key={props.index}
				/>
			</div>
			<div className={styles.candidateName}>
				<h5>{props.candidate}</h5>
			</div>
			<div className={props.result === "WON" ? styles.won : styles.lost}>
				{props.result}
			</div>
		</div>
	);
};

export default ResultBar;
