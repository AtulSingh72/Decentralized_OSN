import React from "react";
import styles from "./CandidateBar.module.css";

const CandidateBar = (props) => {
	return (
		<div className={styles.candidateBar}>
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
			{!props.voted ? (
				<div className={styles.voteButtons}>
					<button
						className={styles.yes + " btn btn-success"}
						onClick={props.vote_up}
						data-index={props.index}
					>
						<i
							style={{ fontWeight: "600" }}
							className="far fa-thumbs-up"
							data-index={props.index}
						></i>
					</button>
					<button
						className={styles.no + " btn  btn-danger"}
						onClick={props.vote_down}
						data-index={props.index}
					>
						<i
							style={{ fontWeight: "600" }}
							className="far fa-thumbs-down"
							data-index={props.index}
						></i>
					</button>
				</div>
			) : (
				<p className={styles.votedChip}>You have voted!</p>
			)}
		</div>
	);
};

export default CandidateBar;
