import { StyleSheet, Platform } from 'react-native';
import { DEFAULT_SPACING } from '../../constants';

export const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    // flexGrow: 1, 
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: DEFAULT_SPACING
  },
  imageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardView: {
    flex: 2
  },
  card: {
    flex: 1,
    padding: DEFAULT_SPACING
  },
  cardContent: {
    flex: 1,
  },
  cardText: {
    fontSize: DEFAULT_SPACING * .75,
    flex: 1,
    lineHeight: DEFAULT_SPACING,
    fontWeight: '100'
  },
  image: {
    height: 270,
    width: 270,
    maxHeight: 700,
    maxWidth: 450,
    padding: 0,
    margin: 0,
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: '#eeeeee',

    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        // Doesn't work. Why?
        //elevation: 5
      }
    })
  },
  aboutMeCard: {
    backgroundColor: '#ecf0f1',
  },
  skillsCard: {
    backgroundColor: '#ecf0f1',
  },
  workHistoryCard: {
    backgroundColor: '#ecf0f1',
  },
  listItemLabel: {
    fontWeight: 'bold'
  },
  listItemValue: {}
});

export default styles;