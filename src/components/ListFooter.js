import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as constant from "../constants"
export const ListFooterComponent = (props) => {
    const {onPress}=props
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{constant.MORE}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginHorizontal: '30%',
    borderRadius: 20,
    height: 27,
    borderWidth: 2,
    borderColor: '#858585',
  },
  text: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 11,
    color:'#858585'
  },
});
