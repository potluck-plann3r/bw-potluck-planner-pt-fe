import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getPotluckById } from "../../actions/index";

class PotluckView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		let { id } = this.props.match.params;
		this.props.getPotluckById(id);
	}

	render() {
		if (this.props.currentPotluck === undefined) {
			return <div>No Potluck</div>;
		} else {
			return (
				<>
					<div>{this.props.currentPotluck.locationName}</div>
				</>
			);
		}
	}
}

const mapStateToProps = state => ({
	currentPotluck: state.reducer.currentPotluck,
});

const PotluckViewWithRouter = withRouter(PotluckView);
export default connect(mapStateToProps, { getPotluckById })(
	PotluckViewWithRouter
);
