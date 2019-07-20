import axios from 'axios';
export const LOGIN_START = "LOGIN_START";
export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';
export const GETPOTLUCKS = 'GETPOTLUCKS';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const CREATE_POTLUCK = 'CREATE_POTLUCK';

export const login = creds => dispatch =>{
    dispatch({type: LOGIN_START});
    return axios
        .post('https://potluck-plann3r.herokuapp.com/api/auth/login', creds)
        .then(res => localStorage.setItem('token', res.data.authToken))
        .catch(err => console.log(err))
}

export const register = regObj => dispatch =>{
    dispatch({type: REGISTER});
    return axios
        .post('https://potluck-plann3r.herokuapp.com/api/auth/register', regObj)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

export const getPotlucks = () => dispatch =>{
    dispatch({type: GETPOTLUCKS});
    axios
        .get('https://potluck-plann3r.herokuapp.com/api/potlucks/', {
            headers: { authorization: localStorage.getItem("token") }})
        .then(res => {
                console.log(res.data);
                dispatch({type: SUCCESS, payload: res.data}) 
            }
        )
        .catch(err =>{
            console.log('This is actualy the error' + err);
            dispatch({type: FAILURE, payload: err})
        })
}

export const addPotluck = newPotluck => dispatch =>{
    dispatch({type: CREATE_POTLUCK});
    return axios
        .post('https://potluck-plann3r.herokuapp.com/api/potlucks', newPotluck, { headers: { authorization: localStorage.getItem("token") } })
        .then(res => console.log(res))
        .catch(err => console.log(err))

} 