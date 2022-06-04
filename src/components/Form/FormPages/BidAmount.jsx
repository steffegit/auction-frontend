import React from 'react'

function BidAmount({ formData, setFormData }) {
  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <div className="flex flex-col text-center mb-5">
        <div>Current top bid: 0.000$</div>
        <div>Your bid amount:</div>
      </div>
      <input
        type="number"
        min={0}
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
