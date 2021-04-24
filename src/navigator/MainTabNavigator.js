import * as paper from 'react-native-paper';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen';
import {HomeNavigator} from './HomeNavigator'
import {MapScreen} from '../screens/MapScreen';
import {NotificationScreen} from '../screens/NotificationScreen';
import {QRScreen} from '../screens/QRScreen';
import {HistoryScreen} from '../screens/HistoryScreen';
const Tab = createMaterialBottomTabNavigator();

export default function MainTabNavigator({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      shifting={true}
      barStyle>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarColor: '#0d60ae',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
       <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: 'Bản đồ',
          tabBarColor: '#0d60ae',
          tabBarIcon: ({color}) => (
            <Icon name="map" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="QR"
        component={QRScreen}
        options={{
          tabBarLabel: 'Đơn hàng',
          tabBarColor: '#0d60ae',
          tabBarIcon: ({color}) => (
            <Icon name="qr-code" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Thông báo',
          tabBarColor: '#0d60ae',
          tabBarIcon: ({color}) => (
            <Icon name="notifications" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: 'Lịch sử',
          tabBarColor: '#0d60ae',
          tabBarIcon: ({color}) => (
            <Icon name="reload" color={color} size={26} />
          ),
        }}
      />
     
    </Tab.Navigator>
  );
}
