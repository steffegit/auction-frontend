import React from 'react'

function SoldItem({
  itemid,
  title,
  price,
  days,
  hours,
  km,
  type,
  classic,
  pic,
}) {
  return (
    <div className="flex flex-col bg-bgColor border border-gray-300 rounded-lg shadow-md p-5 space-y-4 hover:scale-105 transition-all">
      <div className="flex justify-center items-center pt-1">
        <a href={`/bids/${itemid}`} className="relative">
          <img
            src={pic}
            alt="placeholder"
            className="w-[14rem] h-[6rem] sm:w-[24rem] sm:h-[12rem] object-cover rounded-sm"
          />
          <div className="absolute text-black font-extrabold px-2 py-1 rounded-lg bg-accent scale-[65%] top-0 -right-1 sm:scale-75 sm:top-1 sm:right-0">
            <span>SOLD</span>
          </div>
        </a>
      </div>
      <div>
        <a href={`/bids/${itemid}`} className="hover:bg-gray-300">
          <div className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
            {title}
          </div>
        </a>
        <p className="text-sm font-light">
          Sold for{' '}
          <strong>
            <em>{price}</em>
          </strong>
        </p>
      </div>
    </div>
  )
}

export default SoldItem
