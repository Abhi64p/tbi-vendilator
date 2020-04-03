import React, { Component } from 'react'
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native'

import Graph1 from '../components/Graph1'
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
                    <View style={{ alignSelf: 'center' }}><Graph1 /></View>
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
    }
})

export default Main