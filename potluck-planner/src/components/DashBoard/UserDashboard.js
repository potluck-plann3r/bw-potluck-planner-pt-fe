import React from 'react';
import {connect} from 'react-redux';
import PotluckCard from '../Potluck/PotLuckCard'
import CreatePotluck from '../Potluck/CreatePotluck'
import Styled from 'styled-components';
import {getPotlucks} from '../../actions'
import {Route, Link} from 'react-router-dom'
import { withRouter } from 'react-router';

//#region Styles
const PotluckDiv = Styled.div`
    height: 80vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`
const Container = Styled.div`
    width: 100%;
    height: 100vh;
    background-color: slategrey;
`
const HeaderDiv = Styled.div`
    height: 10vh;
    background-color: green;
`
//#endregion

class UserDashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
        }
    }

    onLogOut = () =>{
        console.log('Loggin out');
        localStorage.removeItem('token');
        this.props.history.push("/login");
    }

    componentDidMount(){
        this.props.getPotlucks();
        
        this.props.history.push('/protected/potlucks')
    } 

    componentDidUpdate(){
        console.log(this.props.gotPotlucks)
        if(this.props.gotPotlucks)
        {
            console.log(this.props.potlucks)
        }
    }

    render(){
        if(this.props.fetchingPotlucks){
           return(
            <h2>Getting your potlucks</h2>
            )
        } else {
            return(
                <Container>
                    <HeaderDiv>
                        <button onClick={this.onLogOut}>Log out</button>
                        <Link to='/protected/create-potluck'>Create Potluck</Link>
                    </HeaderDiv>
                    <PotluckDiv>
                        {this.props.potlucks.map(potluck => {
                            return(
                                <PotluckCard potluck={potluck}/>
                            )
                        })}
                        {/* <Route path='/protected/potlucks' component={PotluckCard}/> */}
                        <Route exact path='/protected/create-potluck' render={props => <CreatePotluck {...props}/>}/>
                    </PotluckDiv>
                </Container>
            )
        }
    }
}

const mapStateToProps = state =>({
    potlucks: state.potlucks,
    error: state.error,
    fetchingPotlucks: state.fetchingPotlucks,
    gotPotlucks: state.gotPotlucks
})

//const WithRouter = withRouter(UserDashboard)

export default connect(
    mapStateToProps,
        {
            getPotlucks
        }
) (UserDashboard)
