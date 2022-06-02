import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
  const [guest, setGuest] = useState(false)

  useEffect(() => {
    let temp = localStorage.getItem('guest')
    setGuest(temp)
    console.log(temp)
  }, [])

  const activateGuest = () => {
    setGuest(true)
    localStorage.removeItem('guest')
    localStorage.setItem('guest', true)
  }

  const logout = () => {
    setGuest(false)
    localStorage.removeItem('guest')
    localStorage.setItem('guest', false)
  }

  return (
    <UserContext.Provider value={{ guest, activateGuest, logout }}>
      {children}
    </UserContext.Provider>
  )
}
