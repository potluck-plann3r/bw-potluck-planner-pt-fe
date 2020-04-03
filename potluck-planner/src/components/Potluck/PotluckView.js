import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
	getPotluckById,
	getUsersByPotluckId,
	getRequirements,
} from "../../actions/index";
import AdminView from "./AdminView";

class PotluckView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		let { id } = this.props.match.params;
		this.props.getPotluckById(id);
		this.props.getUsersByPotluckId(id);
		this.props.getRequirements(id);
		console.log("Were Here");
	}

	render() {
		if (this.props.currentPotluck === undefined) {
			return <div>No Potluck</div>;
		} else if (this.props.currentPotluckUsers === undefined) {
			return <div>No Users</div>;
		} else if (this.props.currentRequirements === undefined) {
			return <div>No Requirements</div>;
		} else {
			return <AdminView />;
		}
	}
}

const mapStateToProps = state => ({
	currentPotluck: state.reducer.currentPotluck,
	currentPotluckUsers: state.reducer.currentPotluckUsers,
	currentRequirements: state.reducer.currentRequirements,
});

const PotluckViewWithRouter = withRouter(PotluckView);
export default connect(mapStateToProps, {
	getPotluckById,
	getUsersByPotluckId,
	getRequirements,
})(PotluckViewWithRouter);
