import FeaturedItemCard from '../components/FeaturedItemCard'
import TopBar from '../components/TopBar'
import Ads from '../components/Ads'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Footer from '../components/Footer'
import ContainerSoldItem from '../components/ContainerSoldItems'
import ContainerFeaturedItems from '../components/ContainerFeaturedItems'

function Home() {
  return (
    <div className="flex flex-col mx-auto overflow-hidden">
      <TopBar />
      <Ads />
      {/* MOBILE ONLY FOR NOW */}
      <ContainerFeaturedItems />
      <ContainerSoldItem />
      <Footer />
    </div>
  )
}

export default Home
