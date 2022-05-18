import React from 'react'
import FeaturedItemCard from '../Cards/FeaturedItemCard'

// const scrollContainer = document.querySelector('#scrollContainer')
// scrollContainer.addEventListener('wheel', (e) => {
//   e.preventDefault()
//   scrollContainer.scrollLeft += e.deltaY
// })

function ContainerFeaturedItems({ data }) {
  return (
    <div>
      <div className="flex items-end justify-between pt-10 px-5 text-3xl sm:text-5xl font-bold mb-2 sm:mb-6">
        <div>Featured Auctions</div>
        <a className="text-lg sm:text-lg hover:underline">See all</a>
      </div>

      <div
        id="scrollContainer"
        className="flex flex-row overflow-x-scroll scrollbar-show -space-x-2"
      >
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
