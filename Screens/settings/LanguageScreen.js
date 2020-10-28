import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { LanguageSwitch } from '../../components/LanguageSwitch';

export default class LanguageScreen extends React.Component { 
  render() {
    return (
        <LanguageSwitch/>    
    );
  };
}

