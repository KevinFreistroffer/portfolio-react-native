import { LocaleAction } from '../../interfaces/Actions';
import { SET_LOCALE } from '../../constants/actionTypes';
import { DEFAULT_LOCALE } from '../../constants';

export interface LocaleState {
  locale: string
}

export const defaultState: LocaleState = {
  locale: DEFAULT_LOCALE
};

export const localeReducer = (state = defaultState, action: LocaleAction) => {
  switch (action.type) {
    case SET_LOCALE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
