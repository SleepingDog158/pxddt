import axios from 'axios';
import _ from 'lodash';
import {Platform} from 'react-native';

let authToken = null;
const setAuthToken = (token) => {
  authToken = token;
};

const create = () => {
  const api = axios.create({
    baseURL: 'https://jzkrt.sse.codesandbox.io/',
    timeout: 60000, // 1p
  });

  api.interceptors.request.use((request) => {
    // console.log('Starting Request', request);
    if (authToken) {
      request.headers.common.Authorization = `Bearer ${authToken}`;
    }
    
    return request;
  });

  api.interceptors.response.use(
    (response) => {
      // handle api status code
      return response;
    },
    (error) => {
      const response = _.get(error, 'response');
      // need handle alert error
      return Promise.reject(response);
    },
  );

  // Auth
  const login = (username, password) => {
    const data = {
      username,
      password,
    };
    return api.post('/auth/signIn', data);
  };
  const signUp = (username, password,role) => {
    const data = {
      username,
      password,
      role
    };
    return api.post('/auth/signUp', data);
  };

  const logout = () => {
    return api.post('/auth/signOut');
  };

  const getUser = ()=>{
    return api.get('/user/getInfo')
  }
  
  const editInfo = (email, address)=>{
    const data ={
      email,
      address
    }
    return api.post('/user/updateInfo', data)
  }
  const changePassword = (currentPassword, newPassword)=>{
    const data ={
      currentPassword,
      newPassword
    }
    return api.post('/user/changePassword', data)
  }
 

  return {
    login,
    logout,
    signUp,
    getUser,
    editInfo,
    changePassword
  };
};

export default {
  create,
  setAuthToken,
};
