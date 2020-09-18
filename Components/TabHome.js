import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationNativeContainer} from '@react-navigation/native';
import React from 'react';
import {Platform, StatusBar, View, Text} from 'react-native';
// import {ThemeProvider} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchScreen from './SearchScreen';
import HomeScreen from '../Screens/HomeScreen';

const Tab = createBottomTabNavigator();


function AppTab() {
  return (
    <NavigationNativeContainer>
    <Tab.Navigator>
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
    </NavigationNativeContainer>
  );
}



export default AppTab;