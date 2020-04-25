import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
	addRequirement,
	removeRequirement,
	getRequirements,
	claimRequirement,
} from "../../../actions/index";
import "./PotluckView.scss";

class PotluckRequirements extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			admin: "non-admin",
			newRequirement: {
				category: "",
				item: "",
				servings: "",
			},
		};
	}
	componentDidMount() {
		if (this.props.admin === 0) {
			this.setState({ ...this.state, admin: "admin" });
		}
		console.log(this.state.admin);
	}

	onChangeReq = (e) => {
		e.preventDefault();
		this.setState({
			newRequirement: {
				...this.state.newRequirement,
				[e.target.name]: e.target.value,
			},
		});
	};
	removeRequirement = async (e) => {
		e.preventDefault();
		await this.props.removeRequirement(e.target.id);
		await this.props.getRequirements(this.props.currentPotluck.id);
	};

	onSubmitReq = async (e) => {
		e.preventDefault();
		let potluckId = this.props.currentPotluck.id;
		let newRequirement = {
			foodCategory: this.state.newRequirement.category,
			foodDescription: this.state.newRequirement.item,
			servings: this.state.newRequirement.servings,
			fufilled: false,
		};
		await this.props.addRequirement(newRequirement, potluckId);
		this.setState({
			newRequirement: {
				category: "",
				item: "",
				servings: "",
				fufilled: false,
			},
		});
		await this.props.getRequirements(this.props.currentPotluck.id);
	};

	onClaimRequirement = (e) => {
		e.preventDefault();
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

		let food = {
			reqId: curReqs[selectedReq].id,
			potluckId: this.props.currentPotluck.id,
			foodCategory: curReqs[selectedReq].foodCategory,
			foodDescription: curReqs[selectedReq].foodDescription,
			servings: curReqs[selectedReq].servings,
		};

		this.props.claimRequirement(food);
		this.props.getRequirements(this.props.currentPotluck.id);
	};

	render() {
		return (
			<div>
				<h2>Food Requirements</h2>
				<div>
					{this.props.currentRequirements.map((req) => {
						var users = this.props.currentPotluckUsers;
						var user;
						var claim = "non-claimed";
						if (req.fufilled === 0) {
						}
						for (var i = 0; i < users.length; i++) {
							if (users[i].userId === req.fufilled) {
								claim = "claimed";
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
								<form className={this.state.admin}>
									<button
										id={req.id}
										onClick={this.removeRequirement}
									>
										Remove Requirement
									</button>
								</form>
								<form className={claim}>
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
				<div className={this.state.admin}>
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
		);
	}
}

const mapStateToProps = (state) => ({
	currentPotluck: state.reducer.currentPotluck,
	currentRequirements: state.reducer.currentRequirements,
	currentPotluckUsers: state.reducer.currentPotluckUsers,
});

const PotluckRequirementsWithRouter = withRouter(PotluckRequirements);

export default connect(mapStateToProps, {
	addRequirement,
	removeRequirement,
	getRequirements,
	claimRequirement,
})(PotluckRequirementsWithRouter);
