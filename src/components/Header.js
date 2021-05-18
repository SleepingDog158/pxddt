import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
export default function HeaderCustom(props) {
  const {colors, headerName, style} = props;
  return (
    <View style={styles.header_container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={colors}
        style={style}>
        <Text style={styles.header_name}>{headerName}</Text>
      </LinearGradient>
    </View>
  );
}
const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  header_name: {
    flex: 1,
  },
  header_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    width:'100%',
    height:"100%"
  },
});
