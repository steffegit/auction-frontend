import React, { useState } from 'react'

function SearchBar({ items, loading }) {
  const [filteredData, setFilteredData] = useState([])

  const [show, setShow] = useState(false)

  const handleFilter = (e) => {
    const searchWord = e.target.value
    const newFilter = items.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase())
    })

    if (searchWord === '') {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  return (
    <div>
      <label className="relative block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
          className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search anything from here"
          className="pl-12 w-full p-2 outline-none border border-slate-300 rounded-md focus:border-sky-500 font-medium"
          onChange={handleFilter}
          onFocus={() => setShow(true)}
          onBlur={() => setShow(false)}
        />
        {!loading && show && filteredData.length != 0 && (
          <div className="absolute w-full mt-2 p-2 flex flex-col z-20 bg-white border border-slate-300 shadow-md rounded-md">
            {filteredData.slice(0, 4).map((item) => (
              <div
                className="hover:bg-gray-100 text-black group flex w-full items-center rounded-md px-2 py-2 text-sm space-x-2"
                key={item.id}
              >
                <img
                  src={item.pic}
                  className="w-10 h-10 object-cover rounded-full"
                />
                <a href="/" className="text-sm pl-1">
                  {item.title}
                </a>
              </div>
            ))}
          </div>
        )}
      </label>
    </div>
  )
}

export default SearchBar
