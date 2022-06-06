import React, { useEffect, useContext } from 'react'

import { SiteContext } from '../components/Context/Context'
import { useNavigate, useParams } from 'react-router-dom'

import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

function Bid() {
  let { id } = useParams()

  const { getBidData, bid } = useContext(SiteContext)
  const navigate = useNavigate()

  useEffect(() => {
    getBidData(id)
  })

  return (
    <>
      <div className="hidden sm:flex flex-col sm:flex-row max-w-7xl mx-auto p-5 space-y-4 sm:space-x-4 sm:space-y-0">
        <div className="w-full sm:w-2/3 space-y-4" id="container-left">
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
          <div className="w-full bg-white p-6 rounded-md space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div id="#firstrow">
                <div className="flex justify-between p-4 bg-sky-50 mb-2 rounded-md">
                  <div className="font-bold">Make</div>
                  <div>{bid?.brand}</div>
                </div>
                <div className="flex justify-between p-4 bg-sky-50 mb-2 rounded-md">
                  <div className="font-bold">Model</div>
                  <div>{bid?.title}</div>
                </div>
                <div className="flex justify-between p-4 bg-sky-50 mb-2 rounded-md">
                  <div className="font-bold">Location</div>
                  <div>New York</div>
                </div>
                <div className="flex justify-between p-4 bg-sky-50 mb-2 rounded-md">
                  <div className="font-bold">Fuel</div>
                  <div>Gasoline</div>
                </div>
              </div>
              <div id="#secondrow">
                <div className="flex justify-between p-4 bg-sky-50 mb-2 rounded-md">
                  <div className="font-bold">Mileage</div>
                  <div>{(bid?.km * 1000).toLocaleString()} km</div>
                </div>
                <div className="flex justify-between p-4 bg-sky-50 mb-2 rounded-md">
                  <div className="font-bold">Color</div>
                  <div>Red</div>
                </div>
                <div className="flex justify-between p-4 bg-sky-50 mb-2 rounded-md">
                  <div className="font-bold">Type</div>
                  <div>{bid?.type}</div>
                </div>
                <div className="flex justify-between p-4 bg-sky-50 mb-2 rounded-md">
                  <div className="font-bold">VIN</div>
                  <div>vinhere</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 h-max space-y-4" id="container-right">
          <div className="w-full h-full space-y-8 bg-white p-6 rounded-md">
            <div>
              <div className="text-2xl sm:text-4xl font-semibold">
                {bid?.title}
              </div>
              <a
                href={`/search?q=${bid?.brand}`}
                className="text-lg font-light hover:underline"
              >
                {bid?.brand} category
              </a>
            </div>
            <div>
              <div
                className={`text-2xl font-medium ${
                  !bid?.sold ? 'text-red-700' : 'text-green-600'
                }`}
              >
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
                  onClick={() => {
                    navigate(`/bid/${id}`)
                  }}
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
            <div className="font-bold uppercase">About Seller</div>
            <div className="flex space-x-4 items-start">
              <div>
                <a href="#seller">
                  <img
                    src="https://i.pravatar.cc/300"
                    alt="avatar"
                    className="w-16 h-16 rounded-full"
                  />
                </a>
              </div>
              <div className="text-xl flex flex-col">
                <a href="#seller" className="font-bold">
                  Austin
                </a>
                <a href="#seller">Evans</a>
              </div>
            </div>
            <div className="text-center">
              <a href="#sellerlistings" className="hover:underline">
                Seller has <strong>128</strong> current listings
              </a>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="text-center font-semibold">
                Seller's reputation
              </div>
              <div className="flex justify-center items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-400 fill-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-400 fill-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-400 fill-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-400 fill-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 opacity-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden columns-1 sm:columns-2 gap-3 max-w-7xl mx-auto space-y-3 pb-28">
        <div className="bg-white p-6 break-inside-avoid">
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
        <div className="bg-white break-inside-avoid">
          <div className="w-full h-full space-y-8 bg-white p-6 rounded-md">
            <div>
              <div className="text-2xl sm:text-4xl font-semibold">
                {bid?.title}
              </div>
              <a
                href="#viewaudi"
                className="text-lg font-light hover:underline"
              >
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
                  onClick={() => {
                    navigate(`/bid/${id}`)
                  }}
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
        </div>
        <div className="w-full bg-white p-6 rounded-md space-y-4">
          <div className="grid grid-cols-1">
            <div id="#firstrow">
              <div className="flex justify-between p-4 bg-sky-50 mb-2 rounded-md">
                <div className="font-bold">Make</div>
                <div>{bid?.brand}</div>
              </div>
              <div className="flex justify-between p-4 bg-sky-50 mb-2 rounded-md">
                <div className="font-bold">Model</div>
                <div>{bid?.title}</div>
              </div>
              <div className="flex justify-between p-4 bg-sky-50 mb-2 rounded-md">
                <div className="font-bold">Location</div>
                <div>New York</div>
              </div>
              <div className="flex justify-between p-4 bg-sky-50 mb-2 rounded-md">
                <div className="font-bold">Fuel</div>
                <div>Gasoline</div>
              </div>
            </div>
            <div id="#secondrow">
              <div className="flex justify-between p-4 bg-sky-50 mb-2 rounded-md">
                <div className="font-bold">Mileage</div>
                <div>{(bid?.km * 1000).toLocaleString()} km</div>
              </div>
              <div className="flex justify-between p-4 bg-sky-50 mb-2 rounded-md">
                <div className="font-bold">Color</div>
                <div>Red</div>
              </div>
              <div className="flex justify-between p-4 bg-sky-50 mb-2 rounded-md">
                <div className="font-bold">Type</div>
                <div>{bid?.type}</div>
              </div>
              <div className="flex justify-between p-4 bg-sky-50 mb-2 rounded-md">
                <div className="font-bold">VIN</div>
                <div>vinhere</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 space-y-4 break-inside-avoid">
          <div className="font-bold uppercase">About Seller</div>
          <div className="flex space-x-4 items-start">
            <div>
              <a href="#seller">
                <img
                  src="https://i.pravatar.cc/300"
                  alt="avatar"
                  className="w-16 h-16 rounded-full"
                />
              </a>
            </div>
            <div className="text-xl flex flex-col">
              <a href="#seller" className="font-bold">
                Austin
              </a>
              <a href="#seller">Evans</a>
            </div>
          </div>
          <div className="text-center">
            <a href="#sellerlistings" className="hover:underline">
              Seller has <strong>128</strong> current listings
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="text-center font-semibold">Seller's reputation</div>
            <div className="flex justify-center items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-400 fill-current"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-400 fill-current"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-400 fill-current"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-400 fill-current"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bid
