import axios from 'axios';
export const LOGIN_START = 'LOGIN_START';
export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';
export const GETPOTLUCKS = 'GETPOTLUCKS';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const CREATE_POTLUCK = 'CREATE_POTLUCK';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post('https://potluck-plann3r.herokuapp.com/api/auth/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.authToken);
      window.alert(res.data.message);
    })
    .catch(err => console.log(err));
};

export const register = regObj => dispatch => {
  dispatch({ type: REGISTER });
  return axios
    .post('https://potluck-plann3r.herokuapp.com/api/auth/register', regObj)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

export const getPotlucks = () => dispatch => {
  dispatch({ type: GETPOTLUCKS });

  axios
    .get('https://potluck-plann3r.herokuapp.com/api/potlucks', {
      headers: { authorization: localStorage.getItem('token') }
    })
    .then(res => {
      console.log(res);
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('This is actualy the error' + err);
      dispatch({ type: FAILURE, payload: err });
    });
};

export const addPotluck = newPotluck => dispatch => {
  console.log(newPotluck, 'blah');
  dispatch({ type: CREATE_POTLUCK });
  axios
    .post('https://potluck-plann3r.herokuapp.com/api/potlucks', newPotluck, {
      headers: { authorization: localStorage.getItem('token') }
    })
    .then(res => {
      console.log(res);
      dispatch({ type: SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};

/* -----------------------------------------------DELETE POTLUCK------------------------------------------------------------*/

export const DELETE_POTLUCK = 'DELETE_POTLUCK';
export const SUCCESS_DELETE_POTLUCK = 'SUCCESS_DELETE_POTLUCK';
export const FAILURE_DELETE_POTLUCK = 'FAILURE_DELETE_POTLUCK';

export const deletePotluck = id => dispatch => {
  dispatch({type: DELETE_POTLUCK});
  axios
    .delete(`https://potluck-plann3r.herokuapp.com/api/potlucks/${id}`,
    { headers: { authorization: localStorage.getItem('token') } })
    .then(res => {
      console.log('Deleted Potluck: ' + res);
      dispatch({type: SUCCESS_DELETE_POTLUCK, payload: res})
    })
    //.then(getPotlucks())
    .catch(err => {
      console.log(err)
      dispatch({type: FAILURE_DELETE_POTLUCK, payload: err})
    })
} 

export const INVITE_GUEST = 'INVITE_GUEST';
export const SUCCESS_INVITE_GUEST = 'SUCCESS_INVITE_GUEST';
export const FAILURE_INVITE_GUEST = 'FAILURE_INVITE_GUEST';

export const inviteGuest = invitation => dispatch =>      {

}

