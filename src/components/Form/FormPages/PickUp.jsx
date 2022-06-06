import React from 'react'

function PickUp({ formData, setFormData }) {
  return (
    <div className="flex flex-col items-center justify-center mb-10 space-y-4">
      <div className="text-center w-[200px] sm:w-max">
        Are you able to pick up this vehicle right away?
      </div>
      <fieldset className="flex items-center space-x-16">
        <div className="flex space-x-1 items-center">
          <input
            type="radio"
            id="yesbtn"
            name="pickup"
            value={true}
            onChange={() => setFormData({ ...formData, pickUp: true })}
            checked={formData.pickUp === true}
          />
          <label htmlFor="yesbtn">Yes</label>
        </div>
        <div className="flex space-x-1 items-center">
          <input
            type="radio"
            id="nobtn"
            name="pickup"
            value={false}
            onChange={() => setFormData({ ...formData, pickUp: false })}
            checked={formData.pickUp === false}
          />
          <label htmlFor="nobtn">No</label>
        </div>
      </fieldset>
    </div>
  )
}

export default PickUp
