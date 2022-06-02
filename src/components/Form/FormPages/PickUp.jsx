import React from 'react'

function PickUp() {
  return (
    <div>
      <div>Are you able to pick up this vehicle right away?</div>
      <fieldset>
        <input type="radio" id="yesbtn" name="pickup" value={1} checked />
        <label for="yesbtn">Yes</label>
        <input type="radio" id="nobtn" name="pickup" value={0} />
        <label for="nobtn">No</label>
      </fieldset>
    </div>
  )
}

export default PickUp
