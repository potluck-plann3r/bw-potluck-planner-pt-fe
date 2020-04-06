import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
	getPotluckById,
	getUsersByPotluckId,
	getRequirements,
	getFood,
} from "../../actions/index";
import AdminView from "./AdminView";

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
			console.log(this.state.currentPotluck);
			return <AdminView />;
		}
	}
}

const mapStateToProps = (state) => ({
	currentPotluck: state.reducer.currentPotluck,
	currentPotluckUsers: state.reducer.currentPotluckUsers,
	currentRequirements: state.reducer.currentRequirements,
	currentFood: state.reducer.currentFood,
});

const PotluckViewWithRouter = withRouter(PotluckView);
export default connect(mapStateToProps, {
	getPotluckById,
	getUsersByPotluckId,
	getRequirements,
	getFood,
})(PotluckViewWithRouter);
