import React from 'react'

function Deposit({ formData, setFormData }) {
  return (
    <div>
      <div>There is a 200$ deposit fee. Are you fine with that?</div>
      <fieldset>
        <input
          type="radio"
          id="yesbtn"
          name="deposit"
          value={true}
          onClick={() => setFormData({ ...formData, depositFee: true })}
        />
        <label htmlFor="yesbtn">Yes</label>
        <input
          type="radio"
          id="nobtn"
          name="deposit"
          value={false}
          onClick={() => setFormData({ ...formData, depositFee: false })}
          defaultChecked
        />
        <label htmlFor="nobtn">No</label>
      </fieldset>
    </div>
  )
}

export default Deposit
