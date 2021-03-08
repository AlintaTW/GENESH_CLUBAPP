import * as React from 'react'
import PageWrapper from '../../components/page-wrapper'
import BannerCarousel from '../../components/banner-carousel'

const Home = ({ navigation, user }) => {
  return (
    <PageWrapper>
      <BannerCarousel />
    </PageWrapper>
  )
}

export default Home
