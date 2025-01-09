import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types/NavigationTypes';
import HomeScreen from '../screen/Home/HomeScreen';
import WallpapersScreen from '../screen/Wallpapers/WallpapersScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Wallpapers" component={WallpapersScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
