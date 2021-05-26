import { DrawerAction } from '../../interfaces/Actions';
import { TOGGLE_DRAWER } from '../../constants/actionTypes';

export interface DrawerState {
  isOpen: boolean
}

export const defaultState: DrawerState = {
  isOpen: false
};

export const drawerReducer = (state = defaultState, action: DrawerAction) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state;
  }
};
