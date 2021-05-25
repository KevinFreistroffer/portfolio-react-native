import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { List } from 'react-native-paper';
import { DEFAULT_SPACING } from '../../../../constants/styles';
import { Container, UL, LI } from './WorkHistory.styled';
const { t } = require('i18n-js');

export interface IWorkHistory {
  contractor?: string;
  client: string;
  employmentPeriod: string;
  location: string;
  position: string;
  summary: Array<string>;
  borderColor: string;
}

export interface IWorkHistoryProps extends IWorkHistory {
  uniqueKey: any,
}

export const WorkHistory = (props: IWorkHistoryProps) => {  
  return (
    <List.Accordion 
      id={`accordion-${props.uniqueKey}`}
      key={props.uniqueKey}
      title={props.client}
      description={props.employmentPeriod}
      theme={{ colors: { primary: 'red' } }}
      titleStyle={styles.accordionTitle}
      onPress={() => {
        console.log('onPress');
      }}
      
    >
        {props.contractor && (
          <List.Item 
            title={ t('Contractor', 'Contractor') } 
            description={props.contractor}
            style={styles.listItem}
            titleStyle={styles.label}
          />
        )}
        <List.Item 
          title={t('Location', 'Location')} 
          description={props.location}
          style={styles.listItem} 
          titleStyle={styles.label}
        />
        <List.Item
          title={t('Position', 'Position')} 
          description={props.position} 
          style={styles.listItem}
          titleStyle={styles.label}
        />
        <List.Item 
          title={t('Summary', 'Summary')} 
          style={styles.listItem}
          titleStyle={styles.label}
        />
          {props.summary.map((s, index: number) =>  {
          return <Text style={{ marginLeft: 26, marginBottom: DEFAULT_SPACING * .5 }} key={index}>{s}</Text>;
        })}
  
    </List.Accordion>
  );
};

const styles = StyleSheet.create({
  accordionTitle: {
    fontSize: 20
  },
  listItem: {
    marginLeft: 10
  },
  label: { 
    fontWeight: 'bold'
  }
});

export default WorkHistory;
