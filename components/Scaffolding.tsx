import 'react-native-gesture-handler';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {  Provider } from 'react-redux';
import store from '../store/index';
import { NavigationContainer } from '@react-navigation/native';
import { InteractionManager } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import { Provider as PaperProvider } from 'react-native-paper';
import  Theme from '../Theme';
import Content from '../components/Content';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { DEFAULT_LOCALE } from '../constants';
import LocalizationContext from '../context/Localization';
import * as RNLocalize from 'react-native-localize';
import { setI18nConfig } from '../i18n';
const i18n = require('i18n-js');

export default function Scaffolding(props: any) {
  const [locale, setLocale] = useState(i18n.DEFAULT_LANGUAGE);
  const localizationContext = useMemo(
    () => ({
      t: (scope: any, options: any) => i18n.t(scope, {locale, ...options}),
      locale,
      setLocale,
    }),
    [locale],
  );

  const handleLocalizationChange = useCallback(
    (newLocale) => {
      const newSetLocale = setI18nConfig(newLocale);
      setLocale(newSetLocale);
    },
    [locale],
  );

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {});

    Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    }).then((_) => {});
  }, []);

  useEffect(() => {

    RNLocalize.addEventListener('change', handleLocalizationChange);
    return () => {
      RNLocalize.removeEventListener('change', handleLocalizationChange);
    };
  }, []);

 
  let [fontsLoaded] = useFonts({
    // TODO replace with the actual font
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Provider store={store}>
      <PaperProvider theme={Theme}>
        <NavigationContainer>
          <LocalizationContext.Provider value={localizationContext}>
            <Content{...props} localizationChange={handleLocalizationChange}/> 
          </LocalizationContext.Provider>
        </NavigationContainer>
      </PaperProvider>
    </Provider> 
  );
};