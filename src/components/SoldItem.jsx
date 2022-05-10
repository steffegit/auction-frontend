import React from 'react'

function SoldItem() {
  return (
    <div className="flex flex-col border border-gray-300 rounded-lg shadow-md p-5 space-y-2">
      <div className="flex justify-center items-center pt-1">
        <div className="relative">
          <img
            src="https://picsum.photos/200"
            alt="placeholder"
            className=" rounded-sm"
          />
          <div className="absolute text-black font-extrabold px-2 py-1 rounded-lg bg-orange-400 scale-75 top-1 right-0">
            <span>SOLD</span>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold">Title</h1>
        <p className="text-sm font-light">Sold at $0.00</p>
      </div>
    </div>
  )
}

export default SoldItem
