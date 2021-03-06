import React, {useState} from 'react';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard
} from 'react-native';
import {useUserInfo} from '../hooks/useUserInfo';
import LinearGradient from 'react-native-linear-gradient';
import * as constant from "../constants"
export const AddressEditScreen = ({route, navigation}) => {
  const {address} = route.params;
  const {editInfo, getInfo} = useUserInfo();
  const [data, setData] = useState({
    email: '',
    address: '',
  });
  const editApi = () => {
    editInfo(
      data.email,
      data.address,
      response => {
        
        
        console.log(response.message);
        Alert.alert('Done', response.message, [{text: 'Okay'}], {
          cancelable: true,
        });
        
        // console.log('response', response);
        getInfo(response => {
          console.log(' user info:', response);
          navigation.goBack()
        });
      },
      error => {
       
        console.log(error.message);
        Alert.alert('OOps!', error.message, [{text: 'Okay'}], {
          cancelable: true,
        });
      },
    );
  };
  const onSubmit = () => {
    Keyboard.dismiss()
    if (data.address == address || data.address == "") {
      Alert.alert(
        'OOps!',
        constant.NONE_CHANGE,
        [{text: 'Okay'}],
        {
          cancelable: false,
        },
      );
    } else {
      editApi();
    }
  };
  const handleChange = value => {
    setData({
      ...data,
      address: value,
    });
  };
  return (
    <View style={styles.container}>
      <Text style={[styles.text_footer, {marginTop: 15}]}>Địa chỉ</Text>
      <View style={styles.action}>
        <TextInput
          defaultValue={address}
          style={styles.textInput}
          onChangeText={value => handleChange(value)}
        />
      </View>

      <View style={{marginTop: 30}}>
        <TouchableOpacity style={styles.signIn} onPress={onSubmit}>
          <LinearGradient colors={['#fa781b', '#ed411f']} style={styles.signIn}>
            <Text style={[styles.textSign, {color: '#fff'}]}>{constant.SUBMIT}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },

  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 20,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#b8b8b8',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    paddingVertical: 0,
    color: '#05375a',
    alignSelf: 'center',
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    elevation: 6,
  },
});
