import React, { useContext, useEffect, useState } from 'react'
import { SiteContext } from '../components/Context/Context'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

function Post() {
  const { brands } = useContext(SiteContext)
  const [category, setCategory] = useState(undefined)

  useEffect(() => {
    console.log(brands)
  })

  return (
    <div className="max-w-xl mx-auto py-20 flex flex-col items-center justify-start">
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
          <div className="flex flex-col">
            <label htmlFor="category" aria-required>
              Category
            </label>
            <select
              id="category"
              name="category"
              className="w-full p-3 rounded-md border bg-white border-slate-400 focus:outline-none focus:border-slate-500 mt-1"
            >
              {brands?.map((item, idx) => (
                <option value={item}>{item}</option>
              ))}
            </select>
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
          <input type="file" />
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
