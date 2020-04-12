import React from "react";
import { connect } from "react-redux";
import PotluckCard from "../Potluck/PotLuckCard";
import PotluckView from "../Potluck/PotluckView";
import CreatePotluck from "../Potluck/CreatePotluck";
import Styled from "styled-components";

import { getPotlucks, addPotluck } from "../../actions/index";
import { Route, Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router";

//#region Styles
const PotluckDiv = Styled.div`
    height: 80vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;
const Container = Styled.div`
    width: 100%;
    height: 100vh;
    background-color: slategrey;
`;
const HeaderDiv = Styled.div`
    height: 10vh;
    background-color: green;
`;

//#endregion

class UserDashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	onLogOut = () => {
		localStorage.removeItem("token");
		this.props.history.push("/login");
	};

	componentDidMount() {
		this.props.getPotlucks();
		//this.props.history.push("/protected/potlucks");
	}

	render() {
		if (this.props.fetchingPotlucks) {
			return <h2>Getting your potlucks</h2>;
		} else {
			return (
				<Container>
					<HeaderDiv>
						<button onClick={this.onLogOut}>Log out</button>
						<NavLink to="/protected">My Potlucks</NavLink>
						<Link to="/protected/create-potlucks">
							Create Potluck
						</Link>
					</HeaderDiv>
					<PotluckDiv>
						<div>{console.log(this.props)}</div>
						<Route
							exact
							path="/protected"
							component={PotluckCard}
						/>

						<Route
							exact
							path="/protected/create-potlucks"
							component={CreatePotluck}
						/>
						<Route
							exact
							path="/protected/view-potluck/:id"
							component={PotluckView}
						/>
					</PotluckDiv>
				</Container>
			);
		}
	}
}

const mapStateToProps = (state) => ({
	potlucks: state.reducer.potlucks,
	error: state.reducer.error,
	fetchingPotlucks: state.reducer.fetchingPotlucks,
});
const SignOutWithRouter = withRouter(UserDashboard);

//const WithRouter = withRouter(UserDashboard)

export default connect(mapStateToProps, {
	getPotlucks,
	addPotluck,
})(SignOutWithRouter);
