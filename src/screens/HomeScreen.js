import React from 'react';

import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar} from 'react-native-paper';
import {Avatar as Evatar} from 'react-native-elements';
import {useUserInfo} from '../hooks/useUserInfo';
import {NewsItems} from '../components/NewsItems';
import {ListFooterComponent} from '../components/ListFooter';
import LinearGradient from 'react-native-linear-gradient';
import * as constant from '../constants'
export const HomeScreen = ({navigation}) => {
  const avatarData = [
    {
      uri:
        'https://robohash.org/9389dceb6becd9c57b0e3b2438a19402?set=set4&bgset=bg1&size=400x400',
      name: 'Trần Hải Dương',
    },
    {
      uri:
        'https://robohash.org/a43147fc2f7c44c765d1cc098182674e?set=set4&bgset=&size=400x400',
      name: 'Nguyễn Hữu Trung',
    },
    {
      uri:
        'https://robohash.org/70921cdabb23a9e7cd6b8eb09caa08ee?set=set4&bgset=&size=400x400',
      name: 'Trần Quốc Dũng',
    },
  ];
  const DATA = [
    {color: '#086AA1', sign: 'IV', price: '17490', name: 'Xăng RON 95-IV'},
    {color: '#1449B8', price: '17190', name: 'Xăng RON 95-III', sign: 'III'},
    {price: '16660', color: '#14B86E', sign: 'E5', name: 'Xăng E5 RON 92-II'},
    {
      color: '#D78E00',
      price: '14050',
      sign: 'DO',
      name: 'Dầu Diesel 0,001-V',
    },
  ];

  const {userInfo} = useUserInfo();
  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return date + '/' + month + '/' + year; //format: dd-mm-yyyy;
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle="dark-content"
      />
      <LinearGradient
        useAngle={true}
        angle={90}
        angleCenter={{x: 0.5, y: 0.5}}
        colors={['#b8b8b8', '#f4f3f1']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        style={styles.container}
      >
        <LinearGradient
          useAngle={true}
          angle={90}
          angleCenter={{x: 0.5, y: 0.5}}
          colors={['#65A465', '#013C78']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={{flexDirection: 'row', marginBottom: 5 , borderBottomRightRadius: 40}}>
          <TouchableOpacity
            style={styles.user_info}
            onPress={() => navigation.navigate('Account')}>
            <Avatar.Image
              style={styles.avatar}
              size={77}
              source={{
                uri:
                  'https://robohash.org/9389dceb6becd9c57b0e3b2438a19402?set=set4&bgset=bg1&size=400x400',
              }}
            />

            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
                {userInfo.name}
              </Text>
              <Text style={{fontSize: 16, color: '#FFf'}}>
                {userInfo.company}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.setting}
            onPress={() => navigation.navigate('Setting')}>
            <Icon name="cog" size={30} color="#fff" />
          </TouchableOpacity>
        </LinearGradient>
        <View style={styles.news}>
          <View style={styles.header}>
            <View style={{flex: 1}}>
              <Text style={styles.text_header}>{constant.PRICE_BOARD}</Text>
              <Text style={styles.text_date}>Ngày {getCurrentDate()}</Text>
            </View>
            <Image
              source={require('../assets/Group14.png')}
              style={styles.image_header}
            />
          </View>
          <View style={{flex: 1}}>
            <FlatList
              keyExtractor={(item, index) => `${index}`}
              data={DATA}
              ListFooterComponent={<ListFooterComponent />}
              renderItem={({item}) => <NewsItems item={item} />}
            />
          </View>
        </View>
        <View style={styles.footer} backgroundColor="rgba(254, 152, 61, 0.8)">
          <ImageBackground
            source={{
              uri: avatarData[0].uri,
            }}
            style={styles.avatar1}
            imageStyle={{borderRadius: 100}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                // marginRight: 2,
                // marginBottom: 2,
              }}>
              <View
                style={{
                  borderRadius: 50,
                  padding: 3,
                }}>
                <Image
                  source={require('../assets/1stPlaceBadge.png')}
                  style={styles.badge}
                />
              </View>
            </View>
          </ImageBackground>
          <ImageBackground
            backgroundColor="#fff"
            source={{
              uri: avatarData[1].uri,
            }}
            style={styles.avatar2}
            imageStyle={{borderRadius: 100}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                // marginRight: 2,
                // marginBottom: 2,
              }}>
              <View
                style={{
                  borderRadius: 50,
                  padding: 3,
                }}>
                <Image
                  source={require('../assets/2ndPlaceBadge.png')}
                  style={styles.badge}
                />
              </View>
            </View>
          </ImageBackground>
          <ImageBackground
            source={{
              uri: avatarData[2].uri,
            }}
            style={styles.avatar3}
            imageStyle={{borderRadius: 100}}
            backgroundColor="#fff">
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                // marginRight: 2,
                // marginBottom: 2,
              }}>
              <View
                style={{
                  borderRadius: 50,
                  padding: 3,
                }}>
                <Image
                  source={require('../assets/3rdPlaceBadge.png')}
                  style={styles.badge}
                />
              </View>
            </View>
          </ImageBackground>
          <View style={styles.leaderboard}>
            <Text
              style={{fontSize: 11, fontFamily: 'Cabin-Medium', color: '#fff'}}>
              {constant.MONTHLY_TOP}
            </Text>
            <View style={{marginTop: Dimensions.get('screen').height * 0.01}}>
              <Text style={styles.leaderboard_name}>
                1. {avatarData[0].name}
              </Text>
              <Text style={styles.leaderboard_name}>
                2. {avatarData[1].name}
              </Text>
              <Text style={styles.leaderboard_name}>
                3. {avatarData[2].name}
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    // resizeMode: 'stretch',
    height: height,
    width: width,
  },
  user_info: {
    height: height * 0.28,
    paddingLeft: width * 0.1,
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingBottom: height * 0.05,
    opacity: 1,
  },
  setting: {
    height: height * 0.28,
    paddingRight: width * 0.1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingBottom: height * 0.05,
    opacity: 1,
    paddingBottom: height * 0.065,
  },
  news: {
    height: height * 0.48,
    backgroundColor: '#fcfcfc',
    marginHorizontal: width * 0.012,
    borderRadius: 10,
    marginBottom: 5,
  },
  header: {
    height: '25%',
    paddingTop: '3%',
    paddingLeft: '6%',
    flexDirection: 'row',
    marginBottom: '2%',
  },
  text_header: {
    fontSize: 20,
    color: '#119C59',
    // textShadowColor: '#b8b8b8',
    // textShadowOffset: {width: 1, height: 1},
    // textShadowRadius: 10,
    marginBottom: 3,
  },
  text_date: {
    color: '#68ab8b',
    fontSize: 16,
  },
  image_header: {
    height: '100%',
    width: undefined,
    aspectRatio: 1,
    marginRight: width * 0.1,
  },
  footer: {
    flex: 1,
    marginHorizontal: width * 0.012,
    borderRadius: 10,
    marginBottom: height * 0.068,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingRight: width * 0.03,
    paddingTop: height * 0.01,
  },
  avatar1: {
    position: 'absolute',
    bottom: height * 0.05,
    left: width * 0.01,
    zIndex: 4,
    height: width * 0.21,
    width: width * 0.21,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  avatar2: {
    position: 'absolute',
    bottom: height * 0.05,
    left: width * 0.15,
    zIndex: 3,
    height: width * 0.21,
    width: width * 0.21,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 10,
  },
  avatar3: {
    position: 'absolute',
    bottom: height * 0.05,
    left: width * 0.3,
    zIndex: 2,
    height: width * 0.21,
    width: width * 0.21,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 8,
  },
  leaderboard: {
    alignItems: 'flex-end',
  },
  leaderboard_name: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: height * 0.005,
  },
  badge: {
    height: height * 0.05,
    width: height * 0.05,
    resizeMode: 'stretch',
    marginBottom: height * -0.025,
  },
});
