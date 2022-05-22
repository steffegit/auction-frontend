import React, { useEffect, useContext } from 'react'
import { SiteContext } from '../components/Context/Context'

import { useParams } from 'react-router-dom'

function Bid() {
  let { id } = useParams()
  const { getBidData, bid } = useContext(SiteContext)

  useEffect(() => {
    getBidData(id)
    // eslint-disable-next-line
  }, [])

  return <div className="flex max-w-5xl mx-auto p-5">Bid {bid?.title}</div>
}

export default Bid
