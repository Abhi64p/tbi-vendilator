import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'

import Main from './src/screens/Main'

const Stack = createStackNavigator();

class App extends Component {

  render() {
    return (
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='main' headerMode='none'>
            <Stack.Screen name='main' component={Main} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    )
  }

}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
}

const styles = StyleSheet.create({
  defaultFontFamily: {
    fontFamily: 'lucida grande'
  }
})

const oldRender = Text.render
Text.render = function (...args) {
  const origin = oldRender.call(this, ...args)
  return React.cloneElement(origin, {
    style: [styles.defaultFontFamily, origin.props.style]
  })
}

export default App