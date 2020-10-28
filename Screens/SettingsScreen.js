import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import { ListItem } from 'react-native-elements';
import LanguageScreen from './settings/LanguageScreen';
import RegisterScreen from './RegisterScreen';
import LoginScreen from './LoginScreen';
import SearchScreen from './SearchScreen';

export default class SettingsScreen extends React.Component {
    state = {
        email: '',
        displayName: ''
    }

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
    }

    list = [
        {
            name: 'Langues',
            action: () => {
                this.props.navigation.navigate('Language');
            }
        },
        {
            name: 'Se déconnecter',
            action: () => {
                firebase.auth().signOut();
            }
        }
    ];

    render() {
        return (
            <View>
                {
                    this.list.map((l, i) => (
                        <ListItem key={i} onPress={() => { l.action() }} bottomDivider>
                            <ListItem.Content>
                                <ListItem.Title>{l.name}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
            </View>
        );
    }
}

