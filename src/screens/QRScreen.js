import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ion from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { ListByProvider } from '../components/ListByProvider';
import { ListByType } from '../components/ListByType';
import { ListByVehicle } from '../components/ListByVehicle';
import * as constant from '../constants'
const TopTab = createMaterialTopTabNavigator();
export const QRScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.header}>
        <LinearGradient
          useAngle={true}
          angle={45}
          angleCenter={{x: 0.5, y: 0.5}}
          colors={['#65A465','#003C77' ]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            flex: 1,
            borderBottomRightRadius: 40,
            paddingTop: '10%',
            paddingBottom: '3%',
          }}>
          <Text style={styles.header_name}>{constant.QRSTACK_TITLE}</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.text_input}>
              <Ion name="search-outline" size={24} color={'#7E8389'} />
              <TextInput
                selectionColor={'#7E8389'}
                placeholderTextColor={'#7E8389'}
                placeholder={constant.FIND}
                style={{flex: 10, marginLeft: 5}}
              />
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}>
                <Icon name="microphone-outline" size={24} color={'#7E8389'} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.filter_button}>
              <Ion name="filter-outline" size={24} color={'#7E8389'} />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>

      <TopTab.Navigator
        style={{top: Dimensions.get('screen').height * 0.18}}
        screenOptions={({route}) => ({
          tabBarLabel: ({focused}) => (
            <Text
              style={[focused ? {opacity: 1}: {opacity:0.6},{
                fontFamily: 'Montserrat-Medium',
                color: '#52575C',
                fontSize: 13,
                fontWeight: '600',
                paddingBottom: 5,
              }]}>
              {route.name}
            </Text>
          ),
        })}>
        <TopTab.Screen name={constant.LIST_BY_PROVIDER} component={ListByProvider}/>
        <TopTab.Screen name={constant.LIST_BY_TYPE} component={ListByType} />
        <TopTab.Screen name={constant.LIST_BY_VEHICLE} component={ListByVehicle} />
      </TopTab.Navigator>
    </View>
  );
};
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 2,
    height: height * 0.2,
    borderBottomRightRadius: 50,
  },
  header_name: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: width * 0.05,
    flex: 1,
  },
  content: {
    marginTop: height * 0.2,
  },
  text_input: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginLeft: 10,
    height: height * 0.055,
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 10,
    flex: 1,
    marginRight: 20,
    flexDirection: 'row',
  },
  filter_button: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginRight: Dimensions.get('screen').width * 0.07,
    backgroundColor: '#FFF',
    height: height * 0.055,
    width: width * 0.12,
    borderRadius: 10,
  },
});
