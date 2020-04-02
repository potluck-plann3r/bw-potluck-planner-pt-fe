import React from "react";
import Styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getPotlucks } from "../../actions/index";
import { getPotluckById } from "../../actions/index";

//#region Styled components
const CardDiv = Styled.div`
    background-color: green;
    width: 20rem;
    height: auto; 
    margin: 3rem 3rem 3rem 3rem;
`;
//#endregion

class PotluckCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	onSelect = e => {
		let selectId = e.currentTarget.id;
		this.props.history.push(`/protected/view-potluck/${selectId}`);
	};

	render() {
		console.log(this.props.potlucks);
		if (this.props.potlucks === undefined) {
			return <div>You don't have any potlucks currently</div>;
		}
		return (
			<div>
				{this.props.potlucks.map(potluck => {
					console.log(potluck.id);
					return (
						<CardDiv id={potluck.potluckId} onClick={this.onSelect}>
							<h1>{potluck.locationName}</h1>
							<address>
								<h3>Location</h3>
								<p>
									{potluck.locationAddress}{" "}
									{potluck.locationStreet} Unit:{" "}
									{potluck.locationUnit}
								</p>
								<p>
									{potluck.locationCity},{" "}
									{potluck.locationState}{" "}
									{potluck.locationCountry}
								</p>
							</address>
						</CardDiv>
					);
				})}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	potlucks: state.reducer.potlucks,
});

const PotluckCardWithRouter = withRouter(PotluckCard);

export default connect(mapStateToProps, { getPotlucks, getPotluckById })(
	PotluckCardWithRouter
);
