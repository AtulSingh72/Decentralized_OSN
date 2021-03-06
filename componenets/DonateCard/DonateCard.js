import React from "react";
import Backdrop from "../Overlay/Backdrop/Backdrop";
import Modal from "../Overlay/Modal/Modal";

const donateCard = (props) => {
	return (
		<Backdrop takeback={props.takeback}>
			<Modal>
				<img
					src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FMVgBbtMBGQTi6og4mF%2Fgiphy.gif&f=1&nofb=1"
					style={{
						width: "200px",
						margin: "0px 20px 10px",
					}}
				/>
				<h2 style={{ margin: "5px" }}>Choose your TIP amount</h2>
				<div
					className="input-group input-group-lg flex-nowrap"
					style={{
						width: "60%",
						margin: "30px auto 10px",
					}}
				>
					<input
						className="form-control"
						type="number"
						placeholder={`Minimum TIP Amount is ${props.min_tip} ETH`}
						min="10"
						onChange={props.isdonatebuttonon}
					/>
					<span className="input-group-text" id="addon-wrapping">
						ETH
					</span>
				</div>
				<button
					onClick={props.takeback}
					className="btn btn-info"
					style={{ margin: "20px 40px" }}
				>
					<i className="fa fa-close"></i> | Naah! Take me back to
					feeds
				</button>
				<button
					className="btn btn-warning"
					style={{ margin: "20px 40px" }}
					id="donate-ok"
					onClick={props.transact}
					disabled={props.disable_transact_okay}
				>
					<div>
						{props.donating == true && (
							<div>
								<img
									src="https://c.tenor.com/k-A2Bukh1lUAAAAi/loading-loading-symbol.gif"
									style={{
										height: "28px",
										margin: "0 15px 0 0",
									}}
								/>
								| Transaction is being performed
							</div>
						)}
						{props.donating == false && (
							<div>
								<i className="fa fa-check"></i>| Done! Send this
								TIP amount
							</div>
						)}
					</div>
				</button>
			</Modal>
		</Backdrop>
	);
};

export default donateCard;
