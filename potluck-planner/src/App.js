import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserDashboard from "./components/DashBoard/UserDashboard";
import PrivateRoute from "./components/Login/PrivateRoute";
import "./App.scss";
import FrontPage from "./components/FrontPage";

const WithAuth = PrivateRoute(UserDashboard);

class App extends React.Component {
	render() {
		return (
			<Router>
				<Route path="/home" component={FrontPage} />
				<Route path="/login" component={FrontPage} />
				<Route
					exact
					to="/protected"
					render={props => <WithAuth {...props} />}
				/>
				{/* <Route path="/protected" component={CreatePotluck} /> */}
			</Router>
		);
	}
}

export default App;
