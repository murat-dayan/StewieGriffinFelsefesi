import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabParamList} from './types/NavigationTypes';
import ProfileScreen from '../screen/Profile/ProfileScreen';
import MaterialDesignIcon from '@react-native-vector-icons/material-design-icons';
import StackNavigator from './StackNavigator';

const BottomTab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = focused ? 'home-circle' : 'home-circle-outline';
          } else if (route.name === 'ProfileTab') {
            iconName = focused ? 'account-circle' : 'account-outline';
          }

          return (
            <MaterialDesignIcon
              name={iconName as 'symbol'}
              size={size}
              color={color}
            />
          );
        },
        headerShown: false,
      })}>
      <BottomTab.Screen
        name="HomeTab"
        component={StackNavigator}
        options={{headerShown: false, tabBarLabel: 'Home'}}
      />
      <BottomTab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{headerShown: false, tabBarLabel: 'Profile'}}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;
