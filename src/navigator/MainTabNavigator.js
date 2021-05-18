import * as paper from 'react-native-paper';
import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeNavigator} from './HomeNavigator';
import {MapScreen} from '../screens/MapScreen';
import {NotificationScreen} from '../screens/NotificationScreen';
import {HistoryScreen} from '../screens/HistoryScreen';
import { QRNavigator } from './QRNavigator';
import * as constant from "../constants"
const Tab = createBottomTabNavigator();

export default function MainTabNavigator({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName={constant.HOME}
      tabBarOptions={{
        style: {
          height: 55,
          backgroundColor: '#fff',
          paddingVertical: 10,
          justifyContent: 'center',
        },
        activeTintColor: '#F58026',
        inactiveTintColor: '#B4B4B4',
      }}
      screenOptions={({route}) => ({
        tabBarLabel: ({focused}) =>
          focused && route.name !== constant.ORDERS ? (
            <Text
              style={{
                fontSize: 13,
                fontWeight: '600',
                color: '#F58026',
                paddingBottom: 5,
              }}>
              {route.name}
            </Text>
          ) : null,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === constant.HOME) {
            iconName = 'home-outline';
            size = focused ? 25 : 30;
          } else if (route.name === constant.MAP) {
            iconName = 'location-outline';
            size = focused ? 25 : 30;
          } else if (route.name === constant.NOTIFICATION) {
            iconName = 'notifications-outline';
            size = focused ? 25 : 30;
          } else if (route.name === constant.HISTORY) {
            iconName = 'time-outline';
            size = focused ? 25 : 30;
          }

          return route.name !== constant.ORDERS ? (
            <View>
              <Icon
                name={iconName}
                size={size}
                color={color}
                style={!focused ? {marginBottom: 8} : {}}
              />
            </View>
          ) : focused ? (
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#003C77', '#65A465']}
              style={{
                marginBottom: 10,
                height: 50,
                width: 50,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 21,
              }}>
              <Icon name="qr-code-outline" size={40} color="#fff" />
            </LinearGradient>
          ) : (
            <View style={{marginBottom: 10}}>
              <Icon name="qr-code" size={30} color="#b4b4b4" />
            </View>
          );
        },
      })}>
      <Tab.Screen name={constant.HOME} component={HomeNavigator} />
      <Tab.Screen name={constant.MAP} component={MapScreen} />
      <Tab.Screen name={constant.ORDERS} component={QRNavigator} />
      <Tab.Screen name={constant.HISTORY} component={HistoryScreen} />
      <Tab.Screen name={constant.NOTIFICATION} component={NotificationScreen} />
    </Tab.Navigator>
  );
}
