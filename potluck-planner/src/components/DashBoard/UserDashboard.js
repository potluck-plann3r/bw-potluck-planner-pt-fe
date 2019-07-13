import React from 'react';
import {connect} from 'react-redux';
import Styled from 'styled-components';

//#region Styles
//#endregion

class UserDashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            
        }
    }

    render(){
        return <h1>Dash board</h1>;
    }
}

export default connect(null)(UserDashboard)