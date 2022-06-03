import React from 'react'

function Financing({ formData, setFormData }) {
  return (
    <div>
      <div>
        Financing is not available for this vehicle, you are expected to pay in
        full. Are you fine with that?
      </div>
      <fieldset>
        <input
          type="radio"
          id="yesbtn"
          name="financing"
          value={true}
          onClick={() => setFormData({ ...formData, financing: true })}
        />

        <label for="yesbtn">Yes</label>
        <input
          type="radio"
          id="nobtn"
          name="financing"
          value={false}
          onClick={() => setFormData({ ...formData, financing: false })}
          checked
        />
        <label for="nobtn">No</label>
      </fieldset>
    </div>
  )
}

export default Financing
