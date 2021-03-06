import {put, call} from 'redux-saga/effects';
import api from '../api';
import UserActions from '../stores/userRedux';

export function* getInfo(action) {
  const {onSuccess, onError} = action;
  try {
    const response = yield call(api.create().getUser);

    yield put(UserActions.userSetInfo(response.data));
    if (onSuccess) {
      onSuccess(response.data);
    }
  } catch (error) {
    if (onError) {
      onError(error.data);
    }
  }
}
export function* editInfo(action) {
  const {email, address, onSuccess, onError} = action;
  try {
    const response = yield call(api.create().editInfo, email, address);

    if (onSuccess) {
      onSuccess(response.data);
    }
  } catch (error) {
    if (onError) {
      onError(error.data);
    }
  }
}
export function* changePassword(action) {
  const {currentPassword, newPassword, onSuccess, onError} = action;
  try {
    const response = yield call(api.create().changePassword,currentPassword ,newPassword );

    if (onSuccess) {
      onSuccess(response.data);
    }
  } catch (error) {
    if (onError) {
      onError(error.data);
    }
  }
}
