import React, { useEffect, useContext } from 'react'

import { SiteContext } from '../components/Context/Context'
import { useParams } from 'react-router-dom'

import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

function Bid() {
  let { id } = useParams()
  const { getBidData, bid } = useContext(SiteContext)

  useEffect(() => {
    getBidData(id)
    // eslint-disable-next-line
  }, [])

  return (
    <div className="flex flex-col sm:flex-row max-w-5xl mx-auto p-5 space-y-4 sm:space-x-6 sm:space-y-0">
      <div className="w-full sm:w-1/2 shadow-lg">
        <Swiper
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <img
              src={bid?.pic}
              alt="bid1"
              className="w-full h-full object-cover rounded-sm"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={bid?.pic2}
              alt="bid2"
              className="w-full h-full object-cover rounded-sm"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full h-full rounded-sm space-y-8">
        <div>
          <div className="text-4xl font-semibold">{bid?.title}</div>
          <a href="#viewaudi" className="text-lg font-light hover:underline">
            {bid?.brand} cars
          </a>
        </div>
        <div className="">
          <div className="text-2xl text-red-700 font-medium">{bid?.price}</div>
          <div className="pb-4 border-b border-b-gray-300">Current Bid</div>
          <div className="space-y-4">
            <button
              type="button"
              className="mt-10 p-3 w-full h-full bg-red-700 text-white rounded-md font-medium hover:bg-red-800 transition-all"
            >
              <div className="flex items-center justify-center space-x-2">
                <p>Bid</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
            <button className="p-3 w-full h-full border border-primary text-black rounded-md font-medium hover:bg-blue-50 transition-all">
              <div className="flex items-center justify-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p>Contact Seller</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bid
