import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import BidAmount from '../components/Form/FormPages/BidAmount'
import Deposit from '../components/Form/FormPages/Deposit'
import Financing from '../components/Form/FormPages/Financing'
import PickUp from '../components/Form/FormPages/PickUp'
import Success from '../components/Form/FormPages/Success'

const steps = ['Pick Up', 'Financing', 'Bid Amount', 'Deposit Fee', 'Success']

function BidForm() {
  let { id } = useParams()
  const [page, setPage] = useState(0)

  const [formData, setFormData] = useState({
    pickUp: false,
    financing: false,
    bidAmount: 0,
    depositFee: false,
  })

  useEffect(() => {
    console.log(formData)
  }, [formData])

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <PickUp formData={formData} setFormData={setFormData} />
      case 1:
        return <Financing formData={formData} setFormData={setFormData} />
      case 2:
        return <BidAmount formData={formData} setFormData={setFormData} />
      case 3:
        return <Deposit formData={formData} setFormData={setFormData} />
      case 4:
        return <Success formData={formData} setFormData={setFormData} />
      default:
        return <PickUp />
    }
  }
  return (
    <div className="flex flex-col max-w-7xl mx-auto scroll-smooth pb-5">
      <div>Current: {steps[page]}</div>
      <div>{PageDisplay()}</div>
      <div className="flex space-x-10 mx-auto">
        <button
          className="p-2 bg-red-600 hover:bg-red-700 text-white border rounded-full px-4"
          disabled={page === 0}
          onClick={() => {
            setPage((currentPage) => currentPage - 1)
          }}
        >
          Prev
        </button>
        {page === steps.length - 1 ? (
          <button className="p-2 bg-green-500 hover:bg-green-600 text-white border rounded-full px-4">
            Submit
          </button>
        ) : (
          <button
            className="p-2 bg-green-500 hover:bg-green-600 text-white border rounded-full px-4"
            disabled={page === steps.length - 1}
            onClick={() => {
              setPage((currentPage) => currentPage + 1)
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  )
}

export default BidForm
