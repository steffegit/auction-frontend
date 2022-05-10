import ItemCard from '../components/ItemCard'
import TopBar from '../components/TopBar'
import Ads from '../components/Ads'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Footer from '../components/Footer'

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

        <div className="flex flex-row overflow-x-scroll scrollbar-hide -space-x-4">
          <div>
            <ItemCard
              title={'Volkswagen Golf'}
              description={
                'Audio-Navigationssystem Discover Pro (Touchscreen, CD/DVD, MP3, Festplattenspeicher, Bluetooth), Fahrassistenz-Paket, Fahrassistenz-System: Adaptive Fahrwerksregelung (DCC) '
              }
              imgLink={
                'https://img.classistatic.de/api/v1/mo-prod/images/0b/0b0146c8-773e-4e6e-bde8-abddda4ca1dc?rule=mo-640.jpg'
              }
            />
          </div>
          <div>
            <ItemCard
              title={'Volkswagen Golf'}
              description={
                'Audio-Navigationssystem Discover Pro (Touchscreen, CD/DVD, MP3, Festplattenspeicher, Bluetooth), Fahrassistenz-Paket, Fahrassistenz-System: Adaptive Fahrwerksregelung (DCC) '
              }
              imgLink={
                'https://img.classistatic.de/api/v1/mo-prod/images/0b/0b0146c8-773e-4e6e-bde8-abddda4ca1dc?rule=mo-640.jpg'
              }
            />
          </div>
          <div>
            <ItemCard
              title={'Volkswagen Golf'}
              description={
                'Audio-Navigationssystem Discover Pro (Touchscreen, CD/DVD, MP3, Festplattenspeicher, Bluetooth), Fahrassistenz-Paket, Fahrassistenz-System: Adaptive Fahrwerksregelung (DCC) '
              }
              imgLink={
                'https://img.classistatic.de/api/v1/mo-prod/images/0b/0b0146c8-773e-4e6e-bde8-abddda4ca1dc?rule=mo-640.jpg'
              }
            />
          </div>
          <div>
            <ItemCard
              title={'Volkswagen Golf'}
              description={
                'Audio-Navigationssystem Discover Pro (Touchscreen, CD/DVD, MP3, Festplattenspeicher, Bluetooth), Fahrassistenz-Paket, Fahrassistenz-System: Adaptive Fahrwerksregelung (DCC) '
              }
              imgLink={
                'https://img.classistatic.de/api/v1/mo-prod/images/0b/0b0146c8-773e-4e6e-bde8-abddda4ca1dc?rule=mo-640.jpg'
              }
            />
          </div>
        </div>

        {/* <Swiper>
          <SwiperSlide>
            <ItemCard
              title={'Volkswagen Golf'}
              description={
                'Audio-Navigationssystem Discover Pro (Touchscreen, CD/DVD, MP3, Festplattenspeicher, Bluetooth), Fahrassistenz-Paket, Fahrassistenz-System: Adaptive Fahrwerksregelung (DCC) '
              }
              imgLink={
                'https://img.classistatic.de/api/v1/mo-prod/images/0b/0b0146c8-773e-4e6e-bde8-abddda4ca1dc?rule=mo-640.jpg'
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <ItemCard
              title={'Volkswagen Golf'}
              description={
                'Audio-Navigationssystem Discover Pro (Touchscreen, CD/DVD, MP3, Festplattenspeicher, Bluetooth), Fahrassistenz-Paket, Fahrassistenz-System: Adaptive Fahrwerksregelung (DCC) '
              }
              imgLink={
                'https://img.classistatic.de/api/v1/mo-prod/images/0b/0b0146c8-773e-4e6e-bde8-abddda4ca1dc?rule=mo-640.jpg'
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <ItemCard
              title={'Volkswagen Golf'}
              description={
                'Audio-Navigationssystem Discover Pro (Touchscreen, CD/DVD, MP3, Festplattenspeicher, Bluetooth), Fahrassistenz-Paket, Fahrassistenz-System: Adaptive Fahrwerksregelung (DCC) '
              }
              imgLink={
                'https://img.classistatic.de/api/v1/mo-prod/images/0b/0b0146c8-773e-4e6e-bde8-abddda4ca1dc?rule=mo-640.jpg'
              }
            />
          </SwiperSlide>
        </Swiper> */}
      </div>
      <Footer />
    </div>
  )
}

export default Home
