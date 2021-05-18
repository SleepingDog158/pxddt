import React, {useState} from 'react';

import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
} from 'react-native';
import {useUserInfo} from '../hooks/useUserInfo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import * as constant from "../constants"
export const PasswordChangeScreen = ({navigation}) => {
  const {changePassword} = useUserInfo();
  const [data, setData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    check_textInputChange: false,
    secureTextEntry: true,
  });
  const textInputChange = value => {
    if (value.length >= 8) {
      setData({
        ...data,
        newPassword: value,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        newPassword: value,
        check_textInputChange: false,
      });
    }
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const handleCurrentPasswordChange = value => {
    setData({
      ...data,
      currentPassword: value,
    });
  };
  const handleConfirmPasswordChange = value =>
    setData({
      ...data,
      confirmPassword: value,
    });

  const changePasswordApi = () => {
    changePassword(
      data.currentPassword,
      data.newPassword,
      response => {
        console.log(response.message);
        Alert.alert('Done', response.message, [{text: 'Okay'}], {
          cancelable: true,
        });
        navigation.goBack();
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
    Keyboard.dismiss();
    if (data.currentPassword === data.newPassword) {
      Alert.alert('Oops!', constant.SAME_PASSWORD, [
        {text: 'Okay'},
      ]);
    }else if (data.newPassword !== data.confirmPassword) {
      Alert.alert(
        'Oops!',
        constant.PASSWORDS_NOT_MATCH,
        [{text: 'Okay'}],
      );
    } else {
      changePasswordApi();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.action}>
        <FontAwesome
          name="lock"
          color="#05375a"
          size={20}
          
        />
        <TextInput
          placeholder={`${constant.CURRENT_PASSWORD}*`}
          secureTextEntry={true}
          style={styles.textInput}
          autoCapotalize="none"
          onChangeText={value => handleCurrentPasswordChange(value)}
        />
      </View>
   
      <View style={styles.action}>
        <FontAwesome name="lock" color="#05375a" size={20}  />
        <TextInput
          selectionColor={'#05375a'}
          placeholder={`${constant.NEW_PASSWORD}*`}
          secureTextEntry={data.secureTextEntry}
          style={styles.textInput}
          autoCapotalize="none"
          onChangeText={value => textInputChange(value)}
        />
        {data.check_textInputChange ? (
          <Animatable.View
            animation="bounceIn"
            duration={500}
            style={{marginRight: 10}}>
            <Feather name="check-circle" color="green" size={20} />
          </Animatable.View>
        ) : null}
        <TouchableOpacity onPress={updateSecureTextEntry}>
          {data.secureTextEntry ? (
            <Feather name="eye-off" color="#05375a" size={20} />
          ) : (
            <Feather name="eye" color="#05375a" size={20} />
          )}
        </TouchableOpacity>
      </View>
      <View style={[styles.action, {marginBottom: 30}]}>
        <FontAwesome
          name="lock"
          color="#05375a"
          size={20}
          
        />
        <TextInput
          placeholder={`${constant.CONFIRM_PASSWORD}*`}
          secureTextEntry={true}
          style={styles.textInput}
          autoCapotalize="none"
          onChangeText={value => handleConfirmPasswordChange(value)}
        />
      </View>

      <View>
        <TouchableOpacity
          style={styles.signIn}
          disabled={
            data.confirmPassword.length >= 8 &&
            data.currentPassword >= 8 &&
            data.newPassword >= 8
              ? false
              : true
          }
          onPress={onSubmit}>
          <LinearGradient
            colors={
              data.confirmPassword.length >= 8 &&
              data.currentPassword >= 8 &&
              data.newPassword >= 8
                ? ['#fa781b', '#ed411f']
                : ['#ed411f', '#fa781b']
            }
            // colors={['#fa781b', '#ed411f']}
            style={styles.signIn}>
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
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
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
    marginTop: 30,
    borderWidth: 2,
    borderColor: '#f2f2f2',
    padding: 5,
    alignItems:'center',
    height: 55,
  },
  textInput: {
    fontSize: 14,
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
    shadowColor: '#000',

    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  signInOff: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
