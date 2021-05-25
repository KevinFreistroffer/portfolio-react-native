import { LocaleAction } from '../../interfaces/Actions';
import { SET_LOCALE } from '../../constants/actionTypes';
import { DEFAULT_LOCALE } from '../../constants';
import * as Localization from 'expo-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DevSettings } from 'react-native';

export interface LocaleState { 
  locale: string
}

export const defaultState: LocaleState = {
  locale: Localization.locale || DEFAULT_LOCALE
};

export const localeReducer = (state = defaultState, action: LocaleAction) => {
  switch (action.type) {
    case SET_LOCALE:
      console.log('reducer Set_LOCALE', action);
      try {
        AsyncStorage.setItem('LANG_CODE', action.payload);
      } catch(error) {
        console.warn('An error occurred setting AsyncStorage.setItem', error);
      }
      return {
        ...state,
        locale: action.payload,
      };
    default:
      return state;
  }
};
