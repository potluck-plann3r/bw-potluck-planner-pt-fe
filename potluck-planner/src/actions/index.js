import axios from 'axios'

export const LOGIN_START = "LOGIN_START";

export const login = creds => dispatch =>{
    dispatch({type: LOGIN_START});
    return axios
        .post('api', creds)
        .then(res => localStorage.setItem('token', res.data.payload))
        .catch(err => console.log(err))
}