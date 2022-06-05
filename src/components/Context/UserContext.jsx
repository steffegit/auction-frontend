import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
  const [guest, setGuest] = useState(localStorage.getItem('guest') === 'true')

  useEffect(() => {
    localStorage.setItem('guest', guest)
  }, [])

  const activateGuest = () => {
    setGuest(true)
  }

  const logout = () => {
    setGuest(false)
  }

  return (
    <UserContext.Provider value={{ guest, activateGuest, logout }}>
      {children}
    </UserContext.Provider>
  )
}
