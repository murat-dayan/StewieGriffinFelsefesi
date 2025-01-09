import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerParamList} from './types/NavigationTypes';
import TabNavigator from './TabNavigator';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {AppColors} from '../style/Colors';

const Drawer = createDrawerNavigator<DrawerParamList>();

const CustomHeaderLeftIcon = ({navigation}: {navigation: any}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.toggleDrawer()}
      style={{marginLeft: 15}}>
      <MaterialDesignIcons name="backburger" size={30} color="black" />
    </TouchableOpacity>
  );
};

const DrawerNavigator = () => {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="HomeDrawer"
        screenOptions={({navigation}) => ({
          headerLeft: () => <CustomHeaderLeftIcon navigation={navigation} />,
          headerStyle: {
            backgroundColor: AppColors.background,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}>
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
