/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { LogBox } from 'react-native';

import Home from './src/containers/Home';
import PromoDetail from './src/containers/PromoDetail';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { navigationRef } from './src/helpers/RootNavigation';
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './src/store/store';

const Stack = createStackNavigator();


const App: () => ReactNode = () => {

  LogBox.ignoreAllLogs();
  // console.reportErrorsAsExceptions = false;
  return (
    <Provider store={configureStore().store}>
      <PersistGate loading={null} persistor={configureStore().persistor}>
        <NavigationContainer ref={navigationRef}>

          <Stack.Navigator>

           <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            /> 
      
            <Stack.Screen
              name="PromoDetail"
              component={PromoDetail}
              options={{ headerShown: false }}
            />
            
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;


