import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
  const [guest, setGuest] = useState(false)

  useEffect(() => {
    const fetchGuest = () => {
      return JSON.parse(localStorage.getItem('guest'))
    }

    const temp = fetchGuest()
    setGuest(temp)
  }, [])

  const activateGuest = () => {
    setGuest(1)
    localStorage.removeItem('guest')
    localStorage.setItem('guest', true)
  }

  const logout = () => {
    setGuest(0)
    localStorage.removeItem('guest')
    localStorage.setItem('guest', false)
  }

  return (
    <UserContext.Provider value={{ guest, activateGuest, logout }}>
      {children}
    </UserContext.Provider>
  )
}
