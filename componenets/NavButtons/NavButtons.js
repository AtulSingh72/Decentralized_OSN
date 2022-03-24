import React from "react";
import { useRouter } from "next/router";

const NavButtons = (props) => {
	const router = useRouter();
	const activate = router.pathname === props.urlPath;
	return (
		<button
			className={activate ? "btn btn-info" : "btn "}
			id={props.keyValue}
			data-bs-toggle="pill"
			data-bs-target="#v-pills-home"
			type="button"
			role="tab"
			aria-controls="v-pills-home"
			aria-selected="true"
			data-index={props.keyValue}
			onClick={props.clickHandler}
		>
			<span className="icon" data-index={props.keyValue}>
				{props.children}
			</span>
			<span
				className="content"
				style={{ fontSize: "26px", margin: "0" }}
				data-index={props.keyValue}
			>
				{props.name}
			</span>
			<style jsx>{`
				button {
					margin: 20px auto;
					width: 100%;
					padding: 15px;
				}
				button:hover {
					background-color: #f9f9f9;
				}
				.icon {
					float: left;
				}
				.content {
					float: right;
				}
				@media only screen and (max-width: 900px) {
					.content {
						display: none;
					}
				}
			`}</style>
		</button>
	);
};

export default NavButtons;
