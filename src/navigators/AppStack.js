import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from '../screens/IndexScreen';
import CreatScreen from '../screens/CreatScreen';
import EditScreen from '../screens/EditScreen';
import { Button, TouchableOpacity, Text } from 'react-native';


const Stack = createStackNavigator();
export const AppContainer = () => {
  return (

    <Stack.Navigator>


      <Stack.Screen
        name="Index"
        component={IndexScreen}
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('create')}
            >
              <Text style={{ fontSize: 24, marginLeft: 5 }}>ADD</Text>
            </TouchableOpacity>


          ), 
   
          headerTitle: ''
        })}
      />


       <Stack.Screen
        name="create"
        component={CreatScreen}
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Index')}
            >
              <Text style={{ fontSize: 24, marginLeft: 5 }}>BACK</Text>
            </TouchableOpacity>


          ), 
   
          headerTitle: ''
        })}
      />
       <Stack.Screen
        name="Edit"
        component={EditScreen}
        options={({ navigation, route }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Index')}
            >
              <Text style={{ fontSize: 24, marginLeft: 5 }}>BACK</Text>
            </TouchableOpacity>


          ), 
   
          headerTitle: ''
        })}
      />

        

    </Stack.Navigator>



  )
}

    // headerRight: () => (
          //   <TouchableOpacity
          //     onPress={() => navigation.navigate('create')}
          //   >
          //     <Text style={{ fontSize: 24, marginRight: 5 }}>Sgin Out</Text>
          //   </TouchableOpacity>
          // ),
