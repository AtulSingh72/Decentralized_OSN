import React, { Component } from "react";
import Head from "next/head";
import Navbar from "../componenets/Navbar/Navbar";
import NominateYourself from "../componenets/NominateYourself/NominateYourself";
import VotingPage from "../componenets/VotingPage/VotingPage";
import PostFactory from "../ethereum/factory";
import { web3, metamask_provider } from "../ethereum/web3";
import MetamaskCard from "../componenets/MetamaskCard/MetamaskCard";
import ElectionContract from "../ethereum/build/election.json";

let accounts = [];

class VotePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			metamask: true,
			ongoing_elections: [],
			past_elections: [],
			is_manager: false,
		};
	}

	async componentDidMount() {
		accounts = await web3.eth.getAccounts();
		const is_manager = await PostFactory.methods
			.managers_map(accounts[0])
			.call();
		let elections = await PostFactory.methods.getOngoingElections().call();
		let all_elections = await (async function (elections) {
			let new_elections = [];
			let old_elections = [];
			for (let i = 0; i < elections.length; i++) {
				const Election = new web3.eth.Contract(
					JSON.parse(ElectionContract.interface),
					elections[i]
				);
				const voting_ended = await Election.methods
					.isElectionEnded(Math.floor(Date.now() / 1000))
					.call();
				if (!voting_ended) {
					const curr_election = {
						index: i,
						address: await Election.methods.candidate().call(),
						voted: await Election.methods
							.voters(accounts[0])
							.call(),
					};
					new_elections.push(curr_election);
				} else {
					const curr_election = {
						index: i,
						address: await Election.methods.candidate().call(),
						result:
							(await Election.methods.vote_yes().call()) >
							(await Election.methods.vote_no().call()),
					};
					old_elections.push(curr_election);
				}
			}
			return [new_elections, old_elections];
		})(elections);
		this.setState({
			ongoing_elections: all_elections[0],
			past_elections: all_elections[1],
			is_manager: is_manager,
		});
		this.continuouslyUpdate();
	}

	continuouslyUpdate = async () => {
		accounts = await web3.eth.getAccounts();
		setInterval(async () => {
			let elections = await PostFactory.methods
				.getOngoingElections()
				.call();
			let all_elections = await (async function (elections) {
				let new_elections = [];
				let old_elections = [];
				for (let i = 0; i < elections.length; i++) {
					const Election = new web3.eth.Contract(
						JSON.parse(ElectionContract.interface),
						elections[i]
					);
					const voting_ended = await Election.methods
						.isElectionEnded(Math.floor(Date.now() / 1000))
						.call();
					if (!voting_ended) {
						const curr_election = {
							index: i,
							address: await Election.methods.candidate().call(),
							voted: await Election.methods
								.voters(accounts[0])
								.call(),
						};
						new_elections.push(curr_election);
					} else {
						const curr_election = {
							index: i,
							address: await Election.methods.candidate().call(),
							result:
								(await Election.methods.vote_yes().call()) >
								(await Election.methods.vote_no().call()),
						};
						old_elections.push(curr_election);
					}
				}
				return [new_elections, old_elections];
			})(elections);
			const is_manager = await PostFactory.methods
				.managers_map(accounts[0])
				.call();
			this.setState({
				ongoing_elections: all_elections[0],
				past_elections: all_elections[1],
				is_manager: is_manager,
			});
		}, 10000);
	};

	takeback = (event) => {
		event.preventDefault();
		this.setState({ metamask: true, is_donate: false });
	};

	nominateMyself = async (event) => {
		event.preventDefault();
		accounts = await web3.eth.getAccounts();
		if (metamask_provider == false || accounts.length == 0) {
			this.setState({ metamask: false });
		} else {
			this.setState({ metamask: true });
			await PostFactory.methods.newElection().send({ from: accounts[0] });
			let elections = await PostFactory.methods
				.getOngoingElections()
				.call();
			let all_elections = await (async function (elections) {
				let new_elections = [];
				let old_elections = [];
				for (let i = 0; i < elections.length; i++) {
					const Election = new web3.eth.Contract(
						JSON.parse(ElectionContract.interface),
						elections[i]
					);
					const voting_ended = await Election.methods
						.isElectionEnded(Math.floor(Date.now() / 1000))
						.call();
					if (!voting_ended) {
						const curr_election = {
							index: i,
							address: await Election.methods.candidate().call(),
							voted: await Election.methods
								.voters(accounts[0])
								.call(),
						};
						new_elections.push(curr_election);
					} else {
						const curr_election = {
							index: i,
							address: await Election.methods.candidate().call(),
							result:
								(await Election.methods.vote_yes().call()) >
								(await Election.methods.vote_no().call()),
						};
						old_elections.push(curr_election);
					}
				}
				return [new_elections, old_elections];
			})(elections);
			this.setState({
				ongoing_elections: all_elections[0],
				past_elections: all_elections[1],
			});
		}
	};

	voteUp = async (event) => {
		event.preventDefault();
		event.persist();
		accounts = await web3.eth.getAccounts();
		const index = event.target.getAttribute("data-index");
		let elections = await PostFactory.methods.getOngoingElections().call();
		const election_address = elections[index];
		const Election = new web3.eth.Contract(
			JSON.parse(ElectionContract.interface),
			election_address
		);
		await Election.methods
			.voteFor(accounts[0], Math.floor(Date.now() / 1000))
			.send({ from: accounts[0] });
		let all_elections = await (async function (elections) {
			let new_elections = [];
			let old_elections = [];
			for (let i = 0; i < elections.length; i++) {
				const Election = new web3.eth.Contract(
					JSON.parse(ElectionContract.interface),
					elections[i]
				);
				const voting_ended = await Election.methods
					.isElectionEnded(Math.floor(Date.now() / 1000))
					.call();
				if (!voting_ended) {
					const curr_election = {
						index: i,
						address: await Election.methods.candidate().call(),
						voted: await Election.methods
							.voters(accounts[0])
							.call(),
					};
					new_elections.push(curr_election);
				} else {
					const curr_election = {
						index: i,
						address: await Election.methods.candidate().call(),
						result:
							(await Election.methods.vote_yes().call()) >
							(await Election.methods.vote_no().call()),
					};
					old_elections.push(curr_election);
				}
			}
			return [new_elections, old_elections];
		})(elections);
		this.setState({
			ongoing_elections: all_elections[0],
			past_elections: all_elections[1],
		});
	};

	voteDown = async (event) => {
		event.preventDefault();
		event.persist();
		accounts = await web3.eth.getAccounts();
		const index = event.target.getAttribute("data-index");
		let elections = await PostFactory.methods.getOngoingElections().call();
		const election_address = elections[index];
		const Election = new web3.eth.Contract(
			JSON.parse(ElectionContract.interface),
			election_address
		);
		await Election.methods
			.voteAgainst(accounts[0], Math.floor(Date.now() / 1000))
			.send({ from: accounts[0] });
		let all_elections = await (async function (elections) {
			let new_elections = [];
			let old_elections = [];
			for (let i = 0; i < elections.length; i++) {
				const Election = new web3.eth.Contract(
					JSON.parse(ElectionContract.interface),
					elections[i]
				);
				const voting_ended = await Election.methods
					.isElectionEnded(Math.floor(Date.now() / 1000))
					.call();
				if (!voting_ended) {
					const curr_election = {
						index: i,
						address: await Election.methods.candidate().call(),
						voted: await Election.methods
							.voters(accounts[0])
							.call(),
					};
					new_elections.push(curr_election);
				} else {
					const curr_election = {
						index: i,
						address: await Election.methods.candidate().call(),
						result:
							(await Election.methods.vote_yes().call()) >
							(await Election.methods.vote_no().call()),
					};
					old_elections.push(curr_election);
				}
			}
			return [new_elections, old_elections];
		})(elections);
		this.setState({
			ongoing_elections: all_elections[0],
			past_elections: all_elections[1],
		});
	};

	render() {
		return (
			<div className="row" style={{}}>
				<Head>
					<title>DOSN</title>
					<link
						href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
						rel="stylesheet"
						integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
						crossorigin="anonymous"
					></link>
					<script
						src="https://kit.fontawesome.com/2c322db396.js"
						crossorigin="anonymous"
					></script>
					<script
						src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
						integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
						crossorigin="anonymous"
					></script>
					<script
						src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
						integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
						crossorigin="anonymous"
					></script>
					<script src="https://cdn.jsdelivr.net/npm/jdenticon@2.2.0"></script>
					<link
						rel="preconnect"
						href="https://fonts.googleapis.com"
					></link>
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossorigin
					></link>
					<link
						href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto+Mono&display=swap"
						rel="stylesheet"
					></link>
				</Head>
				{this.state.metamask == false ? (
					<MetamaskCard takeback={this.takeback} />
				) : null}
				<div
					className="col-lg-3"
					style={{
						position: "relative",
						textAlign: "right",
					}}
				>
					<Navbar />
				</div>
				<div
					className="container col-lg-9"
					style={{ textAlign: "center" }}
				>
					{this.state.is_manager ? null : (
						<NominateYourself
							nominateMyself={this.nominateMyself}
						/>
					)}
					<VotingPage
						ongoing_elections={this.state.ongoing_elections}
						past_elections={this.state.past_elections}
						vote_up={this.voteUp}
						vote_down={this.voteDown}
					/>
				</div>
			</div>
		);
	}
}

export default VotePage;
