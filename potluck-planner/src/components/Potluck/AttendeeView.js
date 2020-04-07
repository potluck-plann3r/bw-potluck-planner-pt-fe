import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
	addAttendee,
	removeAttendee,
	addRequirement,
	removeRequirement,
	claimRequirement,
} from "../../actions/index";

class AttendeeView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newAttendee: "",
			newRequirement: {
				category: "",
				item: "",
				servings: "",
			},
		};
	}
	onChangeAttendee = (e) => {
		e.preventDefault();
		this.setState({
			...this.state,
			[e.target.name]: e.target.value,
		});
	};

	removeAttendee = (e) => {
		let attendee = {
			potluckId: this.props.currentPotluck.id,
			userId: e.target.id,
		};
		console.log("ATTENDEE");
		console.log(attendee);
		this.props.removeAttendee(attendee);
	};

	onSubmitAttendee = (e) => {
		e.preventDefault();
		let newAttendee = {
			potluckId: this.props.currentPotluck.id,
			role: 0,
			email: this.state.newAttendee,
		};
		this.props.addAttendee(newAttendee);
		this.setState({ ...this.state, newAttendee: "" });
	};

	onChangeReq = (e) => {
		e.preventDefault();
		this.setState({
			newRequirement: {
				...this.state.newRequirement,
				[e.target.name]: e.target.value,
			},
		});
	};
	removeRequirement = (e) => {
		e.preventDefault();
		this.props.removeRequirement(e.target.id);
	};

	onSubmitReq = (e) => {
		e.preventDefault();
		let potluckId = this.props.currentPotluck.id;
		let newRequirement = {
			foodCategory: this.state.newRequirement.category,
			foodDescription: this.state.newRequirement.item,
			servings: this.state.newRequirement.servings,
			fufilled: false,
		};
		this.props.addRequirement(newRequirement, potluckId);
		this.setState({
			newRequirement: {
				category: "",
				item: "",
				servings: "",
				fufilled: false,
			},
		});
	};

	onClaimRequirement = (e) => {
		let curReqs = this.props.currentRequirements;
		console.log("CURRENT REQUIREMENTS");
		console.log(e.target.id);
		let selectedReq;

		for (var i = 0; i < curReqs.length; i++) {
			if (curReqs[i].id === parseInt(e.target.id)) {
				selectedReq = i;
				break;
			}
		}

		console.log(curReqs[selectedReq]);

		let food = {
			reqId: curReqs[selectedReq].id,
			potluckId: this.props.currentPotluck.id,
			foodCategory: curReqs[selectedReq].foodCategory,
			foodDescription: curReqs[selectedReq].foodDescription,
			servings: curReqs[selectedReq].servings,
		};

		console.log(food);
		this.props.claimRequirement(food);
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
				<div>
					<h2>Attendees</h2>
					<div>
						{this.props.currentPotluckUsers.map((user) => {
							console.log(user);
							return (
								<>
									<h4>
										{user.firstName} {user.lastName}
									</h4>
								</>
							);
						})}
					</div>
				</div>
				<div>
					<h2>Food Requirements</h2>
					<div>
						{this.props.currentRequirements.map((req) => {
							var users = this.props.currentPotluckUsers;
							var user;
							for (var i = 0; i < users.length; i++) {
								if (users[i].userId === req.fufilled) {
									user =
										users[i].firstName +
										" " +
										users[i].lastName;
									break;
								} else {
									user = "Unclaimed";
								}
							}
							return (
								<>
									<h3>{req.foodCategory}</h3>
									<p>
										{req.foodDescription}
										{": "}
										{req.servings}
									</p>
									<h3>{user}</h3>
									<button
										id={req.id}
										onClick={this.onClaimRequirement}
									>
										Claim Requirement
									</button>
								</>
							);
						})}
					</div>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	currentPotluck: state.reducer.currentPotluck,
	currentPotluckUsers: state.reducer.currentPotluckUsers,
	currentRequirements: state.reducer.currentRequirements,
});

const AttendeeViewWithRouter = withRouter(AttendeeView);

export default connect(mapStateToProps, {
	addAttendee,
	removeAttendee,
	addRequirement,
	removeRequirement,
	claimRequirement,
})(AttendeeViewWithRouter);
