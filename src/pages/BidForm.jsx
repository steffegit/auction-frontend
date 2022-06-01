import React from 'react'
import { useParams } from 'react-router-dom'

function BidForm() {
  let { id } = useParams()
  return <div>BidForm {id}</div>
}

export default BidForm
