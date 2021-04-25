import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Alert,
  Dimensions,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import {useAuth} from '../hooks/useAuth';
import {useUserInfo} from '../hooks/useUserInfo';

export const SignInAltScreen = ({navigation}) => {
  const {login} = useAuth();
  const {getInfo, clearUserData, userInfo} = useUserInfo();
  const [data, setData] = useState({
    username: userInfo.username,
    password: '',
    secureTextEntry: true,
  });

  const loginApi = () => {
    login(
      data.username,
      data.password,
      response => {
        console.log(response.message);
        // console.log('response', response);
        getInfo(response => {
          console.log(' user info:', response);
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

  const onLogin = () => {
    if (data.password.length == 0 || data.username.length == 0) {
      Alert.alert('Oops!', 'Yêu cầu nhập mật khẩu', [{text: 'Okay'}]);
    } else {
      loginApi();
    }
  };

  const handlePasswordChange = value => {
    setData({
      ...data,
      password: value.trim(),
    });
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <View style={styles.header}>
        <View style={{height: '150%'}}>
          <Animatable.Image
            animation="bounceIn"
            duration={1500}
            style={styles.logo}
            resizeMode="stretch"
            source={require('../assets/logo.png')}
          />
        </View>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInRightBig">
        <Text
          style={[
            styles.name_footer,
            {alignSelf: 'center', fontWeight: 'bold'},
          ]}>
          Xin chào!
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Avatar.Image
            style={[styles.avatar, {}]}
            size={100}
            source={{
              uri:
                'https://robohash.org/9389dceb6becd9c57b0e3b2438a19402?set=set4&bgset=bg1&size=400x400',
            }}
          />
          <View style={{marginLeft: 10, justifyContent: 'center'}}>
            <Text style={styles.name_footer}>{userInfo.name}</Text>
            <Text style={styles.id_footer}>{userInfo.username}</Text>
          </View>
        </View>
        <View style={styles.action}>
          <TextInput
            selectionColor={'#fff'}
            placeholder="Nhập mật khẩu"
            placeholderTextColor={'#FFF'}
            secureTextEntry={data.secureTextEntry}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={value => handlePasswordChange(value)}
          />

          <TouchableOpacity
            onPress={updateSecureTextEntry}
            style={{marginLeft: 'auto'}}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="#FFF" size={20} />
            ) : (
              <Feather name="eye" color="#FFF" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{flex: 1}}>
            <Text
              style={{
                color: '#FFF',
                marginTop: 15,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Quên mật khẩu?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => clearUserData()}>
            <Text
              style={{
                color: '#FFF',
                marginTop: 15,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Thoát tài khoản
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={onLogin}>
            <LinearGradient colors={['#fff', '#b8b8b8']} style={styles.signIn}>
              <Text style={[styles.textSign, {color: '#0d60ae'}]}>
                Đăng nhập
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const {height, width} = Dimensions.get('screen');
const height_logo = height * 0.1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  avatar_container: {
    paddingTop: 10,
    height: '150%',
  },
  avatar: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  header: {
    flex: 3,
    alignItems: 'center',

    paddingBottom: 40,
  },
  logo: {
    resizeMode: 'contain',
    height: '80%',
  },
  footer: {
    flex: 9,
    backgroundColor: '#0d60ae',
    borderTopLeftRadius: 70,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },

  text_footer: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  name_footer: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '900',

    textTransform: 'uppercase',
  },
  id_footer: {
    color: '#FFF',
    fontSize: 15,
  },
  action: {
    flexDirection: 'row',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },

  textInput: {
    paddingLeft: 10,
    paddingVertical: 0,
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    flex: 1,
  },

  button: {
    alignItems: 'center',
    marginTop: 35,
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
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFF',
    alignItems: 'center',
    marginTop: 10,
  },
});
