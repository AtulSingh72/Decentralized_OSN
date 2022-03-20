import React from "react";
import NavButtons from "../NavButtons/NavButtons";
import { useRouter } from "next/router";

const Navbar = () => {
	const router = useRouter();
	const clickHandler = (event) => {
		event.preventDefault();
		const button = event.target.getAttribute("data-index");
		if (button === "home") {
			router.push("/");
		}
		if (button == "back") {
			router.back();
		}
	};
	return (
		<div style={{ position: "fixed" }}>
			<div
				className="nav flex-column nav-pills me-3"
				id="v-pills-tab"
				role="tablist"
				aria-orientation="vertical"
			>
				<NavButtons
					name="Back"
					clickHandler={clickHandler}
					keyValue="back"
				>
					<i className="fa fa-chevron-left" data-index="back"></i>
				</NavButtons>
				<NavButtons
					name="Home"
					clickHandler={clickHandler}
					keyValue="home"
					urlPath="/"
				>
					<i className="fa fa-home" data-index="home"></i>
				</NavButtons>
				<NavButtons
					name="Profile"
					clickHandler={clickHandler}
					keyValue="profile"
					urlPath="/profile/[profileid]"
				>
					<i className="fa fa-user" data-index="profile"></i>
				</NavButtons>
			</div>
			<style jsx>{`
				.nav {
					padding: 50px 10px;
					width: 100%;
				}
				.fa {
					font-size: 36px;
				}
				@media only screen and (max-width: 900px) {
					.fa {
						font-size: 34px;
					}
				}
			`}</style>
		</div>
	);
};

export default Navbar;
