import React from "react";

const Modal = (props) => {
	const stopPropogation = (event) => {
		event.stopPropagation();
	};
	return (
		<div
			style={{
				minWidth: "50%",
				minHeight: "50%",
				background: "white",
				borderRadius: "70px",
				padding: "25px",
				margin: "10px",
				zIndex: "3",
			}}
			onClick={stopPropogation}
		>
			{props.children}
		</div>
	);
};

export default Modal;
