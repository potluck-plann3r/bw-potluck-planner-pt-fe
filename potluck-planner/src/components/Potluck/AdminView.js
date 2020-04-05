import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { addAttendee, removeAttendee } from "../../actions/index";

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
	onChange = (e) => {
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
	onSubmit = (e) => {
		let newAttendee = {
			potluckId: this.props.currentPotluck.id,
			role: 0,
			email: this.state.newAttendee,
		};
		this.props.addAttendee(newAttendee);
		this.setState({ ...this.state, newAttendee: "" });
	};

	render() {
		return (
			<>
				<div>{console.log(this.props.currentPotluck)}</div>
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
									<button
										id={user.userId}
										onClick={this.removeAttendee}
									>
										Remove
									</button>
								</>
							);
						})}
					</div>
					<form onSubmit={this.onSubmit}>
						<div>Add Attendee</div>
						<input
							type="text"
							placeHolder="email"
							value={this.state.newAttendee}
							onChange={this.onChange}
							name="newAttendee"
						/>
						<button>Add Attendee </button>
					</form>
				</div>
				<div>
					<h2>Food Requirements</h2>
					<div>
						{this.props.currentRequirements.map((req) => (
							<>
								<h3>{req.foodCategory}</h3>
								<p>
									{req.foodDescription}
									{": "}
									{req.servings}
								</p>
							</>
						))}
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

export default connect(mapStateToProps, { addAttendee, removeAttendee })(
	AdminViewWithRouter
);
