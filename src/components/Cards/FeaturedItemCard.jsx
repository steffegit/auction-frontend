import React from 'react'

function ItemCard({ title, price, days, hours, km, type, classic, pic }) {
  return (
    <div className="flex flex-col p-5 m-2 h-max w-[275px] border border-gray-300 space-y-6 rounded-lg shadow-md">
      <div className="flex justify-center items-center pt-1 -mb-2">
        <img
          src={pic}
          alt="car-pic"
          className="rounded-sm w-[20rem] h-[10rem] object-cover"
        />
      </div>
      {/* DESCRIPTION */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis ">
            {title}
          </p>
          <span className="p-2 px-3 text-sm bg-orange-400 rounded-full leading-3 font-semibold shadow-sm">
            {price}
          </span>
        </div>
        <div className="flex justify-between items-center mt-6 w-full text-sm">
          <div className="flex flex-col items-center justify-center px-4 py-2 border border-black rounded-sm">
            <div className=" font-mono text-3xl">{days}</div>
            <p className="italic">days</p>
          </div>
          <div className="flex flex-col items-center justify-center px-4 py-2 border border-black rounded-sm">
            <div className=" font-mono text-3xl">{hours}</div>
            <p className="italic">hours</p>
          </div>
          <div className="flex flex-col items-center justify-center px-4 py-2 border border-black rounded-sm">
            <div className=" font-mono text-3xl">0</div>
            <p className="italic">mins</p>
          </div>
        </div>
      </div>
      {/* BID BUTTON*/}
      <div>
        {/* TODO:  CHANGE THE COLOR OF THE FOCUS COMPONENT */}
        <button
          type="button"
          className="w-full p-3 rounded-md text-white bg-gradient-to-r from-blue-700 to-pink-400 sm:py-2 sm:px-6 focus:outline focus:outline-blue-500 focus:outline-offset-2 shadow-md"
        >
          Place a bid
        </button>
      </div>
    </div>
  )
}

export default ItemCard
