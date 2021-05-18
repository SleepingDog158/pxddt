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
  Image,
  ImageBackground
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as constant from "../constants"
import {useAuth} from '../hooks/useAuth';
import {useUserInfo} from '../hooks/useUserInfo';

export const SignInRealScreen = ({navigation}) => {
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
      username: value,
    });
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
        <View style={{justifyContent: 'flex-start'}}>
          <Animatable.Image
            animation="fadeInDownBig"
            style={styles.logo}
            resizeMode="stretch"
            source={require('../assets/logo.png')}
          />
        </View>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInRightBig">
        <View style={[styles.action, {marginBottom: 12}]}>
          <TextInput
            selectionColor={'#E89F76'}
            placeholderTextColor={'#E89F76'}
            placeholder={constant.USERNAME}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={value => textInputChange(value)}
          />
        </View>

        <View style={styles.action}>
          <TextInput
            selectionColor={'#E89F76'}
            placeholder={constant.PASSWORD}
            placeholderTextColor={'#E89F76'}
            secureTextEntry={data.secureTextEntry}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={value => handlePasswordChange(value)}
          />

          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather
                name="eye-off"
                color="#E89F76"
                size={20}
                style={{marginRight: 10}}
              />
            ) : (
              <Feather
                name="eye"
                color="#E89F76"
                size={20}
                style={{marginRight: 10}}
              />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              color: '#2C5282',
              marginTop: 13,
              fontWeight: 'bold',
              fontSize: 14,
              marginLeft: 'auto',
            }}>
            {constant.FORGET_PASSWORD}
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={onLogin}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#003C77', '#65A465']}
              style={styles.signIn}>
              <Text style={[styles.textSign, {color: '#fff'}]}>{constant.SIGN_IN}</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft:'auto', alignItems: 'center', justifyContent:'center'}}>
            <Image source={require('../assets/FaceID.png')} style= {{resizeMode:'stretch', height:39, width: 39}}/>
          </TouchableOpacity>
        </View>
      </Animatable.View>
      <Animatable.View animation="fadeInUpBig" style={{marginTop:'auto'}}>
          <TouchableOpacity>
          <ImageBackground source={require('../assets/map_background.png')} style={styles.image_footer}>
              <Image source={require('../assets/marker_icon.png')} style={{height: 25, width: 25, marginRight: 5}}/>
              <Text style={styles.location_text}>{constant.NEARBY_STATION}</Text>
          </ImageBackground>
          </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const {height, width} = Dimensions.get('screen');
const height_logo = height * 0.2;
const width_button = width * 0.63;
const styles = StyleSheet.create({
  container: {
      paddingTop:10,
    flex: 1,
    backgroundColor: '#FFF',
  },
  logo: {
    height: '80%',
    resizeMode: 'contain',
  },
  header: {
    height: height_logo,
    alignItems: 'center',
  },
  footer: {
    paddingHorizontal: 30,
    backgroundColor: '#FFF',
  },

  text_footer: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  action: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    paddingVertical: 8,
    alignItems: 'center',
  },

  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 0,
    color: '#E89F76',
    fontSize: 14,
  },

  button: {
    flexDirection: 'row',
    marginTop: 40,
  },
  signIn: {
   
    width: width_button,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 15,
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
  image_footer:{
      width: width,
      height: height*0.07,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
  },
  location_text:{
      fontSize: 16,
      color: "#F96C00"
  }
});
