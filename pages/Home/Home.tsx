import React from 'react';
import styles from './styles';
import WorkHistory from './components/WorkHistory';
import { View, Text, InteractionManager, Image, ScrollView} from 'react-native';
import Header from '../../components/Header';
import { StackScreenProps } from '@react-navigation/stack';
import { IRootStackParamList } from '../../types';
import { DEFAULT_SPACING } from '../../constants/styles';
import { Card } from 'react-native-paper';
import Spacer from '../../components/Spacer'; 
import * as ScreenOrientation from 'expo-screen-orientation';
import { PORTRAIT, LANDSCAPE } from '../../constants';
import { List } from 'react-native-paper';
import { getWorkHistoryData } from './getWorkHistoryData';
import { IWorkHistory } from './components/WorkHistory/WorkHistory';
const { t } = require('i18n-js');
import { about_me_text } from './content';

export type HomeScreenNavigationProp = StackScreenProps<IRootStackParamList,'Home'>;

type Props = {};

export const Home = (props: Props) => {
  const data: Array<IWorkHistory> = getWorkHistoryData(t);
  const [ orientation, setOrientation ] = React.useState<string>();

  const mapOrientationNumberToString = (orientation: number): string => {
    let orientationString: string = '';
    // Need to handle orientation === 0
    if (orientation === 1 || orientation === 2) {
      orientationString = PORTRAIT;
    } else if (orientation === 3 || orientation === 4) {
      orientationString = LANDSCAPE
    }

    return orientationString;
  };
  

  const orientationListener = ({ orientationInfo, orientationLock }: any) => {
    setOrientation(mapOrientationNumberToString(orientationInfo.orientation));
  }

  React.useEffect(() => {
    ScreenOrientation.getOrientationAsync().then(orientation => {
      console.log('getOrientationAsync', orientation);
      setOrientation(mapOrientationNumberToString(orientation));
    });
    ScreenOrientation.addOrientationChangeListener(orientationListener);
    InteractionManager.runAfterInteractions(() => {});
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff'}}> 
      <Header title="Kevin Freistroffer" />
      <ScrollView contentContainerStyle={{...styles.scrollView, flexDirection: orientation === PORTRAIT ? 'column' : 'row'}}>
        <View style={styles.cardView}>
          <Card style={{...styles.card, ...styles.aboutMeCard}}>
            <Card.Title title={t('About me', 'About me')} /> 
            <Card.Content style={{...styles.cardContent, flexDirection: orientation === PORTRAIT ? 'column' : 'row', justifyContent: 'center', alignItems: 'center'}}>
              <Image style={{...styles.image, marginRight: orientation === PORTRAIT ? 0 : DEFAULT_SPACING }}  source={require("../../imgs/me.jpg")} /> 
              {orientation === PORTRAIT && <Spacer />}

              <Text style={styles.cardText}>{t('about_me_text', about_me_text)}
              </Text>
            </Card.Content>
          </Card>
          <Spacer />
          <Card style={{...styles.card, ...styles.skillsCard}}>
            <Card.Title title="Skills" />
            <Card.Content style={styles.cardContent}>
              <Text style={styles.cardText}>HTML5 | CSS3 & SCSS | JavaScript & TypeScript | Angular | React | NodeJS | MongoDB | Dart | jQuery | Github & Lerna | Jenkins | SCRUM | Jira & Confluence | Swagger
              </Text>
            </Card.Content>
          </Card>
          <Spacer />
          <Card style={{...styles.card, ...styles.workHistoryCard}}>
            <Card.Title title="Work History" />
            <Card.Content style={styles.cardContent}>
              <List.Section>
                <List.AccordionGroup>
                  { 
                    data.map((history, index: number) => {
                      return <WorkHistory {...history} key={index} uniqueKey={index} /> 
                    }) 
                  }
                </List.AccordionGroup>
              </List.Section>
            </Card.Content>
          </Card>
        </View>
        { orientation === PORTRAIT && <Spacer multiplyBy={2} /> }
      </ScrollView>
    </View>
  );
};

export default Home;
