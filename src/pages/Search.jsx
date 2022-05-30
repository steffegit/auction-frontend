import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchResultCard from '../components/Cards/SearchResultCard'
import { SiteContext } from '../components/Context/Context'

function Search() {
  const { allCars } = useContext(SiteContext)
  const [data, setData] = useState([])

  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')

  useEffect(() => {
    const filtered = allCars?.filter((car) => car?.brand === query)
    setData(filtered)
  }, [allCars, query])

  const [grid, setGrid] = useState(true)

  return (
    <>
      <div className="flex justify-between max-w-7xl mx-auto p-5 text-3xl">
        <div>
          Search results for <strong>{data[0]?.brand}</strong>
        </div>
        <button
          className="flex sm:hidden items-center p-2 bg-gray-200 hover:bg-gray-300 rounded-md transition-all"
          onClick={() => setGrid(!grid)}
        >
          {grid ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`grid ${
          grid ? 'grid-cols-2' : 'grid-cols-1'
        } max-w-7xl mx-auto p-5 gap-2 sm:grid-cols-3 md:grid-cols-5 sm:space-y-0 sm:gap-4`}
      >
        {data &&
          data?.map((item, idx) => (
            <SearchResultCard key={item?.id} data={item} />
          ))}
      </div>
    </>
  )
}

export default Search
