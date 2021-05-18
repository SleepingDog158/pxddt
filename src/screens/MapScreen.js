import React from 'react';
import HeaderCustom from '../components/Header';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as constant from '../constants'
export const MapScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.header}>
        <LinearGradient
          useAngle={true}
          angle={45}
          angleCenter={{x: 0.5, y: 0.5}}
          colors={['#65A465', '#013C78']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={{
            flex: 1,
            borderBottomRightRadius: 40,
            paddingTop: '10%',
            paddingBottom: '3%',
          }}>
          <Text style={styles.header_name}>{constant.FIND_STATION}</Text>
          <View style={styles.text_input}>
            <TextInput
              selectionColor={'#fff'}
              placeholderTextColor={'#fff'}
              placeholder= {constant.PLX}
              style={{flex: 10}}
            />
            <TouchableOpacity style={{alignItems:'center', justifyContent:'center', flex: 1}}>
              <Icon name="microphone-outline" size={24} />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>

      <View style={styles.content}>
        <Text>Map Screen</Text>
      </View>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_input: {
    backgroundColor: '#fff',
    opacity: 0.4,
    marginLeft: 10,
    height: height * 0.055,
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderRadius: 50,
    marginRight: 20,
    flexDirection: 'row',
  },
});
