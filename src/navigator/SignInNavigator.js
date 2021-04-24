import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignInScreen} from '../screens/SignInScreen.js';
import {SignInAltScreen} from '../screens/SignInAltScreen.js';

import {useUserInfo} from '../hooks/useUserInfo';
const SignInStack = createStackNavigator();
export const SignInNavigator = ({navigation}) => {
  const {userInfo} = useUserInfo();
  console.log(userInfo);
  return (
    <SignInStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {userInfo.username ? (
        <SignInStack.Screen name="SignInAlt" component={SignInAltScreen} />
      ) : (
        <SignInStack.Screen name="SignIn" component={SignInScreen} />
      )}
    </SignInStack.Navigator>
  );
};
