import React, { Component } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, Text} from 'react-native'

import Graph1 from '../components/Graph1'
import Graph2 from '../components/Graph2'
import BoxManager from '../components/BoxManager'

class Main extends Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='#212121'
                />
                <ScrollView
                    style={{ height: '100%', width: '100%' }}
                    contentContainerStyle={styles.scrollViewContentStyle}
                >
                    <Text style={styles.heading}>Pressure</Text>
                    <View style={styles.graphStyle}><Graph1 /></View>
                    <Text style={[styles.heading, {marginTop: 20}]}>Volume</Text>
                    <View style={styles.graphStyle}><Graph2 /></View>
                    <BoxManager />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#212121',
        flex: 1,
        alignItems: 'center',
        paddingTop: 10
    },
    scrollViewContentStyle: {
        paddingTop: 10,
        paddingBottom: 10
    },
    heading:{
        marginLeft: 20,
        marginBottom: 10,
        color: 'white', 
        fontSize: 18
    },
    graphStyle: {
        alignItems: 'center'
    }
})

export default Main