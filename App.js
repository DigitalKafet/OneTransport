import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import React from 'react'
import LoadingScreen from './Screens/LoadingScreen'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import HomeScreen from './Screens/HomeScreen'
import SearchScreen from './Components/SearchScreen'
import TabHome from './Components/TabHome'
import data from './Helpers/transportData'

import * as firebase from 'firebase'
import { NavigationContainer } from '@react-navigation/native'

var firebaseConfig = {
  apiKey: "AIzaSyCDTKKnKdR0m3gvi2Ylaa0avenexXepJk0",
  authDomain: "onetransport-cdc0c.firebaseapp.com",
  databaseURL: "https://onetransport-cdc0c.firebaseio.com",
  projectId: "onetransport-cdc0c",
  storageBucket: "onetransport-cdc0c.appspot.com",
  messagingSenderId: "802688063385",
  appId: "1:802688063385:web:444df702c91bcc550fe508",
  measurementId: "G-PESTQ8QKFQ"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const HomeTab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  return(
    <NavigationContainer>
  <HomeTab.Navigator>
    <HomeTab.Screen name='Rechercher' component={SearchScreen}/>
    <HomeTab.Screen name='Paramètres' component={HomeScreen}/>
  </HomeTab.Navigator>
  </NavigationContainer>
  )
}

const AppStack = createStackNavigator({
  Search: HomeTabNavigator,
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer (
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)

