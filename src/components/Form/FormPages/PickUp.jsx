import React from 'react'

function PickUp({ formData, setFormData }) {
  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <div>Are you able to pick up this vehicle right away?</div>
      <fieldset className="flex items-center space-x-10">
        <div className="flex space-x-1 items-center">
          <input
            type="radio"
            id="yesbtn"
            name="pickup"
            value={true}
            onClick={() => setFormData({ ...formData, pickUp: true })}
          />
          <label htmlFor="yesbtn">Yes</label>
        </div>
        <div className="flex space-x-1 items-center">
          <input
            type="radio"
            id="nobtn"
            name="pickup"
            value={false}
            onClick={() => setFormData({ ...formData, pickUp: false })}
            defaultChecked
          />
          <label htmlFor="nobtn">No</label>
        </div>
      </fieldset>
    </div>
  )
}

export default PickUp
