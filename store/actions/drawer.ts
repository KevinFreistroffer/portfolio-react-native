import { TOGGLE_DRAWER } from '../../constants/actionTypes';

export const toggleDrawer = (
  isOpen: boolean
) => {
  return {
    type: TOGGLE_DRAWER,
    payload: isOpen
  };
};
