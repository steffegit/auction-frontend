import React from 'react'

function ItemCard({ title, description, imgLink }) {
  return (
    <div className="flex flex-col p-5 m-5 h-max border border-gray-300 space-y-6 rounded-lg shadow-md">
      <div className="flex justify-center items-center pt-1">
        <img src={imgLink} alt="car-pic" className="rounded-sm" />
      </div>
      {/* DESCRIPTION */}
      <div>
        <h1 className="text-3xl font-semibold border-b mb-4">{title}</h1>
        <p>{description}</p>
      </div>
      {/* BID BUTTON*/}
      <div>
        {/* TODO:  CHANGE THE COLOR OF THE FOCUS COMPONENT */}
        <button
          type="button"
          className="w-full p-4 rounded-md text-white bg-gradient-to-r from-blue-700 to-pink-400 sm:p-2 sm:w-max focus:outline focus:outline-blue-500 focus:outline-offset-2 shadow-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ItemCard
