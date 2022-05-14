import React from "react";
import CandidateBar from "../CandidateBar/CandidateBar";
import ResultBar from "../ResultBar/ResultBar";

const VotingPage = (props) => {
	return (
		<div>
			<h1
				style={{
					width: "100%",
					textAlign: "center",
					fontSize: "52px",
					margin: "20px auto",
				}}
			>
				Ongoing Election Candidates
			</h1>
			{props.ongoing_elections
				.slice(0)
				.reverse()
				.map((election, index) => (
					<CandidateBar
						index={election.index}
						candidate={election.address}
						voted={election.voted}
						vote_up={props.vote_up}
						vote_down={props.vote_down}
					/>
				))}
			<hr style={{ margin: "50px" }}></hr>
			<h1
				style={{
					width: "100%",
					textAlign: "center",
					fontSize: "52px",
					margin: "20px auto",
				}}
			>
				Previous Election Results
			</h1>
			{props.past_elections
				.slice(0)
				.reverse()
				.map((election, index) => (
					<ResultBar
						index={election.index}
						candidate={election.address}
						contract_address={election.contract_address}
						result={election.result ? "WON" : "LOST"}
					/>
				))}
		</div>
	);
};

export default VotingPage;
