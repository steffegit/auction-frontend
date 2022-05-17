import React from 'react'
import FeaturedItemCard from '../Cards/FeaturedItemCard'

import { Autoplay, FreeMode, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

function ContainerFeaturedItems({ data }) {
  return (
    <div>
      <div className="flex items-end justify-between pt-10 px-5 text-3xl sm:text-5xl font-bold mb-2 sm:mb-6">
        <div>Featured Auctions</div>
        <a className="text-lg sm:text-lg hover:underline">See all</a>
      </div>

      <Swiper
        direction={'horizontal'}
        slidesPerView={4}
        spaceBetween={140}
        mousewheel={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, FreeMode, Mousewheel]}
      >
        {data &&
          data?.map((_, idx) => (
            <SwiperSlide key={data[idx].id}>
              <FeaturedItemCard
                title={data[idx].title}
                price={data[idx].price}
                days={data[idx].days}
                hours={data[idx].hours}
                km={data[idx].km}
                pic={data[idx].pic}
                type={data[idx].type}
                classic={data[idx].classic}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default ContainerFeaturedItems
