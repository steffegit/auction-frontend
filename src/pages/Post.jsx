import React, { useContext } from 'react'
import { SiteContext } from '../components/Context/Context'

function Post() {
  const { brands } = useContext(SiteContext)

  return (
    <div className="max-w-3xl mx-auto p-3 py-20 flex flex-col items-center justify-start sm:p-12 sm:py-20 rounded-md bg-white">
      <div className="text-3xl font-bold mb-10">Post a Bid</div>
      <form className="flex flex-col space-y-14 w-full">
        <div className="space-y-4 w-full">
          <div>
            <label htmlFor="title" aria-required>
              Title*
              <input
                type="text"
                placeholder="ex: BMW M3"
                name="title"
                className="w-full p-3 rounded-md border border-slate-400 focus:outline-none focus:border-slate-500 mt-1"
              />
            </label>
          </div>
          <div className="flex space-x-4">
            <div className="flex flex-col w-2/4">
              <label htmlFor="category" aria-required>
                Category/Brand*
              </label>
              {/* MAYBE USE SOMETHING ELSE HERE */}
              <select
                id="category"
                name="category"
                className="p-3 rounded-md border bg-white border-slate-400 focus:outline-none focus:border-slate-500 mt-1"
              >
                {brands?.map((item, idx) => (
                  <option value={item} className="m-2">
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-2/4">
              <label htmlFor="year">Make Year*</label>
              <input
                type="number"
                min={0}
                name="year"
                placeholder="ex: 2020"
                className="w-full p-3 rounded-md border border-slate-400 focus:outline-none focus:border-slate-500 mt-1"
              />
            </div>
          </div>
          <div>
            <label htmlFor="description" aria-required>
              Description*
              <textarea
                placeholder="Description"
                name="description"
                className="w-full min-h-[100px] p-3 rounded-md border border-slate-400 focus:outline-none focus:border-slate-500 mt-1"
              />
            </label>
          </div>
          <div>
            <label className="w-full flex flex-col mx-auto p-4 items-center cursor-pointer bg-white rounded-md text-black border border-slate-400 focus:outline-none focus:border-slate-500">
              <input type="file" className="hidden" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                viewBox="0 0 20 20"
                fill="black"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div>Upload</div>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className=" py-3 bg-secondary font-medium rounded-md text-white hover:bg-primary transition-all"
        >
          Post
        </button>
      </form>
    </div>
  )
}

export default Post
