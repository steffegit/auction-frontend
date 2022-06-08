import React, { useContext } from 'react'
import { UserContext } from '../components/Context/UserContext'

function Profile() {
  const { users } = useContext(UserContext)

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:items-start space-y-8 sm:space-y-0 max-w-7xl mx-auto p-5 sm:space-x-10">
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
        className="flex flex-col justify-center items-center sm:justify-start sm:items-start text-center sm:text-left"
      >
        <div className="flex items-end space-x-2">
          <div className="font-bold text-3xl">{users?.name}</div>
          <div className="text-lg italic">({users?.username})</div>
        </div>
        <div className="flex items-end space-x-1">
          <div>Location -</div>
          <div className="font-semibold">{users?.location}</div>
        </div>
        <div>{users?.email}</div>
        {/* IF BIDS/SELLS == 0 SHOW NO CURRENT */}
        <div>{users?.bids}</div>
        <div>{users?.sells}</div>
        <div>{users?.status}</div>
      </div>
    </div>
  )
}

export default Profile
