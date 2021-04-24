import {takeLatest, all} from 'redux-saga/effects';

import {AuthTypes} from '../stores/authRedux';
import { UserTypes } from '../stores/userRedux';


import {login, logout, signUp} from './authSaga';
import {getInfo, editInfo,changePassword} from './userSaga';


export default function* root() {
  yield all([
    takeLatest(AuthTypes.AUTH_LOGIN, login),
    takeLatest(AuthTypes.AUTH_LOGOUT, logout),
    takeLatest(AuthTypes.AUTH_SIGN_UP, signUp),
    takeLatest(UserTypes.USER_GET_INFO, getInfo),
    takeLatest(UserTypes.USER_EDIT_INFO, editInfo),
    takeLatest(UserTypes.USER_CHANGE_PASSWORD, changePassword),
   
  ]);
}
