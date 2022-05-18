import React from 'react'

function Ads() {
  return (
    <div className="flex flex-col bg-indigo-700 space-y-1 sm:rounded-md sm:mx-4 sm:px-4">
      <div className="flex font-bold p-5 pt-7 text-xl text-white justify-center text-center">
        Need some advice on what to bid? Need more info about your next shiny
        car? Talk to our representatives by using our SupportPlus Service!
      </div>
      {/* IMAGES */}
      <div className="flex w-full h-full justify-between space-x-4 pb-5 px-2">
        <a href="#ad1" className="w-1/2">
          <div className="overflow-y-hidden">
            <img
              src="https://thumbor.forbes.com/thumbor/fit-in/960x/https://www.forbes.com/wheels/wp-content/uploads/2020/10/Think-Like-A-Dealer-featured1.jpg"
              className="relative rounded-lg shadow-lg object-cover aspect-video"
            />
            <div className="absolute -mt-[26px] sm:-mt-[30px] origin-left scale-90 sm:scale-100">
              <span className="text-sm text-white bg-zinc-600 bg-opacity-80 rounded-bl-lg rounded-tr-2xl p-[8px]">
                For all kinds of people.
              </span>
            </div>
          </div>
        </a>
        <a href="#ad2" className="w-1/2">
          <div>
            <img
              src="https://thumbs.dreamstime.com/b/car-dealer-offering-car-to-family-smiling-61276461.jpg"
              className="rounded-lg shadow-lg object-cover aspect-video"
            />
            <div className="absolute -mt-[26px] sm:-mt-[30px] origin-left scale-90 sm:scale-100">
              <span className="text-sm text-white bg-zinc-600 bg-opacity-80 rounded-bl-lg rounded-tr-2xl p-[8px]">
                Even for families.
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Ads
