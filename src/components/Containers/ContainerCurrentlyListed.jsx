import React from 'react'
import CurrentlyListedCard from '../Cards/CurrentlyListedCard'

function ContainerCurrentlyListed({ data }) {
  return (
    <div>
      <div className="flex flex-col p-5 pb-0 mt-10 space-y-1">
        <div className="font-bold text-center text-3xl sm:text-5xl mb-5 sm:mb-10">
          Currently Listed
        </div>
        {data &&
          data.slice(0, 5)?.map((_, idx) => (
            <div key={data[idx].id}>
              <CurrentlyListedCard
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
        <div className="w-full pt-5">
          <button
            type="button"
            className="w-full p-2 text-center ring-2 rounded-md font-medium text-xl shadow-sm hover:bg-primary  hover:text-white transition-all focus:ring-4 focus:ring-secondary ring-primary"
          >
            See all listed items
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContainerCurrentlyListed
