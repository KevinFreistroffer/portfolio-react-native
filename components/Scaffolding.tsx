import 'react-native-gesture-handler';
import React from 'react';
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
import * as Localization from 'expo-localization';

const i18n = require('i18n-js'); 
i18n.fallbacks = true;
i18n.translations = {
  'en-US': { ...require('../locales/en-US/translation.json') },
  'de': { ...require('../locales/de/translation.json') },
  'fr': { ...require('../locales/fr/translation.json') },
  'es': { ...require('../locales/es/translation.json') },
  'zh-CN': { ...require('../locales/zh-CN/translation.json') },
  'zh-TW': { ...require('../locales/zh-TW/translation.json') }
};

export default function Scaffolding() {
  i18n.locale = Localization.locale;
  React.useEffect(() => {
    InteractionManager.runAfterInteractions(() => {});
  }, []);

 
  let [fontsLoaded] = useFonts({
    // TODO replace with the actual font
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PaperProvider theme={Theme}>
          <Content /> 
        </PaperProvider>
      </Provider> 
    </NavigationContainer>
  );
};