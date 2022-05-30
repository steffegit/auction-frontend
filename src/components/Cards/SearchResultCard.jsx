import React, { useState } from 'react'

function SearchResultCard({ data }) {
  const [hover, setHover] = useState(false)

  return (
    <div
      className="w-full rounded-md space-y-2 mb-6"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="bg-black rounded-sm">
        <a className="relative rounded-sm" href={`/bids/${data?.id}`}>
          <img
            src={data?.pic}
            alt="car-pic"
            className={`rounded-sm w-full h-full aspect-video object-cover ${
              hover ? 'opacity-75' : 'opacity-100'
            } transition-all`}
          />
          {data?.sold ? (
            <div className="absolute bottom-2 left-2 p-1 px-2 text-sm bg-black text-white rounded-md bg-opacity-75">
              Sold for {data?.price}
            </div>
          ) : (
            <div className="absolute bottom-2 left-2 p-1 px-2 text-sm bg-slate-50 rounded-md bg-opacity-75">
              Bid to {data?.price}
            </div>
          )}
        </a>
      </div>
      <div>
        <a className="font-bold sm:text-lg" href={`/bids/${data?.id}`}>
          {data?.title}
        </a>
        <div className="text-sm">
          ~35,100 Miles, 450-hp W12, 1 Owner Until 2021, AWD
        </div>
        {data?.sold ? (
          <div className="text-sm text-gray-600">Ended 4/22/22</div>
        ) : null}
      </div>
    </div>
  )
}

export default SearchResultCard
