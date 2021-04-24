import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {AccountScreen} from "../screens/AccountScreen"
import {PasswordChangeScreen} from "../screens/PasswordChangeScreen"
import { EmailEditScreen } from '../screens/EmailEditScreen';
import { AddressEditScreen } from '../screens/AddressEditScreen';
const AccountStack = createStackNavigator();
export const AccountNavigator = ({navigation}) => (
  <AccountStack.Navigator
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
    <AccountStack.Screen
      name="AccountScreen"
      component={AccountScreen}
      options={{
        title: 'Thông tin tài khoản',
        headerRight: () => (
          <Icon.Button
            name="cog"
            size={23}
            backgroundColor="#0d60ae"
            onPress={() => {
             
            }}></Icon.Button>)
      }}
    />
    <AccountStack.Screen
      name="PasswordChange"
      component={PasswordChangeScreen}
      options={{
        title: 'Thay đổi mật khẩu',
        
        
      }}/>
    <AccountStack.Screen
      name="EmailEdit"
      component={EmailEditScreen}
      options={{
        title: 'Thay đổi Email',
        
        
      }}
    />
    <AccountStack.Screen
      name="AddressEdit"
      component={AddressEditScreen}
      options={{
        title: 'Thay đổi địa chỉ',
        
        
      }}
    />
  </AccountStack.Navigator>
);


