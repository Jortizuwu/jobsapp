import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { RootStackParams } from './stack.model'
import Home from '../../../../screens/home'

const Stack = createStackNavigator<RootStackParams>()

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'red',
          flex: 1,
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default MyStack
