import { SET_LOADING } from '../../constants/actionTypes';

export const setLoading = (
  isLoading: boolean,
  showLoadingIndicator?: boolean,
  text?: string
) => {
  return {
    type: SET_LOADING,
    payload: {
      isLoading,
      showLoadingIndicator,
      text,
    },
  };
};
