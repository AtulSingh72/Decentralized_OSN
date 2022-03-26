import React, { Component } from "react";
import Head from "next/head";
import Navbar from "../componenets/Navbar/Navbar";
import AdminPage from "../componenets/AdminPage/AdminPage";
import DAOList from "../componenets/DAOList/DAOList";
import PostFactory from "../ethereum/factory";

class PostIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			admins: [],
			admins_list_show: false,
		};
	}

	seeAdminsList = async (event) => {
		event.preventDefault();
		const admins_list = await PostFactory.methods.getManagersList().call();
		this.setState({ admins: admins_list, admins_list_show: true });
	};

	takeback = (event) => {
		event.preventDefault();
		this.setState({ admins_list_show: false });
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
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
					></link>
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
				</Head>
				{this.state.admins_list_show ? (
					<DAOList
						admins={this.state.admins}
						takeback={this.takeback}
					/>
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
				<div className="container col-lg-9">
					<AdminPage seeAdminsList={this.seeAdminsList} />
				</div>
			</div>
		);
	}
}

export default PostIndex;
