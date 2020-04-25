import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
	deletePotluck,
	getPotlucks,
	removeAttendee,
} from "../../../actions/index.js";
import "./PotluckView.scss";

class PotluckInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			admin: "non-admin",
			attendee: "non-attendee",
		};
	}
	componentDidMount() {
		if (this.props.admin === 0) {
			this.setState({ ...this.state, admin: "admin" });
		} else {
			this.setState({ ...this.state, attendee: "attendee" });
		}
	}

	onDeletePotluck = async (e) => {
		await this.props.deletePotluck(this.props.currentPotluck.id);
		await this.props.getPotlucks();
		this.props.history.push("/protected");
	};

	onRemoveSelf = async (e) => {
		console.log(`Removing user with id: ${this.props.currentUser.id}`);
		let attendee = {
			potluckId: this.props.currentPotluck.id,
			userId: this.props.currentUser.id,
		};
		await this.props.removeAttendee(attendee);
		await this.props.getPotlucks();
		this.props.history.push("/protected");
	};
	render() {
		return (
			<>
				<h1>{this.props.currentPotluck.locationName}</h1>
				<address>
					<p>
						{this.props.currentPotluck.locationAddress}{" "}
						{this.props.currentPotluck.locationStreet}
						{""}
						{this.props.currentPotluck.locationUnit}
					</p>
					<p>{this.props.currentPotluck.locationCity}</p>
					<p>{this.props.currentPotluck.locationState}</p>
					<p>{this.props.currentPotluck.locationPostcode}</p>
					<p>{this.props.currentPotluck.locationCountry}</p>
				</address>
				<button
					className={this.state.admin}
					onClick={this.onDeletePotluck}
				>
					Delete Potluck
				</button>
				<button
					className={this.state.attendee}
					onClick={this.onRemoveSelf}
				>
					Unattended Potluck
				</button>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	currentPotluck: state.reducer.currentPotluck,
	currentUser: state.reducer.currentUser,
});

const PotluckInfoWithRouter = withRouter(PotluckInfo);

export default connect(mapStateToProps, {
	deletePotluck,
	getPotlucks,
	removeAttendee,
})(PotluckInfoWithRouter);
