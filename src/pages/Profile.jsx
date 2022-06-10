import React, { useContext, useState } from 'react'
import { UserContext } from '../components/Context/UserContext'

function Profile() {
  const { users } = useContext(UserContext)
  const status = users?.status
  const [enabled, setEnabled] = useState(status === 'public' ? true : false)

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:items-start space-y-8 sm:space-y-0 max-w-7xl sm:mx-auto p-5 sm:space-x-10 bg-bgColor m-10 rounded-md">
      <div id="#leftside" className="relative w-1/2 sm:w-1/3 overflow-visible">
        <img
          src={users?.picture}
          alt="avatar"
          className="aspect-square object-cover rounded-full sm:rounded-md"
        />
        {users?.verified ? (
          <div className="absolute top-0 right-0 font-bold p-2 bg-green-400 rounded-full text-xs text-green-900 uppercase sm:rounded-none sm:rounded-r-md">
            VERIFIED
          </div>
        ) : null}
      </div>
      <div
        id="#rightside"
        className="w-full h-full flex flex-col justify-center items-center sm:justify-start sm:items-start text-center sm:text-left"
      >
        <div className="flex items-end space-x-2">
          <div className="font-bold text-3xl">{users?.name}</div>
          <div className="text-lg italic">({users?.username})</div>
        </div>
        <div>
          Location - <strong>{users?.location}</strong>
        </div>

        <div>{users?.email}</div>
        {/* IF BIDS/SELLS == 0 SHOW NO CURRENT */}
        {users?.bids !== 0 ? (
          <a href="#active">{users?.bids} active bids</a>
        ) : (
          <div>No active bids</div>
        )}
        {users?.sells !== 0 ? (
          <a href="#sold">{users?.sells} sold vehicles</a>
        ) : (
          <div>Not selling anything</div>
        )}
        <button className="mt-10 px-14 py-2 rounded-lg bg-black text-white hover:bg-gray-900 transition-all sm:justify-end sm:self-end">
          Logout
        </button>
      </div>
    </div>
  )
}

export default Profile
