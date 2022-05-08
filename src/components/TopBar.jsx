import React, { useState } from 'react'

function TopBar() {

  const [showBox, setShowBox] = useState(false);

  const toggleShowBox = () => {
    setShowBox(!showBox)
  }

  return (
    <div className='flex p-5 w-screen justify-between border border-gray-300 border-t-0'>
      <div className='flex space-x-2 items-center'>
        {/* SEARCH BUTTON */}
        <button type='button' className='p-2 rounded-md hover:bg-gray-100 border border-slate-300' onClick={toggleShowBox}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        {/* SEARCH INPUT TOGGLE */}
        {showBox ? (
          <div>
            <input type="text" placeholder='Search...' className='p-2 outline-none border border-slate-300 rounded-md focus:border-sky-500' />
          </div>
        ) : (null)}
      </div>
      <div className='flex space-x-2'>
        {/* ADD ITEM */}
        <button type='button' className='p-2 rounded-md hover:bg-gray-100 border border-slate-300'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>
        {/* USER ACC  */}
        <button type='button' className='p-2 rounded-md hover:bg-gray-100 border border-slate-300'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default TopBar