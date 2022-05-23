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
    <div className="flex flex-col max-w-5xl mx-auto p-5">
      <div>
        <Swiper
          pagination={true}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <img
              src={bid?.pic}
              alt="bid1"
              className="w-[40rem] h-[10rem] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={bid?.pic2}
              alt="bid2"
              className="w-[40rem] h-[10rem] object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div>smth else</div>
    </div>
  )
}

export default Bid
