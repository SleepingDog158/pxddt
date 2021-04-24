import {combineReducers} from 'redux';
import configStore from './createStore';
import {AuthTypes, reducer as AuthReducer} from './authRedux';
import {UserTypes, reducer as UserReducer} from './userRedux';

import rootSaga from '../sagas';

const configStored = () => {
  const reducers = combineReducers({
    auth: AuthReducer,
    userInfo: UserReducer,
  });

  const rootReducer = (state, action) => {
    return reducers(state, action);
  };

  return configStore(rootReducer, rootSaga);
};

export default configStored;
