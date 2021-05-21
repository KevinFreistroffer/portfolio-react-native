import * as React from 'react';
// import { useTranslation } from 'react-i18next';
// import PageHeader from '../../components/PageHeader';
import { Container, Img, Paragraph, ParagraphAndImg } from './Home.styled';
import { paragraph1 } from './content';
import Details from './components/Details';
import IWorkHistory from './components/Details'; 
import { View, Text, Button, InteractionManager, Image, ScrollView, Platform, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import { StackScreenProps } from '@react-navigation/stack';
import { IRootStackParamList } from '../../types';
import { useNavigation } from '@react-navigation/core';
import { NavigationProp } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import { DEFAULT_SPACING } from '../../constants/styles';
import { Card } from 'react-native-paper';
import Spacer from '../../components/Spacer'; 
import * as ScreenOrientation from 'expo-screen-orientation';
import { DeviceMotion } from 'expo-sensors';
import { PORTRAIT, LANDSCAPE } from '../../constants';

export type HomeScreenNavigationProp = StackScreenProps<IRootStackParamList,'Home'>;

type Props = {};

export const Home = (props: Props) => {
  const [ orientation, setOrientation ] = React.useState<string>();
  const navigation = useNavigation<any>(); 

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

  // const { t } = useTranslation();
  // const workHistory = [
  //   {
  //     contractor: 'Insight Global',
  //     client: 'Thermofisher',
  //     location: 'Carlsbad, CA',
  //     employmentPeriod: 'September 2020 - April 30th, 2021',
  //     position: t('Front End Developer', 'Front end developer'),
  //     summary: [
  //       t(
  //         'work_history.summary.thermofisher.1',
  //         'Front end developer tasked with converting Angular pages to React given the designs and UX'
  //       ) + '.',
  //       t(
  //         'work_history.summary.thermofisher.2',
  //         'Scrum methodology including sprint planning, backlog grooming, and end of sprint retrospective meetings'
  //       ) + '.',
  //       t(
  //         'work_history.summary.thermofisher.3',
  //         'Daily stand up meetings lead by a scrum master, a product owner, team lead, with other front-end developers, backend developers and other team members from within the company'
  //       ) + '.',
  //       t(
  //         'work_history.summary.thermofisher.4',
  //         'End of sprint demos to team members from the business'
  //       ) + '.',
  //       t(
  //         'work_history.summary.thermofisher.5',
  //         'Integral part of the development and release lifecycle including estimating requirements, implementing requirements, deploying to QA, and verifying the code we pushed to QA and production following a release'
  //       ) + '.',
  //       t(
  //         'work_history.summary.thermofisher.6',
  //         'Strong team-oriented development process including code reviews, chat, phone and video calls, after hour meetings to discuss current and future requirements, and after hours collaboration to fix bugs following a release'
  //       ) + '.',
  //       t(
  //         'work_history.summary.thermofisher.7',
  //         'Technologies including: Jira, Confluence, Abstract, HTML5, CSS & SCSS, JavaScript with React, styled-components, NodeJS, development tools including Jenkins and GitHub'
  //       ) + '.',
  //       t(
  //         'work_history.summary.thermofisher.8',
  //         'Requirements developed and pushed to production at thermofisher.com'
  //       ) + '.',
  //     ],
  //     borderColor: '#ffc0cb',
  //   },
  //   {
  //     contractor: 'Pyramid Consulting',
  //     client: 'Accenture & Google',
  //     location: 'San Jose, CA',
  //     employmentPeriod: 'November 2019 – May 2020',
  //     position: t(
  //       'Angular & Angular-Dart Developer',
  //       'Angular & Angular-Dart Developer'
  //     ),
  //     summary: [
  //       t(
  //         'work_history.summary.accenture_google.1',
  //         'Convert an existing Angular TypeScript application to Angular-Dart, with a SAP backend proxying through a Python server'
  //       ) + '.',
  //       t(
  //         'work_history.summary.accenture_google.2',
  //         'Communicate and cooperate with technology lead and manager to complete weekly assignments, including in person meetings and video meetings'
  //       ) + '.',
  //       t(
  //         'work_history.summary.accenture_google.3',
  //         'Learn new technologies including Dart, Angular-Dart, and Googles internal technologies and internal development procedures'
  //       ) + '.',
  //       t(
  //         'work_history.summary.accenture_google.4',
  //         'Develop at a Google building and remotely.'
  //       ) + '.',
  //     ],
  //     borderColor: '#f4e6a9',
  //   },
  //   {
  //     contractor: 'Quest Global',
  //     client: 'Apple',
  //     location: 'San Jose, CA',
  //     employmentPeriod: 'July 2019 – October 2019',
  //     position: t('Angular Engineer', 'Angular Engineer'),
  //     summary: [
  //       t(
  //         'work_history.summary.apple.1',
  //         'Develop an UI based on a design and the requirements specified with Angular 6, using TypeScript and Angular Material Components'
  //       ) + '.',
  //       t(
  //         'work_history.summary.apple.2',
  //         'Connect the front end to a backend server given the API contract details, and render the data on the UI'
  //       ) + '.',
  //       t(
  //         'work_history.summary.apple.3',
  //         "Use tools to develop including the Angular-CLI, Apple's Radar"
  //       ) + '.',
  //       t(
  //         'work_history.summary.apple.4',
  //         'Communicate with team members including managers, team lead, mobile iOS & Android developers, backend developers, QA, & management on a daily and weekly basis in person and through chat & video with Slack & WebEx'
  //       ) + '.',
  //       t('work_history.summary.apple.5', 'Develop at an Apple office') + '.',
  //     ],
  //     borderColor: '#add8e6',
  //   },
  // ];


  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff'}}> 
      <Header title="Kevin Freistroffer" />
      <ScrollView contentContainerStyle={{...styles.scrollView, flexDirection: orientation === PORTRAIT ? 'column' : 'row'}}>
        <View style={styles.cardView}>
          <Card style={{
            ...styles.card,
            flex: 2
          }}>
            <Card.Title title="About me" />
            <Card.Content style={{...styles.cardContent, flexDirection: orientation === PORTRAIT ? 'column' : 'row'}}>
              <Image style={{...styles.image, marginRight: DEFAULT_SPACING }}  source={require("../../imgs/me.jpg")} /> 
              {orientation === PORTRAIT && <Spacer />}

              <Text style={ { fontSize: DEFAULT_SPACING * .75, flex: 1, lineHeight: DEFAULT_SPACING, fontWeight: '100'} }>Hi, my name is Kevin Freistroffer. I'm 36 years and have been developing for 10+ years. I specialize in HTML5, CSS3, JavaScript with React and Angular on the front end, NodeJS and MongoDB on the server side, Dart and mobile development with Flutter. I enjoy, prefer and need to work with a team of other developers to progress and am looking forward to joining a team, in an Agile methodology, utilizing tools such as Jira, to develop stories and features, and to fix bugs, while learning new technologies, strategies, thought processes to develop and incorporate into my daily routines, and to be led by the team and to lead when needed.
              </Text>
            </Card.Content>
          </Card>
        </View>
        { orientation === PORTRAIT && <Spacer multiplyBy={2} /> }
      </ScrollView>
    </View>
    // <Container className='flex-column center-all'>
    //   <ParagraphAndImg className='justify-space-around align-items-center'>
    //     <Img className='col-xs-12 col-sm-6' src={me} alt='Kevin Freistroffer' />
    //     <Paragraph className='col-xs-12 col-sm-6'>
    //       <span className='display-3'>{t('About me', 'About me')}:</span>
    //       {t('about_me_text', paragraph1)}
    //     </Paragraph>
    //   </ParagraphAndImg>
    //   <div className='skill-sets col-xs-12 '>
    //     <div className='display-3'>{t('Skills', 'Skills')}:</div>
    //     <Paragraph>
    //       HTML5, CSS3 & SCSS, JavaScript, Angular, React, jQuery, NodeJS,
    //       MongoDB, Dart, Github & Lerna, Jenkins, SCRUM, and Jira
    //     </Paragraph>
    //   </div>
    //   <div className='work-history col-xs-12'>
    //     <div className='display-3'>{t('Work history', 'Work history')}:</div>
    //     {workHistory.map((history, index: number) => (
    //       <Details {...history} key={index} />
    //     ))}
    //   </div>
    // </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    // flexGrow: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center',
    padding: DEFAULT_SPACING * 2
  },
  imageView: {
    flex: 1
  },
  cardView: {
    flex: 2
  },
  cardContent: {},
  image: { 
    height: 270,
    width: 270,
    maxHeight: 700,
    maxWidth: 450,
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
  card: {
    // flex: 1,
    // flexGrow: 1,
    // width: '100%'
  }
});
