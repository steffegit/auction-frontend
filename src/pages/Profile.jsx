import React, { useContext } from 'react'
import { UserContext } from '../components/Context/UserContext'

function Profile() {
  const { users } = useContext(UserContext)

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 max-w-7xl mx-auto p-5 sm:space-x-10">
      <div id="#leftside" className="w-1/2">
        <img
          src={users?.picture}
          alt="avatar"
          className="aspect-square object-cover rounded-full sm:rounded-none"
        />
      </div>
      <div id="#rightside">
        <div>{users?.name}</div>
        <div>{users?.username}</div>
        <div>{users?.email}</div>
        <div>{users?.location}</div>
        {/* ADD A CHECK LIKE ON TWITTER ON INSTAGRAM IF VERIFIED */}
        <div>{JSON.stringify(users?.verified)}</div>

        <div>{users?.bids}</div>
        <div>{users?.sells}</div>
        <div>{users?.status}</div>
      </div>
    </div>
  )
}

export default Profile
