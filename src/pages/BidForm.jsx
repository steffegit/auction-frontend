import React from 'react'
import { useParams } from 'react-router-dom'
import FormSteps from '../components/Form/FormSteps'

function BidForm() {
  let { id } = useParams()
  return (
    <div className="flex flex-col max-w-7xl mx-auto scroll-smooth pb-5">
      <FormSteps />
    </div>
  )
}

export default BidForm
