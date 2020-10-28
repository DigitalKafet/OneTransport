import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

const langs = ['en', 'ru'];

function opLang() {
    const [lang, changeLang] = useState('en');
  }

export const LanguageSwitch = () => { 
    return (
      <View>
        {
          langs.map((currentLang, i) => (
            <ListItem key={i} bottomDivider onPress={() => opLang[1]} checkmark={currentLang === opLang[1]}>
              <ListItem.Content>
                <ListItem.Title>{currentLang}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
     ))} 
      </View>
    );
}

const styles = StyleSheet.create({
    language: {
      paddingTop: 10,
      textAlign: 'center',
    },
  });