import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = Component =>{
    return class extends React.Component{
        render(){
            if(localStorage.getItem('token')){
                return <Component {...this.props}/>
            } else {
                console.log('redirect to Login')
                return <Redirect to='/login' />
            }
        }
    }
}

export default PrivateRoute;