import React from 'react'

function Deposit() {
  return (
    <div>
      <div>There is a 200$ deposit fee. Are you fine with that?</div>
      <fieldset>
        <input type="radio" id="yesbtn" name="deposit" value={1} checked />
        <label for="yesbtn">Yes</label>
        <input type="radio" id="nobtn" name="deposit" value={0} />
        <label for="nobtn">No</label>
      </fieldset>
    </div>
  )
}

export default Deposit
