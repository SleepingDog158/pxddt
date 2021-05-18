import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native'
const backgroundMessageHandler = () =>
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });

const foregroundMessageHandler = () =>
  messaging().onMessage(async remoteMessage => {
    Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  });

export {backgroundMessageHandler, foregroundMessageHandler};
