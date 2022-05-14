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
      <div className="flex flex-col p-5">
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
      </div>
    </div>
  )
}

export default ContainerCurrentlyListed
