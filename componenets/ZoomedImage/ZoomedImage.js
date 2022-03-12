import React from "react";

const zoomedImage = (props) => {
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
				background: "rgba(0, 0, 0, 0.8)",
			}}
		>
			<img
				src={props.zoomed}
				onClick={props.imageZoom}
				style={{
					maxWidth: "90%",
					maxHeight: "90%",
					cursor: "zoom-out",
				}}
			/>
		</div>
	);
};

export default zoomedImage;
