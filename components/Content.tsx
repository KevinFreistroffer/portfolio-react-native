import 'react-native-gesture-handler';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, InteractionManager, DevSettings  } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { Home, Portfolio, ContactMe } from '../pages'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DefaultRootState } from '../store';
import { setLocale } from '../store/actions/locale';
import { Button } from 'react-native-paper';
import DrawerContent from './DrawerContent';
import * as Localization from 'expo-localization';
import { DEFAULT_LOCALE } from '../constants';

const i18n = require('i18n-js'); 

i18n.translations = {
  'en-US': { ...require('../locales/en-US/translation.json') },
  'de': { ...require('../locales/de/translation.json') },
  'fr': { ...require('../locales/fr/translation.json') },
  'es': { ...require('../locales/es/translation.json') },
  'zh-CN': { ...require('../locales/zh-CN/translation.json') },
  'zh-TW': { ...require('../locales/zh-TW/translation.json') }
};
i18n.fallbacks = true;
i18n.defaultLocale = Localization.locale;

export type Props = {
  navigation: DrawerNavigationHelpers
}

const Drawer = createDrawerNavigator(); 

export default function Content(props: any) {
  const { locale: localeState, drawer: drawerState } = useSelector((store:DefaultRootState) => store);
  const dispatch = useDispatch();

  React.useEffect(() => {
    try {
      AsyncStorage.getItem('LANG_CODE').then((value) => {
        if (value) {
          dispatch(setLocale(value));
          i18n.locale = value;
        } 
      });
    } catch (error) {
      console.warn('An error occurred in AsyncStorage.getItem', error);
    }
  }, []);

  React.useEffect(() => {
    if (i18n.locale !== localeState.locale) {
      i18n.locale = localeState.locale;
    }
  }, [localeState.locale]); 

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
        drawerContent={(props) => <DrawerContent {...props} />}
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
    </View>
  );
};