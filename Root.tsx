import 'react-native-gesture-handler';
import React, { Suspense } from 'react';
import App from './App';
import {  Provider } from 'react-redux';
import store from './store/index';
import { Home, Portfolio } from './pages'; 
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';

const Stack = createStackNavigator();

export default function Root() {
  return (
    <View style={ { flex: 1 } }>
      <NavigationContainer>
        <Provider store={store}>
          <Suspense 
            fallback={
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
            }>
            <App />
          </Suspense>
        </Provider> 
      </NavigationContainer>
    </View>
  );
} 

