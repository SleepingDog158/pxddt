import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
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
        title: 'Trang chủ',
        headerRight: () => (
          <Icon.Button
            name="user-alt"
            size={23}
            backgroundColor="#0d60ae"
            onPress={() => {
             navigation.navigate("Account")
            }}></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);


