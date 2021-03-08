import { StyleSheet } from 'react-native'
import { AppColor } from '../../config/theme'

const bannerCarouselStyle = StyleSheet.create({
  wrapper: {
    height: 240
  },
  itemWrap: {
    flex: 1,
    backgroundColor: '#F4812080',
    padding: 16,
    justifyContent: 'center'
  },
  itemLabel: {
    fontSize: 44,
    color: 'white',
    width: '47%'
  },
  pageDot: {
    width: 8,
    height: 4,
    borderRadius: 2,
    marginHorizontal: -3,
    backgroundColor: 'white'
  },
  pageDotActive: {
    width: 16,
    height: 4,
    borderRadius: 2,
    marginHorizontal: -3,
    backgroundColor: AppColor.primary
  },
  pagination: { paddingTop: 10, paddingBottom: 10 }
})

export default bannerCarouselStyle
