import * as React from 'react';
import { View } from 'react-native';
import { multiply } from 'react-native-reanimated';
import { DEFAULT_SPACING } from '../constants/styles';

export type Props = {
  multiplyBy?: number
}

export const Spacer = (props: Props): JSX.Element => {
  return <View style={{
    width: '100%',
    height: props.multiplyBy ? DEFAULT_SPACING * props.multiplyBy : DEFAULT_SPACING
  }}></View>
};

export default Spacer;