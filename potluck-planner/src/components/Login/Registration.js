import React from 'react';
import {connect} from 'react-redux'
import Styled from 'styled-components'
import {register} from '../../actions'

const Container = Styled.div`
    width: 100%;
    height: 100vh;
    background-color: slategrey;
`
const RegForm = Styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 5rem 0rem 0rem 5rem;
    height: 30rem;
    width: 50rem;
`
const HeaderDiv = Styled.div`
    height: 10vh;
    background-color: green;
`
class Registration extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            regData: {
                emial: '',
                firstName: '',
                lastName: '',
                password: '',
            }, 

            passwordsMatch: false,
            emailsMatch: false
        }
    }

    onChange = e =>{
        e.preventDefault();
        this.setState({regData: {
            ...this.state.regData,
            [e.target.name]: e.target.value
        }})
    }

    handleReg = e => {
        e.preventDefault();
        this.props
          .register(this.state.regData)
            // .then(() => this.props.history.push("/protected"));
    };
    
    render(){
        return(
            <Container>
                <HeaderDiv></HeaderDiv>
                <RegForm onSubmit={this.handleReg}>
                    <input type='text'
                        placeholder='First name'
                        name='firstName'
                        value={this.state.username}
                        onChange={this.onChange}/>

                    <input type='text'
                        placeholder='Last name'
                        name='lasttName'
                        value={this.state.username}
                        onChange={this.onChange}/>      

                    <input type='password'
                        placeholder='Password'
                        name='password'
                        value={this.state.password}
                        onChange={this.onChange}
                       />

                    <input type='text'
                        placeholder='E-mail'
                        name='email'
                        value={this.state.email}
                        onChange={this.onChange}/>
 
                    <button>Get started!</button>
                </RegForm>
            </Container>
        )
    }
}

export default connect(
    null,
    {
        register
    }
)(Registration)