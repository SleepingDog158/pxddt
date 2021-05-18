import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {QRScreen} from '../screens/QRScreen';
import LinearGradient from 'react-native-linear-gradient';
import {OrderScreen} from '../screens/OrderScreen';
import {Dimensions} from 'react-native';
import * as constant from '../constants';
const QRStack = createStackNavigator();
export const QRNavigator = ({navigation}) => (
  <QRStack.Navigator
    initialRouteName="QRScreen"
    screenOptions={{
      headerStyle: {height: Dimensions.get('screen').height * 0.15},
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
    <QRStack.Screen
      name="QRScreen"
      component={QRScreen}
      options={{
        // title: 'Trang chủ',
        // headerRight: () => (
        //   <Icon.Button
        //     name="user-alt"
        //     size={23}
        //     backgroundColor="#0d60ae"
        //     onPress={() => {
        //      navigation.navigate("Account")
        //     }}></Icon.Button>
        // ),
        headerShown: false,
      }}
    />
    <QRStack.Screen
      name="OrderScreen"
      component={OrderScreen}
      options={{
        title: constant.ORDER_INFO,
      }}
    />
  </QRStack.Navigator>
);
