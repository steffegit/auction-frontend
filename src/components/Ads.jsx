import React from 'react'

function Ads() {
  return (
    <div className="flex flex-col p-5 bg-indigo-700 space-y-5">
      <div className="font-bold text-xl text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, totam?
      </div>
      {/* IMAGES */}
      <div className="flex space-x-2 max-w-screen-sm max-h-screen overflow-scroll">
        <img
          src="https://images.ctfassets.net/rb55mbb1m3hk/7ozdx92cZWiAtxzhEd2rTx/4f64792ce4e9a709c2519dd6662ce8ee/Kijiji_Lifestyle_20_Meetup-to-exchange-goods_horizontal_closeup_fall__1_.jpeg"
          alt="meeting"
          className="rounded-lg shadow-md"
        />
        <img
          src="https://images.ctfassets.net/rb55mbb1m3hk/7ozdx92cZWiAtxzhEd2rTx/4f64792ce4e9a709c2519dd6662ce8ee/Kijiji_Lifestyle_20_Meetup-to-exchange-goods_horizontal_closeup_fall__1_.jpeg"
          alt="meeting"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  )
}

export default Ads
