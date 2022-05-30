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

  return (
    <>
      <div className="flex max-w-7xl mx-auto p-5 text-3xl">
        <div>
          Search results for <strong>{data[0]?.brand}</strong>
        </div>
      </div>
      <div className="grid grid-cols-2 max-w-7xl mx-auto p-5 gap-2 sm:grid-cols-3 md:grid-cols-5 sm:space-y-0 sm:gap-4">
        {data &&
          data?.map((item, idx) => (
            <SearchResultCard key={item?.id} data={item} />
          ))}
      </div>
    </>
  )
}

export default Search
