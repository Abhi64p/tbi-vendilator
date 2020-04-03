import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Box extends Component {
    render() {
        return (
            <View style={styles.boxView}>
                <Text style={styles.boxTitle}>{this.props.title}</Text>
                <View style={styles.boxInnerView}>
                    <Text style={styles.boxValue}>{this.props.value}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    boxView: {
        backgroundColor: '#424242',
        height: 150,
        width: 150,
        borderRadius: 15,
        padding: 20,
        elevation: 10
    },
    boxInnerView: {
        alignItems: 'center',
        marginTop: 15
    },
    boxTitle: {
        color: '#9e9e9e',
        fontSize: 18
    },
    boxValue: {
        color: '#bdbdbd',
        fontSize: 25
    }
})

export default Box