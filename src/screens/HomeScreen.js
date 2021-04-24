import React from 'react';

import {StatusBar, Text, View} from 'react-native';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <StatusBar backgroundColor="#0d60ae" barStyle="light-content"/>
      <Text>Home Screen</Text>
    </View>
  );
};
