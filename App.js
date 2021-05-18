/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import RootNavigator from './src/navigator/RootNavigator';
import {Provider} from 'react-redux';
import {ActivityIndicator, Alert} from 'react-native';
import {PersistGate} from 'redux-persist/lib/integration/react';
import configStored from './src/stores';
import {foregroundMessageHandler} from './FCMServices';

const {store, persistor} = configStored();
import SplashScreen from 'react-native-splash-screen';

export {store};

const App = () => {
  React.useEffect(() => {
    const unsubscribe = foregroundMessageHandler();

    return unsubscribe;
  }, []);
  
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <ActivityIndicator size="large" color="#0000ff" style={{flex: 1}} />
        }
        persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
