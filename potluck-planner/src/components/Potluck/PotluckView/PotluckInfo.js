import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
class PotluckInfo extends React.Component {
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
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	currentPotluck: state.reducer.currentPotluck,
});

const PotluckInfoWithRouter = withRouter(PotluckInfo);

export default connect(mapStateToProps, {})(PotluckInfoWithRouter);
