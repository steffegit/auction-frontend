import React from 'react'

function Financing() {
  return (
    <div>
      <div>
        Financing is not available for this vehicle, you are expected to pay in
        full. Are you fine with that?
      </div>
      <fieldset>
        <input type="radio" id="yesbtn" name="financing" value={1} checked />
        <label for="yesbtn">Yes</label>
        <input type="radio" id="nobtn" name="financing" value={0} />
        <label for="nobtn">No</label>
      </fieldset>
    </div>
  )
}

export default Financing
