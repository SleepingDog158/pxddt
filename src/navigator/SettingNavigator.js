import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SettingScreen} from '../screens/SettingScreen';
import LinearGradient from 'react-native-linear-gradient';
import * as constant from '../constants'
const SettingStack = createStackNavigator();
export const SettingNavigator = ({navigation}) => (
  <SettingStack.Navigator
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
    <SettingStack.Screen
      name="Setting"
      component={SettingScreen}
      options={{
        title: constant.SETTING,
      }}
    />
  </SettingStack.Navigator>
);
