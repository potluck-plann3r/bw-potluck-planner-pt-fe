import React from 'react'
import {connect} from 'react-redux'
import {login} from '../../actions'


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div>
                <form>
                    <input></input>
                    <input></input>
                    <button>Log in</button>
                </form>
            </div>
        );
    }
}

export default connect(
    null,
    {login}
)(Login);