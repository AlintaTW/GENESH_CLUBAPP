import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from '@react-navigation/native'
import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  TabIconFavorite,
  TabIconHome,
  TabIconNotification,
  TabIconProfile,
  TabIconRecord
} from '../config/app.icon'
import Favorite from '../screens/favorite'
import Home from '../screens/home'
import Notification from '../screens/notifications'
import Profile from '../screens/profile'
import Record from '../screens/record'

const Tab = createBottomTabNavigator()

const TAB = {
  HOME: 'Home',
  RECORD: 'Record',
  FAVORITE: 'Favorite',
  NOTIFICATION: 'Notifications',
  PROFILE: 'Profile'
}

const styles = StyleSheet.create({
  viewActive: {
    backgroundColor: 'white',
    height: 60,
    width: 60,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  iconActive: { marginBottom: 0 }
})

const TabsNavigation = () => {
  const { colors, geneshColor } = useTheme()
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = ''
          if (route.name === TAB.HOME) {
            return focused ? (
              <View style={styles.viewActive}>
                <TabIconHome width={64} height={32} style={styles.iconActive} />
              </View>
            ) : (
              <TabIconHome width={48} height={24} />
            )
          } else if (route.name === TAB.PROFILE) {
            return focused ? (
              <View style={styles.viewActive}>
                <TabIconProfile
                  width={64}
                  height={32}
                  style={styles.iconActive}
                />
              </View>
            ) : (
              <TabIconProfile width={48} height={24} />
            )
          } else if (route.name === TAB.NOTIFICATION) {
            return focused ? (
              <View style={styles.viewActive}>
                <TabIconNotification
                  width={64}
                  height={32}
                  style={styles.iconActive}
                />
              </View>
            ) : (
              <TabIconNotification width={48} height={24} />
            )
          } else if (route.name === TAB.RECORD) {
            return focused ? (
              <View style={styles.viewActive}>
                <TabIconRecord
                  width={64}
                  height={32}
                  style={styles.iconActive}
                />
              </View>
            ) : (
              <TabIconRecord width={48} height={24} />
            )
          } else if (route.name === TAB.FAVORITE) {
            return focused ? (
              <View style={styles.viewActive}>
                <TabIconFavorite
                  width={64}
                  height={32}
                  style={styles.iconActive}
                />
              </View>
            ) : (
              <TabIconFavorite width={48} height={24} />
            )
          }
          // You can return any component that you like here!
          return (
            <Icon name={iconName} type="Ionicons" size={size} color={color} />
          )
        }
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: geneshColor.tabDisable
      }}>
      <Tab.Screen name={TAB.HOME} component={Home} />
      <Tab.Screen name={TAB.RECORD} component={Record} />
      <Tab.Screen name={TAB.FAVORITE} component={Favorite} />
      <Tab.Screen name={TAB.NOTIFICATION} component={Notification} />
      <Tab.Screen name={TAB.PROFILE} component={Profile} />
    </Tab.Navigator>
  )
}

export default TabsNavigation
