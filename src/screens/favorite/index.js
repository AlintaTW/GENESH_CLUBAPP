import React from 'react'
import { Text, View } from 'react-native'
import PageWrapper from '../../components/page-wrapper'
import favoriteStyle from './style'

const Favorite = ({ navigation }) => {
  return (
    <PageWrapper>
      <View style={favoriteStyle.container}>
        <Text>Favorite Page</Text>
      </View>
    </PageWrapper>
  )
}

export default Favorite
