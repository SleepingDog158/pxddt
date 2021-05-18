import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignInScreen} from '../screens/SignInScreen.js';
import {SignInAltRealScreen} from '../screens/SignInAltRealScreen.js';

import {useUserInfo} from '../hooks/useUserInfo';
import { SignInRealScreen } from '../screens/SignInRealScreen.js';
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
        <SignInStack.Screen name="SignInAlt" component={SignInAltRealScreen} />
      ) : (
        <SignInStack.Screen name="SignIn" component={SignInRealScreen} />
      )}
    </SignInStack.Navigator>
  );
};
