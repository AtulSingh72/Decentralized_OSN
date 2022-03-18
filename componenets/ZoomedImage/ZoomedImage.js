import React from "react";
import Backdrop from "../Overlay/Backdrop/Backdrop";

const zoomedImage = (props) => {
	return (
		<Backdrop takeback={props.imageZoom}>
			<img
				src={props.zoomed}
				onClick={props.imageZoom}
				style={{
					maxWidth: "90%",
					maxHeight: "90%",
					cursor: "zoom-out",
				}}
			/>
		</Backdrop>
	);
};

export default zoomedImage;
