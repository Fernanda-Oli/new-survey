import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from './src/pages/DetailScreen';
import HomeScreen from './src/pages/homepage/HomeScreen';
import TabScreen from './src/pages/survey_control/TabScreen';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: ' ',
          headerTransparent: true,
          headerShadowVisible: false
        }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Survey' }} />        
        <Stack.Screen name="TabScreen" component={TabScreen} options={{ title: 'Survey Adm' }} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}


