import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
	addAttendee,
	removeAttendee,
	addRequirement,
	removeRequirement,
	claimRequirement,
	getRequirements,
	getUsersByPotluckId,
} from "../../actions/index";

class AdminView extends React.Component {
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
		this.props.getUsersByPotluckId(this.props.currentPotluck.id);
	};
	onSubmitAttendee = (e) => {
		e.preventDefault();
		let newAttendee = {
			potluckId: this.props.currentPotluck.id,
			role: 1,
			email: this.state.newAttendee,
		};
		this.props.addAttendee(newAttendee);
		this.setState({ ...this.state, newAttendee: "" });
		this.props.getUsersByPotluckId(this.props.currentPotluck.id);
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
		this.props.getRequirements(this.props.currentPotluck.id);
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
		this.props.getRequirements(this.props.currentPotluck.id);
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
		this.props.getRequirements(this.props.currentPotluck.id);
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
								<form>
									<h4>
										{user.firstName} {user.lastName}
									</h4>
									<button
										id={user.userId}
										onClick={this.removeAttendee}
									>
										Remove
									</button>
								</form>
							);
						})}
					</div>
					<form>
						<div>Add Attendee</div>
						<input
							type="text"
							placeHolder="email"
							value={this.state.newAttendee}
							onChange={this.onChangeAttendee}
							name="newAttendee"
						/>
						<button onClick={this.onSubmitAttendee}>
							Add Attendee{" "}
						</button>
					</form>
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
									<form>
										<button
											id={req.id}
											onClick={this.removeRequirement}
										>
											Remove Requirement
										</button>
									</form>
									<form>
										<button
											id={req.id}
											onClick={this.onClaimRequirement}
										>
											Claim Requirement
										</button>
									</form>
								</>
							);
						})}
					</div>
					<div>
						<h3>Add Requirement</h3>
						<form>
							<input
								type="text"
								name="category"
								placeholder="food category"
								value={this.state.newRequirement.category}
								onChange={this.onChangeReq}
							/>
							<input
								type="text"
								name="item"
								placeholder="food name"
								value={this.state.newRequirement.item}
								onChange={this.onChangeReq}
							/>
							<input
								type="number"
								name="servings"
								placeholder="servings"
								value={this.state.newRequirement.servings}
								onChange={this.onChangeReq}
							/>
							<button onClick={this.onSubmitReq}>
								Add Requirement
							</button>
						</form>
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

const AdminViewWithRouter = withRouter(AdminView);

export default connect(mapStateToProps, {
	addAttendee,
	removeAttendee,
	addRequirement,
	removeRequirement,
	claimRequirement,
	getRequirements,
	getUsersByPotluckId,
})(AdminViewWithRouter);
