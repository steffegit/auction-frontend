import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SiteContext } from '../components/Context/Context'

function Search() {
  const { allCars } = useContext(SiteContext)
  const [data, setData] = useState([])

  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')

  useEffect(() => {
    setData(allCars.filter((car) => car.brand === query))
  }, [])

  return (
    <div className="flex flex-col max-w-7xl mx-auto p-5">
      {data.map((item, idx) => (
        <div>{item?.title}</div>
      ))}
    </div>
  )
}

export default Search
