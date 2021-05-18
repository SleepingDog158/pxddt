/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {backgroundMessageHandler} from './FCMServices';

// Register background handler
backgroundMessageHandler();

AppRegistry.registerComponent(appName, () => App);
