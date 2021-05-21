// @ts-nocheck
import * as React from 'react';
import { Button, View, Text, StyleSheet, InteractionManager } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Portfolio, ContactMe } from './pages'; 
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { IRootStackParamList } from './types';
import { IconButton, Icon } from 'react-native-paper';
import Root from './Root';

const RootStack = createStackNavigator<IRootStackParamList>();
const Drawer = createDrawerNavigator(); 

const HeaderTitle = (): JSX.Element => <Text style={ styles.headerTitle.fontSize }>Kevin Freistroffer</Text>

export default function App() {

  React.useEffect(() => {
    InteractionManager.runAfterInteractions(() => {});
  }, []);

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen 
        name="Home" 
        component={Home} 
        options={{ 
          title: 'Home',
          headerTitle: 'Kevin Freistroffer'
        }} />
      <Drawer.Screen 
        name="Portfolio" 
        component={Portfolio} 
        options={{ 
          title: 'Portfolio',
          headerTitle: 'Kevin Freistroffer'
        }} />
      <Drawer.Screen 
        name="Contact me" 
        component={ContactMe} 
        options={{ 
          title: 'Contact me',
          headerTitle: 'Kevin Freistroffer'
        }} />
    </Drawer.Navigator>             
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});