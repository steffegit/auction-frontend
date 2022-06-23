import React, { useContext } from 'react'
import { UserContext } from '../components/Context/UserContext'

function Profile() {
  const { userInfo, logout } = useContext(UserContext)

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-start sm:items-start space-y-8 sm:space-y-0 max-w-7xl sm:mx-auto p-5 sm:space-x-10 bg-bgColor m-5 sm:m-10 rounded-md">
      <div id="#leftside" className="relative w-1/2 sm:w-1/3 overflow-visible">
        <img
          src={userInfo?.picture}
          alt="avatar"
          className="aspect-square object-cover rounded-full sm:rounded-md"
        />
        {userInfo?.verified ? (
          <div className="absolute top-0 right-0 font-bold p-2 bg-green-400 rounded-full text-xs text-green-900 uppercase sm:rounded-none sm:rounded-r-md">
            VERIFIED
          </div>
        ) : null}
      </div>
      <div
        id="#rightside"
        className="w-full h-full flex flex-col justify-center items-center sm:justify-start sm:items-start text-center sm:text-left"
      >
        <div className="text-4xl font-bold">{userInfo?.username}</div>
        <div>
          Location - <strong>{userInfo?.location}</strong>
        </div>

        <div>{userInfo?.email}</div>
        {/* IF BIDS/SELLS == 0 SHOW NO CURRENT */}
        {userInfo?.bids.length !== 0 ? (
          <a href="#active">{userInfo?.bids} active bids</a>
        ) : (
          <div>No active bids</div>
        )}
        {userInfo?.sells.length !== 0 ? (
          <a href="#sold">{userInfo?.sells} sold vehicles</a>
        ) : (
          <div>Not selling anything</div>
        )}
        <a
          href="/"
          className="mt-10 px-14 py-2 rounded-lg bg-black text-white hover:bg-gray-900 hover:scale-105 transition-all sm:justify-end sm:self-end"
          onClick={() => {
            logout()
          }}
        >
          Logout
        </a>
      </div>
    </div>
  )
}

export default Profile
