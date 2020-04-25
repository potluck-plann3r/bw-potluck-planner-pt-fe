import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/Login/PrivateRoute";
import UserDashboard from "./components/DashBoard/UserDashboard";
import FrontPage from "./components/FrontPage/FrontPage.js";
import "./App.scss";

const WithAuth = PrivateRoute(FrontPage)(UserDashboard);

class App extends React.Component {
	render() {
		return (
			<Router>
				<Route to="/" render={(props) => <WithAuth {...props} />} />
			</Router>
		);
	}
}

export default App;
