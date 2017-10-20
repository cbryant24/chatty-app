import types from './types';
import axios from 'axios';

export function signup(userInfo) {
    return dispatch => {
        axios.post('/auth/signup', userInfo).then(res => {
            console.log('Res from server: ', res)
            localStorage.setItem('token', res.data.token);
            
            dispatch({
                type: types.SIGNUP,
                payload: res.data
            })
        })
    }
}

export function signin(userInfo) {
    return dispatch => {
        axios.post('/auth/signin', userInfo).then(res => {
            console.log('Signin res:', res)

            localStorage.setItem('token', res.data.token);

            dispatch({
                type: types.SIGNIN,
                payload: res.data
            });
        })
    }
}

export function jwtSignin() {
    return dispatch => {
        axios.get('/auth/get-user', 
        {headers: {authorization: localStorage.getItem('token')}})
        .then( res => {
            dispatch({
                type: types.SIGNIN,
                payload: res.data
            })
        })
    }
}

export function signout() {
    localStorage.removeItem('token');

    return {
        type: types.SIGNOUT
    }
}