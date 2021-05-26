import React from 'react';

export interface IDefaultValue { };

const DEFAULT_VALUE: IDefaultValue = {};

const LocalizationContext = React.createContext(DEFAULT_VALUE);

export default LocalizationContext;