import React, { useState } from 'react'

function Ads() {
  const [showFirst, setShowFirst] = useState(false)
  const [showSecond, setShowSecond] = useState(false)

  return (
    <div className="flex flex-col lg:flex-row sm:max-h-[300px] md:max-h-[600px] bg-indigo-700 space-y-1 sm:rounded-md sm:mx-4 sm:px-4 sm:py-4 overflow-hidden">
      <div className="flex font-bold sm:w-[200] p-5 pt-7 text-xl text-white justify-center text-center">
        Need some advice on what to bid? Need more info about your next shiny
        car? Talk to our representatives by using our SupportPlus Service!
      </div>
      <div className="flex space-x-4 px-2 pb-6 sm:p-2">
        <a
          href="#ad"
          className="relative hover:scale-105 transition-all bg-black rounded-lg z-10 overflow-hidden"
          onMouseEnter={() => setShowFirst(true)}
          onMouseLeave={() => setShowFirst(false)}
        >
          <img
            src="https://thumbor.forbes.com/thumbor/fit-in/960x/https://www.forbes.com/wheels/wp-content/uploads/2020/10/Think-Like-A-Dealer-featured1.jpg"
            alt="ad1"
            className={`overflow-hidden aspect-video object-cover rounded-lg w-[1000px] shadow-md hover:opacity-${
              showFirst ? 10 : 100
            } transition-all`}
          />
          {showFirst && (
            <p className="absolute flex justify-center items-center top-[40%] right-[2rem] text-right -z-10 text-white select-none text-xs sm:text-lg font-medium opacity-75">
              For all kinds of people.
            </p>
          )}
        </a>
        <a
          href="#ad"
          className="relative hover:scale-105 transition-all bg-black rounded-lg z-10 overflow-hidden"
          onMouseEnter={() => setShowSecond(true)}
          onMouseLeave={() => setShowSecond(false)}
        >
          <img
            src="https://thumbs.dreamstime.com/b/car-dealer-offering-car-to-family-smiling-61276461.jpg"
            alt="ad2"
            className="overflow-hidden aspect-video object-cover rounded-lg w-[1000px] shadow-md hover:opacity-10 transition-all"
          />
          {showSecond && (
            <p className="absolute flex justify-center items-center top-[40%] right-[3.25rem] text-center -z-10 text-white select-none text-xs sm:text-lg font-medium opacity-75">
              Even families.
            </p>
          )}
        </a>
      </div>
    </div>
  )
}

export default Ads
