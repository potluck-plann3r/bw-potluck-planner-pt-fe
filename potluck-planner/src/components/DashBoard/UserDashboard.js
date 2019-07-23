import React from 'react';
import { connect } from 'react-redux';
import PotluckCard from '../Potluck/PotLuckCard';
import CreatePotluck from '../Potluck/CreatePotluck';
import PotluckView from '../Potluck/PotluckView'
import './DashBoard.scss'

import { getPotlucks, addPotluck } from '../../actions/index';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      potluckToView: -1,
    };
  }

  onLogOut = () => {
    window.alert('Loggin out');
    localStorage.removeItem('token');
    this.props.history.push('/login');
  };

  componentDidMount() {
    this.props.getPotlucks();
    this.props.history.push('/protected/potlucks');
  }

  onSelectPotluck = e =>{
    this.setState({potluckToView: e.target.id})
    this.props.history.push('/protected/potluck-view');
  }

  getSelectedPotlucks = id =>{
    console.log('Function is called ')
    console.log(id);

    // this.props.potlucks.forEach(p =>{
    //   console.log(p.id + ' '+ id )
    //   if(p.id === id){
    //     console.log('For Each')
    //   }
    // })

    for(let i = 0; i < Object.keys(this.props.potlucks).length; i++){
      console.log(this.props.potlucks[i].id)
      if(this.props.potlucks[i].id == id)
      {
        console.log('Found it!')
        return this.props.potlucks[i];
      }
    }
  }

  render() {
    if (this.props.fetchingPotlucks) {
      return <h2>Getting your potlucks</h2>;
    } else {
      return (
        <div className='Container'>
          <div className='Header'>
            <button onClick={this.onLogOut}>Log out</button>
            <Link to="/protected/create-potlucks">Create Potluck</Link>
          </div>
          <div className='Potluck'>
            <div>{console.log(this.props)}</div>
            <Route path="/protected/potlucks" render={props =>(
              <PotluckCard onSelectPotluck={this.onSelectPotluck} {...props}/>
            )} />
            <Route path='/protected/potluck-view' render={ props =>
              <PotluckView {...props}  p={this.getSelectedPotlucks(this.state.potluckToView)}/>
            }/>
            <Route
              exact
              path="/protected/create-potlucks"
              render={props => (
                <CreatePotluck addPotluck={this.props.addPotluck} {...props} />
              )}
            />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  potlucks: state.reducer.potlucks,
  error: state.reducer.error,
  fetchingPotlucks: state.reducer.fetchingPotlucks
});
const SignOutWithRouter = withRouter(UserDashboard);

//const WithRouter = withRouter(UserDashboard)

export default connect(
  mapStateToProps,
  {
    getPotlucks,
    addPotluck
  }
)(SignOutWithRouter);
