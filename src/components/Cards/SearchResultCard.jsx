import React from 'react'

function SearchResultCard({ data }) {
  return (
    <div className="w-full p-5 bg-bgColor rounded-md space-y-2 border shadow-md">
      <div>
        <a href={`/bids/${data?.id}`}>
          <img
            src={data?.pic}
            alt="car-pic"
            className="rounded-sm w-full h-full aspect-video object-cover"
          />
        </a>
      </div>
      <div>
        <a className="font-bold sm:text-lg" href={`/bids/${data?.id}`}>
          {data?.title}
        </a>
        <div className="">Price: {data?.price}</div>
      </div>
    </div>
  )
}

export default SearchResultCard
