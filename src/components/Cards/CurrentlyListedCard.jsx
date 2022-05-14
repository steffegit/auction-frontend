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
    <div className="flex p-2 border border-gray-300 mb-2 rounded-md justify-between">
      <div className="flex space-x-2">
        <div>
          <img src={pic} className="w-12 h-10 rounded-md object-cover" />
        </div>
        <div className="flex flex-col items-start">
          <div className="w-max font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
            {title}
          </div>
          <div className="text-xs">Listed at 0:00 AM, 20 Feb 2022</div>
        </div>
      </div>
      <div className="flex w-20 justify-center items-center p-2 bg-sky-700 text-white rounded-md shadow-md scale-90">
        {price}
      </div>
    </div>
  )
}

export default CurrentlyListedCard
