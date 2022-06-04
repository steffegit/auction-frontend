import React from 'react'

function Deposit({ formData, setFormData }) {
  return (
    <div className="flex flex-col items-center justify-center mb-10 space-y-4">
      <div className="text-center">
        <div>There is a 200$ deposit fee.</div>
        <div>Are you fine with that?</div>
      </div>

      <fieldset className="flex items-center space-x-16">
        <div className="flex space-x-1 items-center">
          <input
            type="radio"
            id="yesbtn"
            name="deposit"
            value={true}
            onClick={() => setFormData({ ...formData, depositFee: true })}
          />
          <label htmlFor="yesbtn">Yes</label>
        </div>
        <div className="flex space-x-1 items-center">
          <input
            type="radio"
            id="nobtn"
            name="deposit"
            value={false}
            onClick={() => setFormData({ ...formData, depositFee: false })}
            defaultChecked
          />
          <label htmlFor="nobtn">No</label>
        </div>
      </fieldset>
    </div>
  )
}

export default Deposit
