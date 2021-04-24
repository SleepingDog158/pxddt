import React, {useState} from 'react';

import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Title, Caption, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

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
        <Text style={styles.panelTitle}>Thay ảnh đại diện</Text>
        <Text style={styles.panelSubtitle}>Chọn ảnh đại diện mới</Text>
      </View>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Chụp ảnh</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Chọn từ thư viện</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
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
                  height: 100,
                  width: 100,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ImageBackground
                  source={{
                    uri: image,
                  }}
                  style={{height: 100, width: 100}}
                  imageStyle={{borderRadius: 15}}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'flex-end',
                      alignItems: 'flex-end',
                      marginRight: 2,
                      marginBottom: 2,
                    }}>
                    <Icon
                      name="camera"
                      size={25}
                      color="#fff"
                      style={{
                        opacity: 0.7,
                      }}
                    />
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>

            <View>
              <Title
                style={[
                  styles.title,
                  {
                    marginTop: 15,
                    marginBottom: 5,
                  },
                ]}>
                {userInfo.name}
              </Title>
              <Caption
                style={styles.caption}>{`@${userInfo.username}`}</Caption>
            </View>
          </View>
        </View>

        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Icon name="information-outline" color="#0d60ae" size={30} />
            <Text style={{color: '#777777', marginLeft: 20, fontSize: 15}}>
              {userInfo.PLXID}
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="office-building" color="#0d60ae" size={30} />
            <Text style={{color: '#777777', marginLeft: 20, fontSize: 15}}>
              {userInfo.company}
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="phone" color="#0d60ae" size={30} />
            <Text style={{color: '#777777', marginLeft: 20, fontSize: 15}}>
              {userInfo.phone}
            </Text>
          </View>
          <View style={styles.row}>
            <Icon name="card-account-details" color="#0d60ae" size={30} />
            <Text style={{color: '#777777', marginLeft: 20, fontSize: 15}}>
              {userInfo.credentialID}
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('AddressEdit',{address: userInfo.address})}>
            <View style={styles.row}>
              <Icon name="map-marker-radius" color="#0d60ae" size={30} />
              <Text style={{color: '#777777', marginLeft: 20, fontSize: 15}}>
                {userInfo.address}
              </Text>
              <Icon
                name="chevron-right"
                color="#777777"
                size={30}
                style={{marginLeft: 'auto'}}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('EmailEdit',{email: userInfo.email})}>
            <View style={styles.row}>
              <Icon name="email" color="#0d60ae" size={30} />
              <Text style={{color: '#777777', marginLeft: 20, fontSize: 15}}>
                {userInfo.email}
              </Text>
              <Icon
                name="chevron-right"
                color="#777777"
                size={30}
                style={{marginLeft: 'auto'}}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('PasswordChange')}>
            <View style={[styles.row, {marginTop: 10}]}>
              <Icon name="shield-lock" color="#0d60ae" size={30} />
              <Text style={{color: '#777777', marginLeft: 20, fontSize: 18}}>
                Đổi mật khẩu
              </Text>
              <Icon
                name="chevron-right"
                color="#777777"
                size={30}
                style={{marginLeft: 'auto'}}
              />
            </View>
          </TouchableOpacity>

          <View style={[styles.row, {marginTop: 55, borderBottomWidth: 0}]}>
            <Icon name="exit-to-app" color="#777777" size={30} />
            <TouchableOpacity
              onPress={() => {
                clearAllData();
                onLogout();
              }}>
              <Text style={{color: '#777777', marginLeft: 20, fontSize: 18}}>
                Đăng xuất
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
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingBottom: 10,
    alignItems: 'center',
    borderBottomColor: '#b8b8b8',
    borderBottomWidth: 1,
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
    backgroundColor: '#00000040',
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
  },
});
