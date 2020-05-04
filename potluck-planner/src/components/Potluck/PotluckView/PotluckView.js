import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
	getPotluckById,
	getUsersByPotluckId,
	getRequirements,
	getFood,
	claimRequirement,
	getCurrentUser,
} from "../../../actions/index";
import PotluckInfo from "./PotluckInfo.js";
import PotluckAttendee from "./PotluckAttendee";
import PotluckRequirements from "./PotluckRequirements.js";

import "./PotluckView.scss";

class PotluckView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
		};
	}
	async componentDidMount() {
		let { id } = this.props.match.params;
		await this.props.getPotluckById(id);
		await this.props.getUsersByPotluckId(id);
		await this.props.getRequirements(id);
		await this.props.getFood(id);
		await this.props.getCurrentUser();
		this.setState({ loading: false });
	}

	render() {
		if (this.props.currentPotluck === undefined) {
			return <div>No Potluck</div>;
		} else if (this.props.currentPotluckUsers === undefined) {
			return <div>No Users</div>;
		} else if (this.props.currentRequirements === undefined) {
			return <div>No Requirements</div>;
		} else if (this.props.currentFood === undefined) {
			return <div>No Food</div>;
		} else {
			let curUsers = this.props.currentPotluckUsers;
			let adminView = 1;
			for (var i = 0; i < curUsers.length; i++) {
				console.log(curUsers[i]);
				if (
					curUsers[i].userId === this.props.currentUser.id &&
					curUsers[i].role === 0
				) {
					adminView = 0;
					break;
				}
			}

			return (
				<div className="potluck-view-container">
					<PotluckInfo admin={adminView} />
					<PotluckAttendee admin={adminView} />

					<PotluckRequirements admin={adminView} />
				</div>
			);
		}
	}
}

const mapStateToProps = (state) => ({
	currentPotluck: state.reducer.currentPotluck,
	currentPotluckUsers: state.reducer.currentPotluckUsers,
	currentRequirements: state.reducer.currentRequirements,
	currentFood: state.reducer.currentFood,
	currentUser: state.reducer.currentUser,
});

const PotluckViewWithRouter = withRouter(PotluckView);
export default connect(mapStateToProps, {
	getPotluckById,
	getUsersByPotluckId,
	getRequirements,
	getFood,
	claimRequirement,
	getCurrentUser,
})(PotluckViewWithRouter);
