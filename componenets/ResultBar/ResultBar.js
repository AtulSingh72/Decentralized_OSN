import React from "react";
import styles from "./ResultBar.module.css";
import { web3, metamask_provider } from "../../ethereum/web3";

const ResultBar = (props) => {
	const showResult = async (event) => {
		const accounts = await web3.eth.getAccounts();
		const show = accounts[0] === props.candidate;
		return show;
	};
	const mouseEnter = async (event) => {
		if (props.result === "WON" && (await showResult())) {
			console.log(props.result === "WON", await showResult());
			const result = document.getElementById(
				props.contract_address + " hover-start"
			);
			const button = document.getElementById(
				props.contract_address + " hover-end"
			);
			result.style.display = "none";
			button.style.display = "block";
		}
	};
	const mouseLeave = async (event) => {
		if (props.result === "WON" && (await showResult())) {
			const result = document.getElementById(
				props.contract_address + " hover-start"
			);
			const button = document.getElementById(
				props.contract_address + " hover-end"
			);
			result.style.display = "block";
			button.style.display = "none";
		}
	};
	return (
		<div
			className={styles.ResultBar}
			onMouseEnter={mouseEnter}
			onMouseLeave={mouseLeave}
		>
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
			<div
				className={props.result === "WON" ? styles.won : styles.lost}
				id={props.contract_address + " hover-start"}
			>
				{props.result}
			</div>
			{props.result === "WON" && showResult() ? (
				<div
					className={styles.adminButton}
					id={props.contract_address + " hover-end"}
				>
					<button className="btn btn-outline-success">
						Become Admin
					</button>
				</div>
			) : null}
		</div>
	);
};

export default ResultBar;
