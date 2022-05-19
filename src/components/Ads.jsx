import React from 'react'

function Ads() {
  return (
    <div className="flex flex-col sm:flex-row sm:max-h-[300px] bg-indigo-700 space-y-1 sm:rounded-md sm:mx-4 sm:px-4 sm:py-4">
      <div className="flex font-bold sm:w-[200] p-5 pt-7 text-xl text-white justify-center text-center">
        Need some advice on what to bid? Need more info about your next shiny
        car? Talk to our representatives by using our SupportPlus Service!
      </div>
      <div className="flex space-x-4 px-2 pb-6 sm:p-2">
        <img
          src="https://thumbor.forbes.com/thumbor/fit-in/960x/https://www.forbes.com/wheels/wp-content/uploads/2020/10/Think-Like-A-Dealer-featured1.jpg"
          alt="ad1"
          className="overflow-hidden aspect-video object-cover rounded-lg w-[1000px] shadow-md"
        />
        <img
          src="https://thumbs.dreamstime.com/b/car-dealer-offering-car-to-family-smiling-61276461.jpg"
          alt="ad2"
          className="overflow-hidden aspect-video object-cover rounded-lg w-[1000px] shadow-md"
        />
      </div>
    </div>
  )
}

export default Ads
