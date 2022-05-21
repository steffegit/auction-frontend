import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'

function Bid() {
  let { id } = useParams()

  useEffect(() => {
    console.log(id)
  }, [])

  return <div className="flex max-w-5xl mx-auto p-5">Bid {id}</div>
}

export default Bid
