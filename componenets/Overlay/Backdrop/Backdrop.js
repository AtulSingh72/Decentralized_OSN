import React from "react";
import PostIndex from "../../../pages";

const Backdrop = (props) => {
	return (
		<div
			style={{
				position: "fixed",
				zIndex: "1",
				width: "100%",
				height: "100%",
				textAlign: "center",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				left: "0",
				top: "0",
				background: "rgba(0, 0, 0, 0.85)",
				zIndex: "2",
			}}
			onClick={props.takeback}
		>
			{props.children}
		</div>
	);
};

export default Backdrop;
