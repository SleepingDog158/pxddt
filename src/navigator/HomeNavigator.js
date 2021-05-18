import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from "../screens/HomeScreen"
const HomeStack = createStackNavigator();
export const HomeNavigator = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#0d60ae',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        headerShown:false
      }}
    />
  </HomeStack.Navigator>
);


