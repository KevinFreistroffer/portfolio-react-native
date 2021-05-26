import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
// import { StyleSheet, View } from 'react-native';
import { Picker, Form, Content } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DevSettings, View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setLocale } from '../../store/actions/locale';
import { DefaultRootState } from '../../store';
import * as Localization from 'expo-localization';
import { Modal, Portal, Button } from 'react-native-paper';
import styles from './styles';
import Spacer from '../Spacer';
const { t } = require('i18n-js');
import {
  DrawerContentComponentProps,
  DrawerContentOptions
} from '@react-navigation/drawer';
const i18n = require('i18n-js');

export const LanguageSelect = (props: DrawerContentComponentProps<DrawerContentOptions>): JSX.Element => {
  const store = useSelector((store: DefaultRootState) => store);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(Localization.locale);
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  const dispatch = useDispatch();
  
  const handleOnChange = (locale: string) => {
    console.log('handleOnChange', locale, selectedLanguage);    

    if (locale !== i18n.locale) {
      setSelectedLanguage(locale);
      setModalIsVisible(true);
    }
  };


  return (
    <Content>
      <Portal>
        <Modal style={styles.modal} visible={modalIsVisible} onDismiss={() => {}}>
          <Text style={styles.text}>The application needs to reload to change languages.</Text>
          <Text style={styles.text}>Reload the app?</Text>
          <Button color="#ffffff" style={styles.button} onPress={async () => {         
            try {
              await AsyncStorage.setItem('LANG_CODE', selectedLanguage); 
            } catch(error) {
              console.warn('An error occurred calling AsyncStorage.setItem', error);
            }

            DevSettings.reload();
          }} >Yes</Button>
          <Spacer multiplyBy={.5} />
          <Button color="#ffffff" style={styles.button} onPress={() => {
            setModalIsVisible(false);
            props.navigation.closeDrawer();
          }} >No</Button>
        </Modal>
      </Portal>
      <Form>
        <Text>Language Select</Text>

        <Picker 
          note
          mode="dropdown"
          style={ { flex: 1, height: 60 } }
          selectedValue={selectedLanguage} 
          onValueChange={handleOnChange}
        >
          
          <Picker.Item  value='en-US' label={t('English', 'English')} />
          <Picker.Item value='de' label={t('German', 'German')} />
          <Picker.Item value='es' label={t('Spanish', 'Spanish')} />
          <Picker.Item value='fr' label={t('French', 'French')} />
          <Picker.Item 
            value='zh-CN'
            label={t('Chinese (Simplified)', 'Chinese (Simplified)')}
          />
          <Picker.Item 
            value='zh-TW'
            label={t('Chinese (Traditional)', 'Chinese (Traditional)')}
          />
        </Picker>
      </Form>
    </Content>
    
  );
}