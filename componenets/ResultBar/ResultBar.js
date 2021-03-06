import React from "react";
import styles from "./ResultBar.module.css";
import { web3, metamask_provider } from "../../ethereum/web3";
import ElectionContract from "../../ethereum/build/election.json";
import DeElectionContract from "../../ethereum/build/deElection.json";
import PostFactory from "../../ethereum/factory";

const ResultBar = (props) => {
	const showResult = async (event) => {
		const accounts = await web3.eth.getAccounts();
		let show = accounts[0] === props.candidate;
		const Election = new web3.eth.Contract(
			JSON.parse(ElectionContract.interface),
			props.contract_address
		);
		const is_admin = await PostFactory.methods
			.managers_map(accounts[0])
			.call();
		return show && !is_admin;
	};
	const showResult_1 = async (event) => {
		const is_admin = await PostFactory.methods
			.managers_map(props.candidate)
			.call();
		return !is_admin;
	};
	const removeAdmin = async (event) => {
		event.preventDefault();
		event.persist();
		let accounts = await web3.eth.getAccounts();
		console.log(event.target);
		const index = event.target.getAttribute("data-index");
		const elections = await PostFactory.methods
			.getOngoingDeElections()
			.call();
		const curr_election = elections[index];
		const Election = new web3.eth.Contract(
			JSON.parse(DeElectionContract.interface),
			curr_election
		);
		await Election.methods
			.removeAdmin(Math.floor(Date.now() / 1000))
			.send({ from: accounts[0] });
	};
	const becomeAdmin = async (event) => {
		event.preventDefault();
		event.persist();
		let accounts = await web3.eth.getAccounts();
		console.log(event.target);
		const index = event.target.getAttribute("data-index");
		const elections = await PostFactory.methods
			.getOngoingElections()
			.call();
		const curr_election = elections[index];
		const Election = new web3.eth.Contract(
			JSON.parse(ElectionContract.interface),
			curr_election
		);
		if (accounts[0] === (await Election.methods.candidate().call())) {
			await Election.methods
				.addAdmin(Math.floor(Date.now() / 1000))
				.send({ from: accounts[0] });
		}
	};
	const demouseEnter = async (event) => {
		if (props.result == "WON" && (await showResult())) {
			const result = document.getElementById(
				props.contract_address + " hover-start " + props.type
			);
			const button = document.getElementById(
				props.contract_address + " hover-end " + props.type
			);
			result.style.display = "none";
			button.style.display = "block";
		}
	};
	const demouseLeave = async (event) => {
		if (props.result === "WON" && (await showResult())) {
			const result = document.getElementById(
				props.contract_address + " hover-start " + props.type
			);
			const button = document.getElementById(
				props.contract_address + " hover-end " + props.type
			);
			result.style.display = "block";
			button.style.display = "none";
		}
	};
	const mouseEnter = async (event) => {
		if (props.result === "WON" && (await showResult())) {
			console.log(props.result === "WON", await showResult());
			const result = document.getElementById(
				props.contract_address + " hover-start " + props.type
			);
			const button = document.getElementById(
				props.contract_address + " hover-end " + props.type
			);
			result.style.display = "none";
			button.style.display = "block";
		}
	};
	const mouseLeave = async (event) => {
		if (props.result === "WON" && (await showResult())) {
			const result = document.getElementById(
				props.contract_address + " hover-start " + props.type
			);
			const button = document.getElementById(
				props.contract_address + " hover-end " + props.type
			);
			result.style.display = "block";
			button.style.display = "none";
		}
	};
	return (
		<div
			className={styles.ResultBar}
			onMouseEnter={props.type === "election" ? mouseEnter : demouseEnter}
			onMouseLeave={props.type === "election" ? mouseLeave : demouseLeave}
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
				id={props.contract_address + " hover-start " + props.type}
			>
				{props.result}
			</div>
			{props.result === "WON" && showResult() ? (
				<div
					className={styles.adminButton}
					id={props.contract_address + " hover-end " + props.type}
				>
					<button
						className="btn btn-outline-success"
						data-index={props.index}
						onClick={
							props.type === "election"
								? becomeAdmin
								: removeAdmin
						}
					>
						{props.type === "election"
							? "Become Admin"
							: "Remove Admin"}
					</button>
				</div>
			) : null}
		</div>
	);
};

export default ResultBar;
