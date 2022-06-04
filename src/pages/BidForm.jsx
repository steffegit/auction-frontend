import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import BidAmount from '../components/Form/FormPages/BidAmount'
import Deposit from '../components/Form/FormPages/Deposit'
import Financing from '../components/Form/FormPages/Financing'
import PickUp from '../components/Form/FormPages/PickUp'
import Success from '../components/Form/FormPages/Success'

import FormSteps from '../components/Form/FormSteps'

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

  // useEffect(() => {
  //   console.log(formData)
  // }, [formData])

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
    <div className="flex flex-col max-w-3xl mx-auto scroll-smooth p-4 pb-16 sm:p-16 pt-4 bg-bgColor rounded-md">
      <FormSteps page={page} setPage={setPage} />
      {page !== steps.length - 1 ? (
        <>
          <div>{PageDisplay()}</div>
          <div className="flex w-full justify-center space-x-10">
            <button
              className="p-2 bg-red-600 hover:bg-red-700 text-white border rounded-full px-8"
              disabled={page === 0}
              onClick={() => {
                setPage((currentPage) => currentPage - 1)
              }}
            >
              Prev
            </button>
            {page === steps.length - 2 ? (
              <button
                className="p-2 bg-green-500 hover:bg-green-600 text-white border rounded-full px-8"
                disabled={!formData.depositFee}
                onClick={() => {
                  alert('Bid placed.')
                  setPage((currentPage) => currentPage + 1)
                }}
              >
                Submit
              </button>
            ) : (
              <button
                className="p-2 bg-green-500 hover:bg-green-600 text-white border rounded-full px-8"
                disabled={page === steps.length - 2}
                onClick={() => {
                  setPage((currentPage) => currentPage + 1)
                }}
              >
                Next
              </button>
            )}
          </div>
        </>
      ) : (
        <>
          <div>{PageDisplay()}</div>
          <a>Go Home</a>
        </>
      )}
    </div>
  )
}

export default BidForm
