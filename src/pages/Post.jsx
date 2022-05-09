import React from 'react'
import TopBar from '../components/TopBar'

function Post() {
  return (
    <div className="flex flex-col mx-auto overflow-hidden">
      <TopBar />
      <div className="flex p-5 mt-10 overflow-hidden justify-center">
        <div className="ring-1 ring-black p-5 rounded-md space-y-10">
          <div className="text-5xl font-bold flex-wrap">
            List an auction item.
          </div>
          <div>(Placeholder for drag images)</div>
          <div className="flex p-2 ring-1 ring-black rounded-sm justify-between">
            <div className="flex space-x-3">
              <img
                src="https://via.placeholder.com/50x50"
                alt="thumbnail"
                className="rounded-sm"
              />
              <div className="flex flex-col">
                <div className="text-md">img/2131231/321314/imd</div>
                <div className="text-sm">Uploaded at 10:30 PM</div>
              </div>
            </div>
            <div className="flex items-center overflow-hidden">
              <button
                type="button"
                className="hover:bg-red-600 transition-all overflow-hidden rounded-full p-2 mr-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            {/* TODO: Change color to pallet */}
            <button
              type="button"
              className="w-full bg-blue-700 p-3 rounded-md text-white hover:bg-blue-900 focus:outline focus:outline-offset-2 focus:outline-black transition-all"
            >
              List Item
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
