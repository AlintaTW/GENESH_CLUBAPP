import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import GeneshTheme from '../config/theme'
import TabsNavigation from './tabs-navigation'

const Stack = createStackNavigator()

const MainNavigation = () => {
  return (
    <NavigationContainer theme={GeneshTheme}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Main" component={TabsNavigation} />
        {/* add your another screen here using -> Stack.Screen */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
