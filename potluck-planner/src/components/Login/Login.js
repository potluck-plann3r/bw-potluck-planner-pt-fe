import React from 'react'
import {connect} from 'react-redux'
import {login} from '../../actions'
import Styled from 'styled-components'

const Container = Styled.div`
    width: 100%;
    
`

const HeaderDiv = Styled.div`
    height: 6rem;
    background-color: green;
`
const LoginCard = Styled.div`
    width: 30rem;
    height: 40rem;
    background-color: red;
    margin-top: 10rem;
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
    height: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

`
const LogInContent = Styled.div`
    width: 50rem;
    background-color: blue;
`

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
            <Container>
                <HeaderDiv>

                </HeaderDiv>
                <ContentDiv>
                    <LogInContent>

                    </LogInContent>
                    <LoginCard>
                        <LoginForm onSubmit={this.onSubmit}>
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