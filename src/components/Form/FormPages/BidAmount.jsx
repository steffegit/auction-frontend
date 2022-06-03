import React from 'react'

function BidAmount({ formData, setFormData }) {
  return (
    <div>
      <div>Current top bid: 0.000$</div>
      <div>Your bid amount:</div>
      <input type="text" name="bidamount" className="outline" />
    </div>
  )
}

export default BidAmount
