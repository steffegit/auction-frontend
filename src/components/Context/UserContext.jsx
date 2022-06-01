import React, { createContext, useState } from 'react'

export const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
  const [guestUser, setGuestUser] = useState(false)

  const activateGuest = () => {
    setGuestUser(true)
  }

  return (
    <UserContext.Provider value={{ guestUser, activateGuest }}>
      {children}
    </UserContext.Provider>
  )
}
