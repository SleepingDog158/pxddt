import React, {useState} from 'react';

import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import * as constant from '../constants'
import {useUserInfo} from '../hooks/useUserInfo';
import {useAuth} from '../hooks/useAuth';
export const AccountScreen = ({navigation}) => {
  const {userInfo} = useUserInfo();

  const onLogout = () => {
    logout(
      response => {
        console.log(response.message);
      },
      error => {
        error;
      },
    );
  };

  const {clearAllData, logout} = useAuth();
  const [image, setImage] = useState(
    'https://robohash.org/9389dceb6becd9c57b0e3b2438a19402?set=set4&bgset=bg1&size=400x400',
  );
  const renderInnerAvatar = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>{constant.CHANGE_AVATAR}</Text>
        <Text style={styles.panelSubtitle}>{constant.CHOOSE_AVATAR}</Text>
      </View>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>{constant.TAKE_PHOTO}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>{constant.PICK_FROM_LIBRARY}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>{constant.CANCEL}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeaderAvatar = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const bs = React.createRef();
  const fall = new Animated.Value(1);

  const takePhotoFromCamera = () => {
    bs.current.snapTo(1);
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    })
      .then(image => {
        console.log(image);
        setImage(image.path);
      })
      .catch(err => {
        if (err.code === 'E_PICKER_CANCELLED') {
          bs.current.snapTo(0);
        }
      });
  };

  const choosePhotoFromLibrary = () => {
    bs.current.snapTo(1);
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    })
      .then(image => {
        console.log(image);
        setImage(image.path);
      })
      .catch(err => {
        if (err.code === 'E_PICKER_CANCELLED') {
          bs.current.snapTo(0);
        }
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[350, 0]}
        renderContent={renderInnerAvatar}
        renderHeader={renderHeaderAvatar}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.ScrollView
        style={{
          opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
          backgroundColor: '#FFFFFF',
        }}>
        <View style={styles.userInfoSection}>
          <View style={{alignItems: 'center', marginTop: 15}}>
            <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
              <View
                style={{
                  height: 120,
                  width: 120,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ImageBackground
                  source={{
                    uri: image,
                  }}
                  style={{height: 120, width: 120}}
                  imageStyle={{borderRadius: 100}}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'flex-end',
                      alignItems: 'flex-end',
                      // marginRight: 2,
                      // marginBottom: 2,
                    }}>
                    <View
                      style={{
                        backgroundColor: '#EAEAEA',
                        borderRadius: 50,
                        padding: 3,
                      }}>
                      <Icon
                        name="camera"
                        size={28}
                        color="#666666"
                        style={{
                          opacity: 1,
                        }}
                      />
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row'}}>
          <View style={styles.info_label}>
              <Text style={styles.label_text}>{constant.FULLNAME}</Text>
            </View>
            <View style={styles.info_detail}>
              <Text style={styles.info_text}>{userInfo.name}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.info_label}>
              <Text style={styles.label_text}>{constant.COMPANY}</Text>
            </View>
            <View style={styles.info_detail}>
              <Text style={styles.info_text}>{userInfo.company}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
          <View style={styles.info_label}>
              <Text style={styles.label_text}>{constant.PHONE}</Text>
            </View>
            <View style={styles.info_detail}>
              <Text style={styles.info_text}>{userInfo.phone}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
          <View style={styles.info_label}>
              <Text style={styles.label_text}>{constant.CREDENTIALID}</Text>
            </View>
            <View style={styles.info_detail}>
              <Text style={styles.info_text}>{userInfo.credentialID}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
          <View style={styles.info_label}>
              <Text style={styles.label_text}>{constant.GENDER}</Text>
            </View>
            <View style={styles.info_detail}>
              <Text style={styles.info_text}>{userInfo.sex}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
          <View style={styles.info_label}>
              <Text style={styles.label_text}>{constant.BIRTHDAY}</Text>
            </View>
            <View style={styles.info_detail}>
              <Text style={styles.info_text}>{userInfo.birthday}</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AddressEdit', {address: userInfo.address})
            }>
            <View style={{flexDirection: 'row'}}>
            <View style={styles.info_label}>
              <Text style={styles.label_text}>{constant.ADDRESS}</Text>
            </View>
              <View style={styles.info_detail}>
                <Text style={styles.info_text}>{userInfo.address}</Text>
                <Icon name="chevron-right" color="#777777" size={30} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('EmailEdit', {email: userInfo.email})
            }>
            <View style={{flexDirection: 'row'}}>
            <View style={[styles.info_label,{borderBottomColor: '#b8b8b8', borderBottomWidth: 1,}]}>
              <Text style={styles.label_text}>{constant.EMAIL}</Text>
            </View>
              <View style={styles.info_detail}>
                <Text style={styles.info_text}>{userInfo.email}</Text>
                <Icon name="chevron-right" color="#777777" size={30} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('PasswordChange')}>
            <View style={[styles.info_detail, {marginTop: 10}]}>
              <Icon name="shield-lock" color="#0d60ae" size={30} />
              <Text
                style={{
                  color: '#777777',
                  marginLeft: 20,
                  fontSize: 18,
                  flex: 1,
                }}>
               {constant.CHANGE_PASSWORD}
              </Text>
              <Icon name="chevron-right" color="#777777" size={30} />
            </View>
          </TouchableOpacity>

          <View
            style={[styles.info_detail, {marginTop: 55, borderBottomWidth: 0}]}>
            <Icon name="exit-to-app" color="#5380D9" size={30} />
            <TouchableOpacity
              onPress={() => {
                clearAllData();
                onLogout();
              }}>
              <Text style={{color: '#5380D9', marginLeft: 20, fontSize: 18}}>
                {constant.SIGN_OUT}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  caption: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
  info_detail: {
    flex: 2,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    borderBottomColor: '#b8b8b8',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  info_label: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
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
    color: '#05375a',
    fontSize: 15,
  },
  info_text: {
    color: '#555555',
    fontSize: 15,
    flex: 1,
    paddingVertical: 5,
  },
  label_text: {
    color: '#6F6F6F',
    fontSize: 16,
    flex: 1,
    paddingVertical: 5,
  },
});
