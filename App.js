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
import HostelDetail from './src/students/HostelDetail';
import ChatScreen from './src/students/ChatScreen';
import CheckInOut from './src/students/CheckInOut';

const MainStack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="CheckInOut"
        screenOptions={{headerShown: false}}>
        <MainStack.Screen name="Splash" component={Startscreen} />
        <MainStack.Screen name="Filter" component={FilterScreen} />
        <MainStack.Screen name="Detail" component={HostelDetail} />
        <MainStack.Screen name="CheckInOut" component={CheckInOut} />
        <MainStack.Screen name="Chat" component={ChatScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
