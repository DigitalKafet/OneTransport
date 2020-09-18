import React from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native'

class TransportItem extends React.Component {
    render() {
        const transport = this.props.transport
        return (
        <View style={styles.transportItem}>
            <View style={styles.mainInfoView}>
                <Text style={styles.transportName}>{transport.title}</Text>
                <Text style={styles.transportName}>Dans <Text style={{fontWeight: 'bold'}}>{transport.timeLeft}</Text></Text>
            </View>
            <View style={styles.timeStatusView}>
                <TouchableHighlight style={styles.timeStatus} onPress={() => {}}>
                    <Text></Text>
                </TouchableHighlight>
            </View>
        </View>
            
                
     
        )
    }
}

const styles = StyleSheet.create({
    transportItem: {
        flexDirection: 'row',
        marginTop: 15,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 15,
        paddingLeft: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 5
    },
    transportName: {
        color: '#23374d'
    },
    mainInfoView: {
        flex: 16
    },
    timeStatusView: {
        flex: 1
    },
    timeStatus: {
        backgroundColor: '#3eea27',
        borderRadius: 50,
        marginTop: 10,
        marginBottom: 5
    }
})

export default TransportItem