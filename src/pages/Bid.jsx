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
    <div className="flex flex-col sm:flex-row max-w-7xl mx-auto p-5 space-y-4 sm:space-x-4 sm:space-y-0">
      <div className="w-full sm:w-2/3" id="container-left">
        <div className="w-full bg-white p-6 rounded-md">
          <Swiper
            pagination={true}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide>
              <img
                src={bid?.pic}
                alt="bid1"
                className="w-full h-full object-cover rounded-sm aspect-video"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={bid?.pic2}
                alt="bid2"
                className="w-full h-full object-cover rounded-sm aspect-video"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="w-full sm:w-1/2 h-max space-y-4" id="container-right">
        <div className="w-full h-full space-y-8 bg-white p-6 rounded-md">
          <div>
            <div className="text-2xl sm:text-4xl font-semibold">
              {bid?.title}
            </div>
            <a href="#viewaudi" className="text-lg font-light hover:underline">
              {bid?.brand} category
            </a>
          </div>
          <div>
            <div className="text-2xl text-red-700 font-medium">
              {bid?.price}
            </div>
            <div className="pb-4 border-b border-b-gray-300">
              {!bid?.sold ? 'Current Bid' : 'Sold for'}
            </div>
            <div className="space-y-4">
              <button
                type="button"
                disabled={bid?.sold}
                className="mt-10 p-3 w-full h-full bg-red-700 disabled:bg-green-700 text-white rounded-md font-medium hover:bg-red-800 transition-all"
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p>{!bid?.sold ? 'Bid on this' : 'Sold'}</p>
                </div>
              </button>
              <button className="p-3 w-full h-full border border-primary text-black rounded-md font-medium hover:bg-blue-50 transition-all">
                <div className="flex items-center justify-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
        <div className="w-full h-full space-y-8 bg-white p-6 rounded-md">
          <div className="font-bold uppercase">Localization</div>
          <div className="flex space-x-2 items-start">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="-space-y-1">
              <div className="font-bold">Houston,</div>
              <div>Texas</div>
            </div>
            <div>we'll put a map here</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bid
