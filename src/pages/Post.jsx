import React from 'react'

function Post() {
  return (
    <div className="flex flex-col max-w-5xl mx-auto scroll-smooth pb-5">
      <div className="flex p-5 mt-10 overflow-hidden justify-center">
        <div className="flex flex-col justify-center ring-1 ring-black p-5 w-full rounded-md space-y-8">
          <div className="text-5xl font-bold whitespace-pre-line mb-[4rem]">
            List an{'\n'} auction item.
          </div>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
          <div className="flex p-2 ring-1 ring-gray-400 rounded-sm justify-between">
            <div className="flex space-x-3">
              <img
                src="https://via.placeholder.com/50x50"
                alt="thumbnail"
                className="rounded-sm"
              />
              <div className="flex flex-col">
                <a href="#viewimg">
                  <div className="text-md font-semibold">
                    img/2131231/321314/imd
                  </div>
                </a>
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
