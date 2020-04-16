import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
	addAttendee,
	getUsersByPotluckId,
	removeAttendee,
} from "../../../actions/index";

class PotluckAttendee extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			admin: "non-admin",
			newAttendee: "",
		};
	}

	componentDidMount() {
		if (this.props.admin === 0) {
			this.setState({ ...this.state, admin: "admin" });
		}
		console.log(this.state.admin);
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

	render() {
		return (
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
									className={this.state.admin}
								>
									Remove
								</button>
							</form>
						);
					})}
				</div>
				<form className={this.state.admin}>
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
		);
	}
}
const mapStateToProps = (state) => ({
	currentPotluckUsers: state.reducer.currentPotluckUsers,
	currentPotluck: state.reducer.currentPotluck,
});

const PotluckAttendeeWithRouter = withRouter(PotluckAttendee);

export default connect(mapStateToProps, {
	addAttendee,
	removeAttendee,
	getUsersByPotluckId,
})(PotluckAttendeeWithRouter);
