import React from 'react';

import {Text, View, StyleSheet, Dimensions} from 'react-native';

export const NewsItems = props => {
  const {item} = props;
  return (
    <View style={styles.container}>
      <View style={[styles.label, {backgroundColor: item.color}]}>
        <Text style={{color: '#FFF', fontSize: 14}}>{item.sign}</Text>
      </View>
      <Text style={[styles.name, {color: item.color}]}>{item.name}</Text>
      <Text style={[styles.price,{color: item.color}]}>{item.price} đồng</Text>
    </View>
  );
};
const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
  container: {
    marginHorizontal: width*0.02,
    marginBottom: 4,
    backgroundColor: '#f4f3f1',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width*0.03,
    height: width*0.12
  },
  label: {
    height: width*0.08,
    width: width*0.08,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  name: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    flex: 1,
    marginLeft: width*0.03,
  },
  price:{
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
  }
});
