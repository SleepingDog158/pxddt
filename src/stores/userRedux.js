import {createReducer, createActions} from 'reduxsauce';

const {Creators, Types} = createActions({
    userGetInfo: ["onSuccess", "onError"],
    userSetInfo: ['data'],
    userClearUserData : [],
    userEditInfo: ["email", "address", "onSuccess", "onError"],
    userChangePassword: ["currentPassword", "newPassword", "onSuccess", "onError"],
});

export const UserTypes = Types;
export default Creators; // actions

const INIT_STATE ={

}

const getInfo = (state, action)=>{
    return state
}

const setInfo =(state,action)=>{
    const {data} = action
    return {
        ...data
    }
}

const editInfo=(state, action)=>{
    return state
}
const changePassword=(state, action)=>{
    return state
}

const clearUserData = (state, action) => {
    return {...INIT_STATE};
  };
  
const HANDLERS = {
    [Types.USER_GET_INFO]: getInfo,
    [Types.USER_SET_INFO]: setInfo,
    [Types.USER_CLEAR_USER_DATA]: clearUserData,
    [Types.USER_EDIT_INFO]: editInfo,
    [Types.USER_CHANGE_PASSWORD]: changePassword,
}

export const reducer = createReducer(INIT_STATE, HANDLERS);