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
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useAuth} from '../hooks/useAuth';
import {useUserInfo} from '../hooks/useUserInfo';

export const SignInScreen = ({navigation}) => {
    const {login} = useAuth();
    const {getInfo} = useUserInfo();
  const [data, setData] = useState({
    username: '',
    password: '',
    secureTextEntry: true,
  });

    const loginApi = () => {

      login(
        data.username,
        data.password,
        (response) => {
          console.log(response.message)
          // console.log('response', response);
          getInfo((response) => {
            console.log(' user info:', response);

          });

        },
        (error) => {
         console.log(error.message)
          Alert.alert('OOps!', error.message, [{text: 'Okay'}], {
            cancelable: true,
          });
        },
      );
    };

    const onLogin = () => {
      if (data.password.length == 0 || data.username.length == 0) {
        Alert.alert('Oops!', 'Yêu cầu nhập tên đăng nhập và mật khẩu', [
          {text: 'Okay'},
        ]);
      } else {
        loginApi();
      }
    };

  const textInputChange = value => {
      setData({
        ...data,
        username: value,})
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
        <Text style={styles.text_footer}>Tên đăng nhập</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#fff" size={20} />
          <TextInput
            selectionColor={'#fff'}
            placeholderTextColor={'#FFF'}
            placeholder="Tên đăng nhập"
            style={styles.textInput}
            autoCapotalize="none"
            onChangeText={value => textInputChange(value)}
          />
        </View>
        <Text style={[styles.text_footer, {marginTop: 15}]}>Mật khẩu</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#fff" size={20} />
          
          <TextInput
            selectionColor={'#fff'}
            placeholder="Mật khẩu"
            placeholderTextColor={'#FFF'}
            secureTextEntry={data.secureTextEntry}
            style={styles.textInput}
            autoCapotalize="none"
            onChangeText={value => handlePasswordChange(value)}
          />
          
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="#FFF" size={20} />
            ) : (
              <Feather name="eye" color="#FFF" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity >
          <Text style={{color: '#FFF', marginTop: 15, fontWeight: 'bold', fontSize: 16}}>
            Quên mật khẩu?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
              onPress={onLogin}
          >
            <LinearGradient colors={['#fff', '#b8b8b8']} style={styles.signIn}>
              <Text style={[styles.textSign, {color: '#0d60ae'}]}>Đăng nhập</Text>
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
  logo: {
    resizeMode: 'contain',
    height: '80%',
    
  },
  header: {
    flex: 3,
    alignItems: 'center',

    paddingBottom: 40,
  },
  footer: {
    flex: 7,
    backgroundColor: '#0d60ae',
    borderTopLeftRadius: 70,

    paddingHorizontal: 30,
    paddingVertical: 40,
  },

  text_footer: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
 
  textInput: {
    flex: 1,
    paddingLeft: 10,
    paddingVertical: 0,
    color: '#fff',
  },
 
  button: {
    alignItems: 'center',
    marginTop: 50,
    
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
