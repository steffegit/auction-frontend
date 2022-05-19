import React from 'react'
import FeaturedItemCard from '../Cards/FeaturedItemCard'

function ContainerFeaturedItems({ data }) {
  return (
    <div>
      <div className="flex items-end justify-between pt-12 px-3 text-3xl sm:text-5xl font-bold mb-2 sm:mb-6">
        <div>Featured Auctions</div>
        <a className="text-lg sm:text-lg hover:underline">See all</a>
      </div>

      <div className="hidden sm:flex flex-row sm:justify-center sm:items-center sm:overflow-none sm:scrollbar-hide overflow-x-scroll scrollbar-show space-x-2 sm:space-x-4 pl-1">
        {data &&
          data?.slice(0, 4)?.map((_, idx) => (
            <div key={data[idx].id}>
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
            </div>
          ))}
      </div>

      <div className="sm:hidden flex flex-row sm:justify-center sm:items-center sm:overflow-none sm:scrollbar-hide overflow-x-scroll scrollbar-show space-x-2 sm:space-x-4 pl-1">
        {data &&
          data?.map((_, idx) => (
            <div key={data[idx].id}>
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
            </div>
          ))}
      </div>
    </div>
  )
}

export default ContainerFeaturedItems
