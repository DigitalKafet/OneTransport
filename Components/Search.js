import React from 'react'
import { StyleSheet, View, Text, Button, TextInput, FlatList, TouchableHighlight } from 'react-native'
import transports from '../Helpers/transportData'
import TransportItem from './TransportItem'

class Search extends React.Component {
    render() {                                                                       
       return (
           <View style={styles.globalview}>
               <View style={styles.searchview}>
                    <Text style={styles.label}>Départ</Text>
                    <TextInput placeholder="D'où partez-vous ?" placeholderTextColor="#eeeeee" style={styles.textinput} />
                    <Text style={styles.label}>Arrivée</Text>
                    <TextInput placeholder="Où allez-vous ?" placeholderTextColor="#eeeeee" style={styles.textinput}/>
                     <TouchableHighlight style={styles.button} onPress={() => {}}>
                         <Text style={styles.button_text}>Rechercher</Text>
                     </TouchableHighlight>
               </View>  
                <View style={styles.searchresultsview}>
                    <FlatList
                        data={transports}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <TransportItem transport={item}/>}
                    />
                </View>       
           </View>
       ) 
    }
}

const styles = StyleSheet.create({
    globalview: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    searchview: {
        paddingTop: 60,
        paddingRight: 8,
        paddingLeft: 8,
        flex: 1,
        backgroundColor: '#1089FF'
    },
    searchresultsview: {
        paddingRight: 8,
        paddingLeft: 8,
        flex: 2,
        backgroundColor: '#eeeeee'
    },
    textinput: {
        height: 50,
        marginTop: -10,
        marginBottom: 10,
        borderColor: '#23374D',
        borderBottomWidth: 1, 
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 45,
        marginLeft: 45,
        borderRadius: 20
    },
    button_text: {
        fontSize: 16,
        color: '#23374d'
    },
    label: {
        fontSize: 16,
        marginTop: 5,
        color: '#23374D',
        fontWeight: '900'
    } 
})

export default Search