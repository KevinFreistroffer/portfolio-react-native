export type LoadingAction = {
  type: string;
  payload: {
    isLoading: boolean;
    showLoadingIndicator?: boolean;
    text?: string;
  };
};


export type LocaleAction = {
  type: string;
  payload: string;
};
