import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SginInScreen from '../screens/authScreens/SginInScreen';
import LoginScreen from '../screens/authScreens/LoginScreen';


const Stack = createStackNavigator();
export const AuthContainer = () => {
  return (
   
      <Stack.Navigator>
        <Stack.Screen options={{ header: () => null }} name="SginIn" component={SginInScreen} />
        <Stack.Screen options={{ header: () => null }} name="Login" component={LoginScreen} />
      </Stack.Navigator>
   


  )
}

