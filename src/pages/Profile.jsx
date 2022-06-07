import React, { useContext } from 'react'
import { UserContext } from '../components/Context/UserContext'

function Profile() {
  const { users } = useContext(UserContext)

  return (
    <div>
      {/* <pre>{JSON?.stringify(users, null, 2)}</pre> */}
      <div className="flex flex-col sm:flex-row max-w-7xl mx-auto p-5">
        <div id="#leftside">
          <img
            src={users?.picture}
            alt="avatar"
            className="w-1/2 aspect-square object-cover rounded-full"
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
    </div>
  )
}

export default Profile
