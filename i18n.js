import { I18nManager } from 'react-native';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';
import * as Localization from 'expo-localization';

export const DEFAULT_LANGUAGE = Localization.locale;

export const translationGetters = {
  // lazy requires (metro bundler does not support symlinks)
  'en-US': () => require('./locales/en-US/translation.json'),
  'de': () => require('./locales/de/translation.json'),
  'fr': () => require('./locales/fr/translation.json'),
  'es': () => require('./locales/es/translation.json'),
  'zh-CN': () => require('./locales/zh-CN/translation.json'),
  'zh-TW': () => require('./locales/zh-TW/translation.json')
};

export const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

export const t = translate;

export const setI18nConfig = (codeLang = null) => {
  // fallback if no available language fits
  const fallback = { languageTag: DEFAULT_LANGUAGE, isRTL: false };
  const lang = codeLang ? { languageTag: codeLang, isRTL: false } : null;

  const { languageTag, isRTL } = lang ? lang : fallback;

  // clear translation cache
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  // set i18n-js config
  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.locale = languageTag;

  return languageTag;
};