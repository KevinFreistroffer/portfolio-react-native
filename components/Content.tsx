import 'react-native-gesture-handler';
import React from 'react';
import {  Provider, useDispatch, useSelector } from 'react-redux';
import store from '../store/index';
import { NavigationContainer } from '@react-navigation/native';
import { View, InteractionManager, DevSettings  } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import { Button, Provider as PaperProvider } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Portfolio, ContactMe } from '../pages'; 
import  Theme from '../Theme';
import * as Localization from 'expo-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DefaultRootState } from '../store';
import { setLocale } from '../store/actions/locale';
const i18n = require('i18n-js'); 

const Drawer = createDrawerNavigator(); 

export default function Content() {
  const { locale } = useSelector((store:DefaultRootState) => store);
  const dispatch = useDispatch();

  React.useEffect(() => {
    i18n.locale = locale.locale;
    DevSettings.reload();
  }, [locale.locale]);

  React.useEffect(() => {
    InteractionManager.runAfterInteractions(() => {});

    try {
      AsyncStorage.getItem('LANG_CODE').then((value) => {
        if (value) {
          dispatch(setLocale(value));
        } 
      });
    } catch (error) {
      console.warn('An error occurred in AsyncStorage.getItem', error);
    }
  }, []);
 
  const handleSetLanguage = (language?: string) => {
    dispatch(setLocale('de'));
    DevSettings.reload();
  };

  let [fontsLoaded] = useFonts({
    // TODO replace with the actual font
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={{ flex: 1 }}>
      <Drawer.Navigator
        initialRouteName="Home" 
        drawerStyle={{
          opacity: 0.95,
        }}
        drawerContentOptions={{ activeBackgroundColor: '#eeeeee', activeTintColor: 'red'}}
      >
        <Drawer.Screen 
          name="Home" 
          component={Home} 
          options={{ 
            title: 'Home',
            headerTitle: 'Kevin Freistroffer'
        }} />
        <Drawer.Screen 
          name="Portfolio" 
          component={Portfolio} 
          options={{ 
            title: 'Portfolio',
            headerTitle: 'Kevin Freistroffer'
        }} />
        <Drawer.Screen 
          name="Contact me" 
          component={ContactMe} 
          options={{ 
            title: 'Contact me',
            headerTitle: 'Kevin Freistroffer'
        }} />
      </Drawer.Navigator> 
      <Button onPress={handleSetLanguage}>Set language</Button>     
    </View>
  );
};