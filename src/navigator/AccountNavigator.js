import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import * as constant from "../constants"
import {AccountScreen} from '../screens/AccountScreen';
import {PasswordChangeScreen} from '../screens/PasswordChangeScreen';
import {EmailEditScreen} from '../screens/EmailEditScreen';
import {AddressEditScreen} from '../screens/AddressEditScreen';
import LinearGradient from 'react-native-linear-gradient';
const AccountStack = createStackNavigator();
export const AccountNavigator = ({navigation}) => (
  <AccountStack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerBackground: () => (
        <LinearGradient
          useAngle={true}
          angle={45}
          angleCenter={{x: 0.5, y: 0.5}}
          colors={['#65A465', '#013C78']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={{
            flex: 1,
          }}
        />
      ),
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <AccountStack.Screen
      name="AccountScreen"
      component={AccountScreen}
      options={{
        title: constant.PERSONAL_INFO,
      }}
    />
    <AccountStack.Screen
      name="PasswordChange"
      component={PasswordChangeScreen}
      options={{
        title: constant.CHANGE_PASSWORD,
      }}
    />
    <AccountStack.Screen
      name="EmailEdit"
      component={EmailEditScreen}
      options={{
        title: constant.CHANGE_EMAIL,
      }}
    />
    <AccountStack.Screen
      name="AddressEdit"
      component={AddressEditScreen}
      options={{
        title: constant.CHANGE_ADDRESS,
      }}
    />
  </AccountStack.Navigator>
);
