import { SET_LOCALE } from '../../constants/actionTypes';

export const setLocale = (locale: string) => {
  console.log('setLocale called', locale);
  return {
    type: SET_LOCALE,
    payload: locale
  }
}