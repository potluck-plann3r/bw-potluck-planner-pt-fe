import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions";
import img from "../img/undraw_eating_together_tjhx.svg";
import "../Login/index.scss";
import { withRouter } from "react-router";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			credentials: {
				email: "",
				password: "",
			},
		};
	}

	onChange = e => {
		console.log(e.target.value);
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.value,
			},
		});
	};

	handleLogin = e => {
		e.preventDefault();
		this.props
			.login(this.state.credentials)
			.then(() => this.props.history.push("/protected"));
	};

	render() {
		return (
			<div className="base-container" ref={this.props.containerRef}>
				<div className="header">Login</div>
				<div className="content">
					<div className="image">
						<img alt="fun" src={img} />
					</div>
					<form className="form" onSubmit={this.handleLogin}>
						<div className="form-group">
							<label htmlFor="username">Username</label>
							<input
								placeholder="E-mail"
								type="text"
								name="email"
								value={this.state.username}
								onChange={this.onChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input
								placeholder="Password"
								type="password"
								name="password"
								value={this.state.password}
								onChange={this.onChange}
							/>
						</div>
						<div className="footer">
							<button className="btn">Login</button>
							<p>dont have an account?</p>
							<Link to="/register">create an account</Link>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
const LoginWithRouter = withRouter(Login);

export default connect(null, { login })(LoginWithRouter);
