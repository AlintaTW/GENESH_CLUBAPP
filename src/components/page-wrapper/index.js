import { useTheme } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'
import pageWrapperStyle from './style'

const PageWrapper = ({ children }) => {
  const { colors } = useTheme()
  const MyStatusBar = ({ backgroundColor, ...props }) => (
    <View style={[pageWrapperStyle.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor={backgroundColor}
          {...props}
        />
      </SafeAreaView>
    </View>
  )

  return (
    <>
      <MyStatusBar backgroundColor={colors.primary} />
      <SafeAreaView>{children}</SafeAreaView>
    </>
  )
}

export default PageWrapper
