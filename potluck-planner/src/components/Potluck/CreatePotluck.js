import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { addPotluck, getPotlucks } from "../../actions/index";

class CreatePotluck extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			locationName: "",
			locationAddress: "",
			locationStreet: "",
			locationUnit: "",
			locationState: "",
			locationCity: "",
			locationCountry: "",
			locationPostcode: "",
		};
	}

	onChange = (e) => {
		e.preventDefault();
		console.log(this.state);
		this.setState({
			...this.state,
			[e.target.name]: e.target.value,
		});
	};

	onCancel = (_) => {
		this.props.history.push("/protected/potlucks");
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		await this.props.addPotluck(this.state);
		await this.props.getPotlucks();
		// console.log("DONE");
		this.props.history.push("/protected");
	};

	render() {
		return (
			<div className="create-potluck">
				<h1>Create a Potluck</h1>
				<form
					className="create-potluck-form"
					onSubmit={this.handleSubmit}
				>
					<h2>What is the name of your event?</h2>
					<input
						placeholder="Event name"
						name="locationName"
						onChange={this.onChange}
						value={this.state.locationName}
					/>
					<h2>Where is your event?</h2>
					<div>
						<input
							placeholder="address number"
							name="locationAddress"
							onChange={this.onChange}
							value={this.state.locationAddress}
						/>
						<input
							placeholder="street"
							name="locationStreet"
							onChange={this.onChange}
							value={this.state.locationStreet}
						/>
					</div>
					<div>
						<input
							placeholder="unit"
							name="locationUnit"
							onChange={this.onChange}
							value={this.state.locationUnit}
						/>
						<input
							placeholder="city"
							name="locationCity"
							onChange={this.onChange}
							value={this.state.locationCity}
						/>
					</div>
					<div>
						<input
							placeholder="zip code"
							name="locationPostcode"
							onChange={this.onChange}
							value={this.state.locationPostcode}
						/>
						<input
							placeholder="state"
							name="locationState"
							onChange={this.onChange}
							value={this.state.locationState}
						/>
					</div>
					<input
						placeholder="country"
						name="locationCountry"
						onChange={this.onChange}
						value={this.state.locationCountry}
					/>
					<div className="create-potluck-button">
						<button> Submit</button>
						<button onClick={this.onCancel}>Cancel</button>
					</div>
				</form>
			</div>
		);
	}
}
const CreatePotluckWithRouter = withRouter(CreatePotluck);
export default connect(null, { addPotluck, getPotlucks })(
	CreatePotluckWithRouter
);
