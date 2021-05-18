import React, {useState} from 'react';

import {Text, View, StyleSheet, Switch} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as constant from "../constants"
export const SettingScreen = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggle = () => setIsEnabled(!isEnabled);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.section, {marginTop: 20}]} onPress={()=> navigation.navigate('Account')}>
        <Text style={styles.label}>{constant.PERSONAL_INFO}</Text>
        <Icon name="chevron-right" color="#777777" size={30} />
      </TouchableOpacity>
      <View style={styles.section}>
        <Text style={styles.label}>{constant.BIOMETRICS}</Text>
        <Switch
          trackColor={{false: '#767577', true: '#606be6'}}
          thumbColor={isEnabled ? '#013C78' : '#f4f3f4'}
          onValueChange={toggle}
          value={isEnabled}
        />
      </View>
      <TouchableOpacity style={styles.section}>
        <Text style={styles.label}>{constant.APP_INFO}</Text>
        <Icon name="chevron-right" color="#777777" size={30} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.section}>
        <Text style={styles.label}>{constant.LISENCES}</Text>
        <Icon name="chevron-right" color="#777777" size={30} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.section}>
        <Text style={styles.label}>{constant.REPORT}</Text>
        <Icon name="chevron-right" color="#777777" size={30} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#b8b8b8',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    height: 65,
  },
  label: {
    fontSize: 15,
    color: '#444444',
    flex: 1,
  },
});
