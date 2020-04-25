import React from "react";
import "./NavBar.scss";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	onLogOut = () => {
		localStorage.removeItem("token");
		this.props.history.push("/login");
	};

	render() {
		var loginOnly = "navButton";
		var dashBoardOnly = "navButton";

		// Set up styling classes to render the right buttons
		if (this.props.login === true) {
			dashBoardOnly = "navButton non";
		} else {
			loginOnly = "navButton non";
		}
		return (
			<header>
				<h1 className="logo">PotLuck</h1>

				<nav>
					<button
						className={dashBoardOnly}
						ref={this.props.containerRef}
						onClick={this.props.onClick}
					>
						<Link to="/protected">My Potlucks</Link>
					</button>
					<button
						className={dashBoardOnly}
						ref={this.props.containerRef}
						onClick={this.props.onClick}
					>
						<Link to="/protected/create-potlucks">
							Create Potluck
						</Link>
					</button>
					<button
						className={dashBoardOnly}
						ref={this.props.containerRef}
						onClick={this.onLogOut}
					>
						Log Out
					</button>
					<button
						className={loginOnly}
						ref={this.props.containerRef}
						onClick={this.props.onClick}
					>
						<Link to="/register">Register</Link>
					</button>

					<button
						className={loginOnly}
						ref={this.props.containerRef}
						onClick={this.props.onClick}
					>
						<Link to="/login">Login</Link>
					</button>
				</nav>
			</header>
		);
	}
}
const NavBarWithRouter = withRouter(NavBar);
const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(NavBarWithRouter);
