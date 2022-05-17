import React from 'react'
import SoldItemCard from '../Cards/SoldItemCard'

function ContainerSoldItem({ data }) {
  return (
    <div className="flex flex-col mt-2 p-5 space-y-8">
      <div className="flex items-center justify-end">
        <h1 className="text-3xl sm:text-5xl font-bold">Sold Items</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
        {data &&
          data.slice(0, 6)?.map((_, idx) => (
            <div key={data[idx].id}>
              <SoldItemCard
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

export default ContainerSoldItem
