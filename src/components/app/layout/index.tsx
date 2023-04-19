import React from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native'

import Routes from '../routes'

const Layout = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#000' : '#fff',
  }

  return (
    <SafeAreaView style={{ ...backgroundStyle, ...styles.Container }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
      </ScrollView> */}
      <Routes />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 0,
    flex: 1,
  },
})

export default Layout
