import React from 'react'

function ItemCard() {
  return (
    <div className='flex flex-col p-5 w-screen h-max border border-gray-300 border-t-0 space-y-6'>
      <div className='image-flex'>
        <img src='https://via.placeholder.com/400x300' alt='car-pic' className='rounded-sm'/>
      </div>
      {/* DESCRIPTION */}
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo consequuntur autem magni quos placeat voluptatum accusamus aspernatur sapiente dolorum impedit.</p>
      </div>
      {/* BID BUTTON*/}
      <div>
        <button type="button" className='w-full p-4 rounded-md text-white bg-gradient-to-r from-blue-700 to-pink-400 sm:p-2 sm:w-max'>Add to Cart</button>
      </div>
    </div>
  )
}

export default ItemCard