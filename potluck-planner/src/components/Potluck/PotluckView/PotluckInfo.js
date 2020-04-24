import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { deletePotluck, getPotlucks } from "../../../actions/index.js";
import "./PotluckView.scss";

class PotluckInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			admin: "non-admin",
		};
	}
	componentDidMount() {
		if (this.props.admin === 0) {
			this.setState({ ...this.state, admin: "admin" });
		}
	}

	onDeletePotluck = async (e) => {
		await this.props.deletePotluck(this.props.currentPotluck.id);
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
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	currentPotluck: state.reducer.currentPotluck,
});

const PotluckInfoWithRouter = withRouter(PotluckInfo);

export default connect(mapStateToProps, { deletePotluck, getPotlucks })(
	PotluckInfoWithRouter
);
