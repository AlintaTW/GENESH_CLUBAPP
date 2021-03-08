import { DefaultTheme } from '@react-navigation/native'

export const AppColor = {
  primary: '#F48120',
  danger: '#EC1C24'
}

const GeneshTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: AppColor.primary,
    danger: AppColor.danger
  },
  geneshColor: {
    tabDisable: '#00000061'
  }
}

export default GeneshTheme
