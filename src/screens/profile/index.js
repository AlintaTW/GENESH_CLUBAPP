import React from 'react'
import { Text, View } from 'react-native'
import PageWrapper from '../../components/page-wrapper'
import profileStyle from './style'

const Profile = ({ navigation }) => {
  return (
    <PageWrapper>
      <View style={profileStyle.container}>
        <Text>Profile Page</Text>
      </View>
    </PageWrapper>
  )
}

export default Profile
