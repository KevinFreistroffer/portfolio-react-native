import * as React from 'react';
import { Appbar } from 'react-native-paper'; 
import { StyleSheet, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';

export interface IHeaderProps {
  title: string
}

export default function Header (props: IHeaderProps) {
  const route = useRoute();
  const navigation = useNavigation<any>();

  return (
    <Appbar.Header style={{ backgroundColor: '#333' }}>
      {route.name !== 'Home' && <Appbar.BackAction onPress={() => navigation.dispatch(CommonActions.goBack())} />}
      <Appbar.Content title={props.title}/>
      <Appbar.Action icon="dots-vertical" onPress={() => navigation.toggleDrawer()} />
    </Appbar.Header>
  );
}