import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext({})

const usersUrl = 'https://auction-website89.herokuapp.com/users'

const fetchUsers = async () => {
  try {
    const res = await axios.get(usersUrl)
    return res.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export const UserContextProvider = ({ children }) => {
  const [guest, setGuest] = useState(
    JSON.parse(localStorage.getItem('guest')) === true
  )
  const [users, setUsers] = useState({})
  const [guestInfo, setGuestInfo] = useState(undefined)

  useEffect(() => {
    localStorage.setItem('guest', guest)

    const fetchData = async () => {
      const data = await fetchUsers()

      setUsers(data)
      setGuestInfo(data['guest'])
    }
    if (guest) {
      fetchData().catch(console.error)
    }
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
    <UserContext.Provider
      value={{ guest, activateGuest, logout, users, guestInfo }}
    >
      {children}
    </UserContext.Provider>
  )
}
