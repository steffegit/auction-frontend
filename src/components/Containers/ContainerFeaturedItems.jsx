import axios from 'axios'
import React, { useState, useEffect } from 'react'
import FeaturedItemCard from '../FeaturedItemCard'

const apiPath = 'https://auction-website89.herokuapp.com/main'

function ContainerFeaturedItems() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      const res = await axios.get(apiPath)
      setData(res.data)
      setError(null)
    } catch (err) {
      setError(err.message)
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <div className="flex items-center justify-between pt-10 px-5 text-xl sm:text-5xl font-bold mb-2 sm:mb-6">
        <div>Featured Auctions</div>
        <a className="text-lg sm:text-lg hover:underline">See all</a>
      </div>

      <div className="flex flex-row overflow-x-scroll scrollbar-hide -space-x-2">
        {data &&
          data?.map((_, idx) => (
            <div key={data[idx].id}>
              <FeaturedItemCard
                title={data[idx].title}
                price={data[idx].price}
                days={data[idx].days}
                hours={data[idx].hours}
                km={data[idx].km}
                pic={data[idx].pic}
                type={data[idx].type}
                classic={data[idx].classic}
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default ContainerFeaturedItems
