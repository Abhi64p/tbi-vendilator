import React, { Component } from 'react'
import { View, Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

const screenWidth = Dimensions.get("window").width

class Graph1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            datas: [
                [-150, -140, -140, -150, -143, 0, 0, 0, -20, 0],
                [-140, -140, -150, -143, 0, 0, 0, -20, 0, -150],
                [-140, -150, -143, 0, 0, 0, -20, 0, -150, -140],
                [-150, -143, 0, 0, 0, -20, 0, -150, -140, -140],
                [-143, 0, 0, 0, -20, 0, -150, -140, -140, -150],
                [0, 0, 0, -20, 0, -150, -140, -140, -150, -143],
                [0, 0, -20, 0, -150, -140, -140, -150, -143, 0],
                [0, -20, 0, -150, -140, -140, -150, -143, 0, 0],
                [-20, 0, -150, -140, -140, -150, -143, 0, 0, 0],
                [0, -150, -140, -140, -150, -143, 0, 0, 0, -20]
            ],
            index: 0,
            oldIndex: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.moveIndex, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <View
                style={{
                    backgroundColor: 'black', paddingBottom: 10,
                    width: screenWidth - 20, height: 200, paddingTop: 30, borderRadius: 15
                }}
            >
                <LineChart
                    data={{
                        datasets: [
                            {
                                data: this.state.datas[this.state.index]
                            }
                        ]
                    }}
                    width={screenWidth - 40}
                    height={160}
                    chartConfig={chartConfig}
                    bezier={true}
                    withDots={false}
                    withVerticalLabels={false}
                    yAxisInterval={2}
                    style={{ borderRadius: 15 }}
                />
            </View>
        )
    }

    moveIndex = () => {
        this.setState({ index: (this.state.index + 1) % 10 })
    }
}

const chartConfig = {
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2,
    decimalPlaces: 0
}

export default Graph1
