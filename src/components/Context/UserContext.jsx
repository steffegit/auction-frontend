import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
  const [guest, setGuest] = useState(
    JSON.parse(localStorage.getItem('guest')) === true
  )

  useEffect(() => {
    localStorage.setItem('guest', guest)
  }, [guest])

  const activateGuest = () => {
    localStorage.setItem('guest', true)
    setGuest(true)
  }

  const logout = () => {
    localStorage.setItem('guest', false)
    setGuest(false)
  }

  return (
    <UserContext.Provider value={{ guest, activateGuest, logout }}>
      {children}
    </UserContext.Provider>
  )
}
