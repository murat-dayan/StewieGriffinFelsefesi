import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {DrawerParamList} from './types/NavigationTypes';
import TabNavigator from './TabNavigator';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="HomeDrawer"
        screenOptions={{
          drawerPosition: 'left',
        }}>
        <Drawer.Screen
          name="HomeDrawer"
          component={TabNavigator}
          options={{headerTitle: 'Stewie Griffin Felsefesi'}}
        />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigator;
