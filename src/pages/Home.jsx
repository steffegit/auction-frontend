import ItemCard from '../components/ItemCard'
import TopBar from '../components/TopBar'
import Ads from '../components/Ads'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

function Home() {
  return (
    <div className="flex flex-col mx-auto overflow-hidden">
      <TopBar />
      <Ads />
      {/* MOBILE ONLY FOR NOW */}
      <div>
        <div className="flex pt-10 pl-5 text-xl font-bold">
          Swipe to view featured auctions...
        </div>
        <Swiper>
          <SwiperSlide>
            <ItemCard />
          </SwiperSlide>
          <SwiperSlide>
            <ItemCard />
          </SwiperSlide>
          <SwiperSlide>
            <ItemCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Home
