import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import {useAuth} from '../hooks/useAuth';
import {AccountNavigator} from './AccountNavigator';
import {SettingNavigator} from './SettingNavigator';
import MainTabNavigator from './MainTabNavigator';
import {SignInNavigator} from './SignInNavigator';
const RootStack = createStackNavigator();

const RootNavigator = () => {
  const {auth} = useAuth();
  console.log(auth);
  return (
    <NavigationContainer>
      {auth.loggedIn ? (
        <RootStack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
          <RootStack.Screen name="Home" component={MainTabNavigator} />
          <RootStack.Screen name="Account" component={AccountNavigator} />
          <RootStack.Screen name="Setting" component={SettingNavigator} />
        </RootStack.Navigator>
      ) : (
        <SignInNavigator />
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;
