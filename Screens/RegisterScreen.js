import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

export default class RegisterScreen extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        errorMessage: null
    }

    handleSignup = () => {
        firebase.auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(userCredentials => {
            return userCredentials.user.updateProfile({
                displayName: this.state.name
            });
        })
        .catch(error => this.setState({ errorMessage: error.message}))
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.greeting}>{'Inscrivez-vous'}</Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View> 

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Prénom et nom</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize='none' 
                            onChangeText={name => this.setState({ name })}
                            value={this.state.name}
                        ></TextInput>
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>Adresse email</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize='none' 
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        ></TextInput>
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>Mot de passe</Text>
                        <TextInput style={styles.input} 
                        secureTextEntry 
                        autoCapitalize='none' 
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                        ></TextInput>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={this.handleSignup}>
                        <Text style={{ color: '#FFF', fontWeight: '500' }}>S'inscrire</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={{alignSelf: 'center', marginTop: 32}}
                        onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Text style={{color: '#414959', fontSize: 13}}>
                            Vous avez dejà un compte? <Text style={{ fontWeight: '500', color: '#1089FF' }}>Connectez-vous</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>      
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    greeting: {
        marginTop: 100,
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'center'
    },
    errorMessage: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30
    },
    error: {
        color: '#E9446A',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center'
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: '#8A8F9E',
        fontSize: 10,
        textTransform: 'uppercase'
    },
    input: {
        borderBottomColor: '#8A8F9E',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: '#161F3D'
    },
    button: {
        marginTop: 40,
        marginHorizontal: 30,
        backgroundColor: '#1089FF',
        borderRadius: 4,
        height: 52,
        alignItems: 'center',
        justifyContent: 'center',
    }
});