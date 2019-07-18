import React from 'react'
import {connect} from 'react-redux'
import {login} from '../../actions'
import Styled from 'styled-components'
import {Link} from 'react-router-dom'

//#region Styles
const Container = Styled.div`
    width: 100%;
    height: 100vh;
`
const HeaderDiv = Styled.div`
    height: 10vh;
    background-color: green;
`
const LoginCard = Styled.div`
    width: 30rem;
    height: 40rem;
    background-color: red;
    /* margin-top: 10rem; */
    display: flex;
`
const LoginForm = Styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    align-content: center;
`
const ContentDiv = Styled.div`
    height: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`
const LogInContent = Styled.div`
    width: 20rem;
    background-color: blue;
`   
//#endregion

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            credentials: {
                email: '',
                password: ''
            }
        }
    }

    onChange = e =>{
        console.log(e.target.value);
        this.setState({credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }})
    }
    
    handleLogin = e => {
        e.preventDefault();
        this.props
          .login(this.state.credentials)
            .then(() => this.props.history.push("/protected"));
    };
    
    render(){
        return(
            <Container>
                <HeaderDiv>
                    <Link to='/register'>Sign up now</Link>
                </HeaderDiv>
                <ContentDiv>
                    <LogInContent> </LogInContent>
                    <LoginCard>
                        <LoginForm onSubmit={this.handleLogin}>
                            <input placeholder='E-mail'
                                type='text'
                                name='email'
                                value={this.state.username}
                                onChange={this.onChange}>
                            </input>
                            <input placeholder='Password'
                                type='password'
                                name='password'
                                value={this.state.password}
                                onChange={this.onChange}>
                            </input>
                            <button>Log in</button>
                        </LoginForm>
                    </LoginCard>
                </ContentDiv>
            </Container>
        );
    }
}

export default connect(
    null,
    {login}
)(Login);