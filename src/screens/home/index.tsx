import { Text, View } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../../components/app/routes/Stack/stack.model'

interface Props extends StackScreenProps<RootStackParams, 'Home'> {}

const Home = (props: Props) => {
  console.log(props)
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home

// const styles = StyleSheet.create({})
