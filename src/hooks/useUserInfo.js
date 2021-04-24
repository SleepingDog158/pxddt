import {useSelector, useDispatch} from 'react-redux';
import UserActions from '../stores/userRedux';

const useUserInfo = () => {
  const userInfo = useSelector(state => state.userInfo);
  const dispatch = useDispatch();
  const getInfo = (onSuccess, onError) =>
    dispatch(UserActions.userGetInfo(onSuccess, onError));
  const editInfo = (email, address, onSuccess, onError) =>
    dispatch(UserActions.userEditInfo(email, address, onSuccess, onError));
  const changePassword = (currentPassword, newPassword, onSuccess, onError) =>
    dispatch(UserActions.userChangePassword(currentPassword, newPassword, onSuccess, onError));
  const clearUserData = () => dispatch(UserActions.userClearUserData());
  return {
    userInfo,
    getInfo,
    clearUserData,
    editInfo,
    changePassword
  };
};

export {useUserInfo};
