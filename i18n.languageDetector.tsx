import AsyncStorage  from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization'

const i18nLanguageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback: Function) => Localization.getLocalizationAsync().then(({ locale }) => {
    console.log('locale', locale);

    return callback(locale.replace('-', '_'));
  }),
  init: () => { },
  cacheUserLanguage: () => { }
};

export default i18nLanguageDetector;
