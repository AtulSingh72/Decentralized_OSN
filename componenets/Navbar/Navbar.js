import React from "react";
import NavButtons from "../NavButtons/NavButtons";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";

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
		<div className={styles.navigation} style={{ position: "fixed" }}>
			<nav className={"nav " + styles.desktop}>
				<ul className="nav flex-column">
					<li className="nav-item">
						<NavButtons
							name="Back"
							clickHandler={clickHandler}
							keyValue="back"
						>
							<i
								className={styles.fa + " fa fa-chevron-left"}
								data-index="back"
							></i>
						</NavButtons>
					</li>
					<li className="nav-item">
						<NavButtons
							name="Home"
							clickHandler={clickHandler}
							keyValue="home"
							urlPath="/"
						>
							{console.log(styles.fa)}
							<i
								className={styles.fa + " fa fa-home"}
								data-index="home"
							></i>
						</NavButtons>
					</li>
					<li className="nav-item">
						<NavButtons
							name="Profile"
							clickHandler={clickHandler}
							keyValue="profile"
							urlPath="/profile/[profileid]"
						>
							<i
								className={styles.fa + " fa fa-user"}
								data-index="profile"
							></i>
						</NavButtons>
					</li>
				</ul>
			</nav>
			<nav className={"nav " + styles.mobile}>
				<ul className="nav">
					<li className="nav-item">
						<NavButtons
							name="Back"
							clickHandler={clickHandler}
							keyValue="back"
						>
							<i
								className={styles.fa + " fa fa-chevron-left"}
								data-index="back"
							></i>
						</NavButtons>
					</li>
					<li className="nav-item">
						<NavButtons
							name="Home"
							clickHandler={clickHandler}
							keyValue="home"
							urlPath="/"
						>
							{console.log(styles.fa)}
							<i
								className={styles.fa + " fa fa-home"}
								data-index="home"
							></i>
						</NavButtons>
					</li>
					<li className="nav-item">
						<NavButtons
							name="Profile"
							clickHandler={clickHandler}
							keyValue="profile"
							urlPath="/profile/[profileid]"
						>
							<i
								className={styles.fa + " fa fa-user"}
								data-index="profile"
							></i>
						</NavButtons>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
