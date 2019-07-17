import React from 'react';
import {connect} from 'react-redux';
import PotluckCard from '../Potluck/PotLuckCard'
import Styled from 'styled-components';
import {getPotlucks} from '../../actions/index'

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
                    </HeaderDiv>
                    <PotluckDiv>
                        <PotluckCard potlucks={this.props.potlucks} />
                    </PotluckDiv>
                </Container>
            )
        }
    }
}

const mapStateToProps = state =>({
    potlucks: state.potlucks,
    error: state.error,
    fetchingPotlucks: state.fetchingPotlucks

})

export default connect(
    mapStateToProps,
        {
            getPotlucks
        }
) (UserDashboard)
