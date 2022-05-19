import React from 'react'

function SoldItem({ title, price, days, hours, km, type, classic, pic }) {
  return (
    <div className="flex flex-col border border-gray-300 rounded-lg shadow-md p-5 space-y-4">
      <div className="flex justify-center items-center pt-1">
        <div className="relative">
          <img
            src={pic}
            alt="placeholder"
            className="w-[14rem] h-[6rem] sm:w-[24rem] sm:h-[12rem] object-cover rounded-sm"
          />
          <div className="absolute text-black font-extrabold px-2 py-1 rounded-lg bg-accent scale-[65%] top-0 -right-1 sm:scale-75 sm:top-1 sm:right-0">
            <span>SOLD</span>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </h1>
        <p className="text-sm font-light">
          Sold at{' '}
          <strong>
            <em>{price}</em>
          </strong>
        </p>
      </div>
    </div>
  )
}

export default SoldItem
