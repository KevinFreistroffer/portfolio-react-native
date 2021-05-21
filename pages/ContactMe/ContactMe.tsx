import * as React from 'react';
import { View, Text, InteractionManager } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { IRootStackParamList } from '../../types';
import Header from '../../components/Header';

export type ContactMeScreenNavigationProp = StackNavigationProp<IRootStackParamList,'Portfolio'>;

type Props = {
  navigation: ContactMeScreenNavigationProp;
};

export const ContactMe = ({ navigation }: Props) => {
  React.useEffect(() => {
    InteractionManager.runAfterInteractions(() => {});
  }, []);
  //const { t } = useTranslation();
  return (
    <View>
      <Header title="Contact me" />
      <Text>Contact me</Text></View>
    // <Container className='flex-column justify-content-flex-start  align-items-center'>
    //   <PageHeader>
    //     <h1>Contact Me</h1>
    //   </PageHeader>
    //   <main>
    //     <ul>
    //       <li>
    //         {t('page_content.contact_me.Email', 'Email')}
    //         :&nbsp;kevin.freistroffer@gmail.com
    //       </li>
    //       <li>
    //         {t('page_content.contact_me.LinkedIn', 'LinkedIn')}:&nbsp;
    //         <a
    //           href='https://www.linkedin.com/in/kevin-freistroffer-963600159/'
    //           target='_blank'
    //           rel='noreferrer'
    //         >
    //           https://www.linkedin.com/in/kevin-freistroffer-963600159/
    //         </a>
    //       </li>
    //     </ul>
    //   </main>
    // </Container>
  );
};

export default ContactMe;
