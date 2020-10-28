import 'react-native-gesture-handler';
import * as React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import SettingsScreen from './screens/SettingsScreen'
import SearchScreen from './screens/SearchScreen'
import LanguageScreen from './screens/settings/LanguageScreen'

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

const SettingsStackNavigator = createStackNavigator({
  Settings: SettingsScreen,
  Language: LanguageScreen
},
  {
      initialRouteName: 'Settings'
  });

const AppTabNavigator = createBottomTabNavigator({
  Search: {
    screen: SearchScreen,
  },
  SettingsNav: {
    screen: SettingsStackNavigator,
  }
}, 	  
  {
	tabBarPosition :'bottom',
	initialRouteName:'Search'
  })

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer (
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)

