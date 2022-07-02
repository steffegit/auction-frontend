import React from 'react'

function BidAmount({ formData, setFormData, bidData }) {
  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <div className="flex flex-col text-center mb-5">
        <div>Current top bid: {bidData?.price}</div>
        <div>Your bid amount:</div>
      </div>
      <input
        type="number"
        min={bidData?.cost}
        value={formData?.bidAmount}
        name="bidamount"
        className="bg-bgColor outline-none p-2 border border-slate-300 rounded-md focus:border-sky-500 font-medium"
        onChange={(event) =>
          setFormData({ ...formData, bidAmount: event.target.value })
        }
      />
    </div>
  )
}

export default BidAmount
