import React from 'react'

function CurrentlyListedCard({
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
    <div className="flex py-2 px-1 border border-gray-300 mb-2 rounded-md justify-between">
      <div className="flex space-x-2">
        <div>
          <img src={pic} className="w-12 h-10 rounded-md object-cover" />
        </div>
        <div className="flex flex-col items-start">
          <div className="w-max font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
            {title}
          </div>
          <div className="text-xs">
            Listed for <strong>{price}</strong>
          </div>
        </div>
      </div>
      <a
        href="#view"
        className="flex w-20 h-10 justify-center items-center bg-sky-700 text-white rounded-full shadow-md scale-90 hover:w-[6rem] transition-all"
      >
        View
      </a>
    </div>
  )
}

export default CurrentlyListedCard
