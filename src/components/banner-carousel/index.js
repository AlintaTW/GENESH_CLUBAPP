import * as React from 'react'
import { ImageBackground, Text, useWindowDimensions, View } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import bannerCarouselStyle from './style'

const BannerCarousel = props => {
  let bannerCarousel = React.useRef(null)
  const [bannerItems, setBanners] = React.useState([
    { key: '1' },
    { key: '2' },
    { key: '3' },
    { key: '4' },
    { key: '5' }
  ])
  const [activeDot, setActiveDot] = React.useState(0)
  const { width } = useWindowDimensions()
  const { bounce } = props

  const renderBannerItem = ({ item, index }) => {
    return (
      <ImageBackground style={bannerCarouselStyle.itemWrap} key={index}>
        <Text style={bannerCarouselStyle.itemLabel}>近距離 美語互動</Text>
      </ImageBackground>
    )
  }

  const onChangeSlide = React.useCallback(idx => {
    setActiveDot(idx)
  }, [])

  return (
    <View style={bannerCarouselStyle.wrapper}>
      <Carousel
        ref={bannerCarousel}
        data={bannerItems}
        renderItem={renderBannerItem}
        sliderWidth={width}
        itemWidth={width}
        sliderHeight={200}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        firstItem={0}
        onSnapToItem={onChangeSlide}
        bounces={bounce ? bounce : false}
      />
      <Pagination
        dotsLength={bannerItems.length}
        dotStyle={bannerCarouselStyle.pageDotActive}
        inactiveDotStyle={bannerCarouselStyle.pageDot}
        activeDotIndex={activeDot}
        inactiveDotScale={1}
        inactiveDotOpacity={1}
        containerStyle={bannerCarouselStyle.pagination}
      />
    </View>
  )
}

export default BannerCarousel
