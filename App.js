import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './src/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContainer } from './src/navigators/AuthStack'
import { AppContainer } from './src/navigators/AppStack'
import auth from '@react-native-firebase/auth';
import { PersistGate } from 'redux-persist/lib/integration/react';
import IndexScreen from './src/screens/IndexScreen';
import CreatScreen from './src/screens/CreatScreen';
import EditScreen from './src/screens/EditScreen';
import SginInScreen from './src/screens/authScreens/SginInScreen';
import LoginScreen from './src/screens/authScreens/LoginScreen';


const store = createStore(rootReducer, applyMiddleware(thunk));
const persistor=persistStore(store)
const Stack = createStackNavigator()

const App = () => {
  //const [isLoggedIn ,setisLoggedIn]= useState(false);
  var isLoggedIn = false;
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;
  if (user) {

    isLoggedIn = true
  }


  const authScreens = {
    SignIn: SginInScreen,
    Login: LoginScreen,
  };
  
  const userScreens = {
    Home: IndexScreen,
    Create: CreatScreen,
    Edit:EditScreen
  };


  return (
      <NavigationContainer>
        <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Stack.Navigator>
            {isLoggedIn === false  &&<Stack.Screen options={{ header: () => null }} name="AuthStack" component={AuthContainer} />}      
            {isLoggedIn === true  && <Stack.Screen options={{ header: () => null }} name="AppStack" component={AppContainer} />}
          </Stack.Navigator>
          </PersistGate>
        </Provider>
      </NavigationContainer>
      
    );

}

export default App



