import { SET_LOCALE } from '../../constants/actionTypes';

export const setLocale = (locale: string) => {
  return {
    type: SET_LOCALE,
    payload: locale
  }
}