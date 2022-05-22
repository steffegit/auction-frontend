import React from 'react'
import CurrentlyListedCard from '../Cards/CurrentlyListedCard'

function ContainerCurrentlyListed({ data }) {
  return (
    <div>
      <div className="flex flex-col p-3 py-5 pb-0 space-y-1 justify-center">
        <div className=" font-bold text-center text-3xl mb-5 sm:mb-10 border-y-2 py-10 bg-gray-100 rounded-sm -mx-3">
          Currently Listed
        </div>
        {data &&
          data.slice(0, 5)?.map((_, idx) => (
            <div key={data[idx].id}>
              <CurrentlyListedCard
                id={data[idx].id}
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
        <div className="flex justify-center pt-5">
          <button
            type="button"
            className="w-2/3 p-2 text-center ring-2 rounded-md font-medium text-xl shadow-sm hover:bg-primary  hover:text-white transition-all focus:ring-4 focus:ring-secondary ring-primary"
          >
            See all listed items
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContainerCurrentlyListed
