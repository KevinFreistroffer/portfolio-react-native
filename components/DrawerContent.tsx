import React from 'react';
import { View } from "react-native"
import { Drawer } from "react-native-paper"
import {
  DrawerItem,
  DrawerContentScrollView,
  DrawerContentComponentProps,
  DrawerContentOptions
} from '@react-navigation/drawer';
import { LanguageSelect } from './LanguageSelect/LanguageSelect';
import Spacer from './Spacer';
import * as Permissions from 'expo-permissions';

export const DrawerContent = (props: DrawerContentComponentProps<DrawerContentOptions>): JSX.Element => {
  return <DrawerContentScrollView {...props}>
    <Drawer.Section>
      <Spacer multiplyBy={5}/>
      {Permissions.MEDIA_LIBRARY && Permissions.MEDIA_LIBRARY_WRITE_ONLY && <LanguageSelect {...props}/>}
      <Drawer.Item label="Home" onPress={() => {
        // navigate
        // close the drawer
        // or reverse
      }} />
      <Drawer.Item label="Portfolio" onPress={() => {}} />
      <Drawer.Item label="Contact me" onPress={() => {}} />
    </Drawer.Section>
  </DrawerContentScrollView>
};

export default DrawerContent;