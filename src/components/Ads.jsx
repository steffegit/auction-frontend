import React from 'react'

function Ads() {
  return (
    <div className="flex flex-col p-5 bg-indigo-700 space-y-5">
      <div className="flex font-bold pt-2 text-xl text-white justify-center text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, totam?
      </div>
      {/* IMAGES */}
      {/* TODO: Make this responsive */}
      <div className="flex w-full h-full justify-between space-x-4">
        <a href="#" className="w-1/2">
          <div>
            <img
              src="https://images.ctfassets.net/rb55mbb1m3hk/7ozdx92cZWiAtxzhEd2rTx/4f64792ce4e9a709c2519dd6662ce8ee/Kijiji_Lifestyle_20_Meetup-to-exchange-goods_horizontal_closeup_fall__1_.jpeg"
              className="rounded-lg shadow-lg object-cover aspect-square"
            />
            {/*TODO:  DO THIS DIV'S INSIDE THE IMAGE */}
            <div className="absolute">
              <span className="text-sm text-white bg-zinc-600 bg-opacity-50">
                Ipsum lorem?
              </span>
            </div>
          </div>
        </a>
        <a href="#" className="w-1/2">
          <div>
            <img
              src="https://images.ctfassets.net/rb55mbb1m3hk/7oMqQW63on7QFtmwRucu8q/c8d4af42bb85a0fb6db684c16b71d3da/top_5_home_improvements.jpeg"
              className="rounded-lg shadow-lg object-cover aspect-square"
            />
            <div>
              <span className="text-sm text-white bg-zinc-600 bg-opacity-50">
                Ipsum lorem?
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Ads
