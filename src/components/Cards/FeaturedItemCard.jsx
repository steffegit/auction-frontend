import React from 'react'

function ItemCard({ id, title, price, days, hours, km, type, classic, pic }) {
  return (
    <div className="flex flex-col p-5 h-max w-[235px] bg-bgColor border border-gray-300 space-y-6 rounded-lg shadow-md">
      <a
        href={`/bids/${id}`}
        className="flex justify-center items-center pt-1 -mb-2"
      >
        <img
          src={pic}
          alt="car-pic"
          className="rounded-sm w-[20rem] h-[10rem] object-cover"
        />
      </a>
      {/* DESCRIPTION */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <a
            href={`bids/${id}`}
            className="font-semibold whitespace-nowrap overflow-hidden text-ellipsis hover:bg-gray-300 "
          >
            {title}
          </a>
          <a
            href={`/bids/${id}`}
            className="p-2 px-3 -mr-1 text-sm bg-accent rounded-full leading-3 font-semibold shadow-sm scale-90 hover:underline"
          >
            {price}
          </a>
        </div>
        <div className="flex justify-between items-center mt-4 w-full text-sm">
          <div className="flex flex-col items-center justify-center px-3 py-1 border border-black border-opacity-25 rounded-md bg-textColor text-sm">
            <div className=" font-mono text-3xl">{days}</div>
            <p className="italic">days</p>
          </div>
          <div className="flex flex-col items-center justify-center px-3 py-1 border border-black border-opacity-25 rounded-md bg-textColor text-sm">
            <div className=" font-mono text-3xl">{hours}</div>
            <p className="italic">hours</p>
          </div>
          <div className="flex flex-col items-center justify-center px-3 py-1 border border-black border-opacity-25 rounded-md bg-textColor text-sm">
            <div className=" font-mono text-3xl">0</div>
            <p className="italic">mins</p>
          </div>
        </div>
      </div>
      {/* BID BUTTON*/}
      <a href={`/bids/${id}`}>
        <button className="w-full p-3 rounded-md text-white bg-gradient-to-r from-purple-700 to-indigo-700 sm:py-2 sm:px-6 focus:outline focus:outline-blue-500 focus:outline-offset-2 shadow-md shadow-purple-300 -mt-2 transition-all hover:scale-105">
          <div>Place a bid</div>
        </button>
      </a>
    </div>
  )
}

export default ItemCard
