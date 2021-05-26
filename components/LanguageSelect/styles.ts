import { StyleSheet } from 'react-native';
import { DEFAULT_SPACING } from '../../constants/styles';

export const styles = StyleSheet.create({
  modal: {
    width: '90%',
    height: '90%',
    padding: DEFAULT_SPACING * 2,
    margin: '5%',
    backgroundColor: 'white'
  },
  text: {
    fontSize: DEFAULT_SPACING * .75,
    marginBottom: DEFAULT_SPACING
  },
  button: {
    padding: DEFAULT_SPACING * .25,
    backgroundColor: "#333333"
  },
});

export default styles;