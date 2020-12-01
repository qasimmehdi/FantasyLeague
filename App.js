/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StartupScreen from './src/StartupScreen';
import Login from './src/auth/login/login';
import HomeTabNav from './src/home-tab/home-tab-nav';
import {NavigationContainer} from '@react-navigation/native';
import Signup from './src/auth/signup/sigunp';
const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StartupScreen" component={StartupScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />

        <Stack.Screen
          name="HomeTabNav"
          component={HomeTabNav}
          options={{title: 'Fantasy League'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
