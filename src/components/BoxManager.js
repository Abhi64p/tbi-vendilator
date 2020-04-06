import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Box from './Box'

class BoxManager extends Component {

    constructor(props) {
        super(props)
        this.state = {
            v1: this.getRandomInt(18, 23),
            v2: this.getRandomInt(445, 452)
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.updateValue, 2000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <>
                <View style={styles.boxRow}>
                    <Box title='Pressure' value='2' />
                    <Box title='Flow' value='0' />
                </View>
                <View style={styles.boxRow}>
                    <Box title='TH' value='0' />
                    <Box title='BPM' value='0' />
                </View>
                <View style={styles.boxRow}>
                    <Box title='Volume' value='4' />
                    <Box title='PEEP' value='2' />
                </View>
                <View style={styles.boxRow}>
                    <Box title='IE' value='0' />
                    <Box title='PLIMIT' value='29' />
                </View>
            </>
        )
    }

    getRandomInt = (min, max) => {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min)) + min
    }

    updateValue = () => {
        this.setState({
            v1: this.getRandomInt(18, 23),
            v2: this.getRandomInt(445, 452)
        })
    }

}

const styles = StyleSheet.create({
    boxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 20
    }
})


export default BoxManager