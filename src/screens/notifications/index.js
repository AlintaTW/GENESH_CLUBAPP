import React from 'react'
import { Text, View } from 'react-native'
import PageWrapper from '../../components/page-wrapper'
import notificationStyle from './style'

const Notification = ({ navigation }) => {
  return (
    <PageWrapper>
      <View style={notificationStyle.container}>
        <Text>Notifications Page</Text>
      </View>
    </PageWrapper>
  )
}

export default Notification
