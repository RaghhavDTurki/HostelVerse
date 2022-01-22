/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Startscreen from './src/Auth/Startscreen';
import FilterScreen from './src/students/FilterScreen';

const MainStack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <MainStack.Screen name="Splash" component={Startscreen} />
        <MainStack.Screen name="Filter" component={FilterScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
