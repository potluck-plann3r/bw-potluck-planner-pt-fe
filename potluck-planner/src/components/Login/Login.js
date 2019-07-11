import React from 'react'
import {connect} from 'react-redux'
import {login} from '../../actions'


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    changeHadeler = e => {
        e.preventDefault()
        console.log(e.target.value);
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(){
        return null;
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input placeholder='User Name'
                        type='text'
                        name='username'
                        value={this.state.username}
                        onChange={this.changeHadeler}>
                    </input>
                    <input placeholder='Password'
                        type='text'
                        name='password'
                        value={this.state.password}
                        onChange={this.changeHadeler}>
                    </input>
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