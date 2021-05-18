import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Octicons from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';
export const OrderScreen = ({navigation, route}) => {
  useFocusEffect(
    React.useCallback(()=>{
      navigation.setOptions({ title: `Đơn hàng ${item.code}`})
    },[item])
  )
  const {item} = route.params;
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginHorizontal: '2%' 
        }}>
        <Octicons
          name="primitive-dot"
          size={25}
          color={
            item.status === 'Đang hoạt động'
              ? '#13EA00'
              : item.status === 'Đã hoàn thành'
              ? '#1300EB'
              : 'red'
          }
        />
      </View>
      <View style={styles.block}>
        <View style={styles.line}>
          <Text style={styles.label}>Đơn vị cấp hàng</Text>
          <Text style={styles.detail}>{item.provider}</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.label}>Hợp đồng</Text>
          <Text style={styles.detail}>{item.contract}</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.label}>Loại đơn</Text>
          <Text style={styles.detail}>{item.type}</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.label}>Trạng thái đơn</Text>
          <Text style={styles.detail}>{item.status}</Text>
        </View>
      </View>
      <View style={styles.block}>
        <View style={styles.line}>
          <Text style={styles.label}>Người nhận hàng</Text>
          <Text style={styles.detail}>{item.receiver}</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.label}>Số CMT/CCCD</Text>
          <Text style={styles.detail}>{item.credentialID}</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.label}>Số phương tiện</Text>
          <Text style={styles.detail}>{item.vehicle}</Text>
        </View>
      </View>
      <View style={[styles.block, {flexDirection: 'row'}]}>
        <View style={{flex: 1}}>
          <Text style={styles.label1}>Hàng hóa</Text>
          <Text style={styles.detail1}>{item.product}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.label1}>Chiết khấu</Text>
          <Text style={styles.detail1}>{item.reduce} đồng</Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text style={styles.label1}>Lượng khả dụng</Text>
          <Text style={styles.detail1}>{item.available} lit</Text>
        </View>
      </View>
      <View style={{marginTop: '10%'}}>
        <Text
          style={{
            alignSelf: 'center',
            color: '#146288',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          Tạo QR Code
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={{marginTop: '5%'}}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#003C77', '#65A465']}
              style={{
                height: 80,
                width: 80,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <Icon name="qr-code-outline" size={60} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  block: {
    marginTop: 20,
    paddingHorizontal: '3%',
    borderBottomColor: '#279F6D',
    borderTopColor: '#279F6D',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 20,
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  label: {
    alignSelf: 'center',
    flex: 1,
    color: '#016292',
    fontSize: 15,
  },
  label1: {
    flex: 1,
    color: '#016292',
    fontSize: 15,
    marginBottom: 10,
  },
  detail: {
    flex: 2,
    alignSelf: 'center',
    fontSize: 15,
    color: '#331C64',
    fontWeight: 'bold',
  },
  detail1: {
    flex: 2,
    fontSize: 15,
    color: '#331C64',
    fontWeight: 'bold',
  },
});
