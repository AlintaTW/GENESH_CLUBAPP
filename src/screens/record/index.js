import React from 'react'
import { Text, View } from 'react-native'
import PageWrapper from '../../components/page-wrapper'
import recordStyle from './style'

const Record = ({ navigation }) => {
  return (
    <PageWrapper>
      <View style={recordStyle.container}>
        <Text>Record Page</Text>
      </View>
    </PageWrapper>
  )
}

export default Record
