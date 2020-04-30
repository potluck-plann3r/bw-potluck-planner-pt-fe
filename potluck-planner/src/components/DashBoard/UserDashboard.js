import React from "react";
import { connect } from "react-redux";
import { getPotlucks, addPotluck } from "../../actions/index";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";

import PotluckCard from "../Potluck/PotLuckCard";
import PotluckView from "../Potluck/PotluckView/PotluckView.js";
import CreatePotluck from "../Potluck/CreatePotluck";

import NavBar from "../FrontPage/NavBar.js";

////////////////////////////////////////////////////
// USER DASH BOARD!!!!!! ///////////////////////////
////////////////////////////////////////////////////

class UserDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	async componentDidMount() {
		await this.props.getPotlucks();
		// this.props.history.push("/protected/potlucks");
	}

	render() {
		if (this.props.fetchingPotlucks) {
			return <h2>Getting your potlucks</h2>;
		} else {
			return (
				<div className="user-dashboard">
					<NavBar login={false} />
					<Route exact path="/protected" component={PotluckCard} />

					<Route
						exact
						path="/protected/create-potlucks"
						component={CreatePotluck}
					/>
					<Route
						exact
						path="/protected/view-potluck/:id"
						component={PotluckView}
					/>
				</div>
			);
		}
	}
}

const mapStateToProps = (state) => ({
	potlucks: state.reducer.potlucks,
	error: state.reducer.error,
	fetchingPotlucks: state.reducer.fetchingPotlucks,
});
const SignOutWithRouter = withRouter(UserDashboard);

//const WithRouter = withRouter(UserDashboard)

export default connect(mapStateToProps, {
	getPotlucks,
	addPotluck,
})(SignOutWithRouter);
