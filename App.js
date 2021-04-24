/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 
 import RootNavigator from './src/navigator/RootNavigator'
 import {Provider} from 'react-redux';
 import {PersistGate} from 'redux-persist/lib/integration/react';
 import configStored from './src/stores';

 
 const {store, persistor} = configStored();
 
 export {store};
 
 const App = () => {
   return (
     <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
         <RootNavigator />
       </PersistGate>
     </Provider>

   );
 };
 
 export default App;
 