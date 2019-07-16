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
//#endregion

class UserDashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            
        }
    }

    render(){
        return (
            <div>
                <div>Header</div>
                <PotluckDiv>
                    <PotluckCard/>
                </PotluckDiv>
            </div>
        )
    }
}

export default connect(null)(UserDashboard)