import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CurrentlyListedCard from '../Cards/CurrentlyListedCard'

const apiPath = 'https://auction-website89.herokuapp.com/main'

function ContainerCurrentlyListed() {
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
      <div className="flex flex-col p-5 pb-0 mt-10">
        <div className="font-bold text-center text-3xl sm:text-5xl mb-5 sm:mb-10">
          Currently Listed
        </div>
        {data &&
          data.slice(0, 5)?.map((_, idx) => (
            <div key={data[idx].id}>
              <CurrentlyListedCard
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
        <div className="w-full mt-5">
          <button
            type="button"
            className="w-full p-2 text-center ring-2 rounded-md font-medium text-xl shadow-sm hover:bg-sky-500 transition-all focus:ring-4"
          >
            See all listed items
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContainerCurrentlyListed
