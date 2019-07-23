import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../components/Login/Login';
import Registration from '../components/Login/Registration';
import UserDashboard from '../components/DashBoard/UserDashboard';
import PrivateRoute from '../components/Login/PrivateRoute';
import NavBar from '../components/NavBar';
import '../App.scss';
const WithAuth = PrivateRoute(UserDashboard);

class FrontPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: false
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add('right');
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove('right');
      this.rightSide.classList.add('left');
    } else {
      this.rightSide.classList.remove('left');
      this.rightSide.classList.add('right');
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? 'Register' : 'Login';
    const currentActive = isLogginActive ? 'Login' : 'Register';
    return (
      <Router>
        <NavBar
          current={current}
          currentActive={currentActive}
          containerRef={ref => (this.rightSide = ref)}
          onClick={this.changeState.bind(this)}
        />
        <div className="App">
          <div className="login">
            <div className="container" ref={ref => (this.container = ref)}>
              {isLogginActive &&
                (<Route exact path="/login" component={Login} />,
                <Login containerRef={ref => (this.current = ref)} />)}
              {!isLogginActive &&
                (<Route path="/register" component={Registration} />,
                <Registration containerRef={ref => (this.current = ref)} />)}
            </div>
            <RightSide
              current={current}
              currentActive={currentActive}
              containerRef={ref => (this.rightSide = ref)}
              onClick={this.changeState.bind(this)}
            />
          </div>
        </div>
        <Route
          exact
          to="/protected"
          render={props => <WithAuth {...props} />}
        />
      </Router>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default FrontPage;
