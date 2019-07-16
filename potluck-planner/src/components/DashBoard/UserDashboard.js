import React from 'react';
import {connect} from 'react-redux';
import PotluckCard from '../Potluck/PotLuckCard'
import Styled from 'styled-components';

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

    render(){
        return (
            <Container>
                <HeaderDiv>Header</HeaderDiv>
                <PotluckDiv>
                    <PotluckCard/>
                </PotluckDiv>
            </Container>
        )
    }
}

export default connect(null)(UserDashboard)