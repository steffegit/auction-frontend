import React, { createContext } from 'react'

export const UserContext = createContext({})

export const UserContextProvider = ({ children }) => {
  const activateGuest = () => {
    localStorage.setItem('guest', true)
  }

  return (
    <UserContext.Provider value={{ activateGuest }}>
      {children}
    </UserContext.Provider>
  )
}
