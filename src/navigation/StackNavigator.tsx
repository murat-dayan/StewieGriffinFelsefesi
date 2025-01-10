import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types/NavigationTypes';
import HomeScreen from '../screen/Home/HomeScreen';
import WallpapersScreen from '../screen/Wallpapers/WallpapersScreen';
import SeasonsScreen from '../screen/Seasons/SeasonsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Wallpapers"
        component={WallpapersScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Seasons"
        component={SeasonsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
