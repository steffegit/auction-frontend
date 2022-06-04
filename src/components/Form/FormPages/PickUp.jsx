import React from 'react'

function PickUp({ formData, setFormData }) {
  return (
    <div>
      <div>Are you able to pick up this vehicle right away?</div>
      <fieldset>
        <input
          type="radio"
          id="yesbtn"
          name="pickup"
          value={true}
          onClick={() => setFormData({ ...formData, pickUp: true })}
        />
        <label htmlFor="yesbtn">Yes</label>
        <input
          type="radio"
          id="nobtn"
          name="pickup"
          value={false}
          onClick={() => setFormData({ ...formData, pickUp: false })}
          defaultChecked
        />
        <label htmlFor="nobtn">No</label>
      </fieldset>
    </div>
  )
}

export default PickUp
