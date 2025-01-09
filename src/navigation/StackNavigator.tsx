import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types/NavigationTypes';
import HomeScreen from '../screen/Home/HomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
