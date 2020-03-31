import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";
import Registration from "../components/Login/Registration";
import Login from "../components/Login/Login";

class FrontPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		this.props.history.push("/login");
	}

	render() {
		return (
			<>
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Registration} />
			</>
		);
	}
}

const FrontPageWithRouter = withRouter(FrontPage);

export default connect(null)(FrontPageWithRouter);
