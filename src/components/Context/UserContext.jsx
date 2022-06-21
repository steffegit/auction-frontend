import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import qs from 'qs'

export const UserContext = createContext({})

const usersUrl = 'https://auction-website89.herokuapp.com/users'
const registerUrl = 'https://auction-website89.herokuapp.com/users/register'

const fetchUsers = async () => {
  try {
    const res = await axios.get(usersUrl)
    return res.data
  } catch (error) {
    console.log(error)
    return null
  }
}

const fetchUserByToken = async (token) => {
  try {
    const res = await axios.post(usersUrl, { token })
    return res.data
  } catch (error) {
    console.log(error)
    return null
  }
}

const registerUser = async (name, email, password) => {
  try {
    let postData = {
      name: name,
      email: email,
      password: password,
    }
    const res = await axios.post(registerUrl, qs.stringify(postData), {
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    })
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
  const [token, setToken] = useState(localStorage.getItem('token'))

  const createRegisterUser = async (info) => {
    const data = await registerUser(info.name, info.email, info.password)
    console.log(data)
  }

  useEffect(() => {
    localStorage.setItem('guest', guest)

    if (token !== null) {
      const fetchData = async () => {
        const data = await fetchUserByToken(token)

        setUsers(data)
        setGuestInfo(data)
        console.log(data)
      }
      if (guest) {
        fetchData().catch(console.error)
      }
    } else {
      const fetchData = async () => {
        const data = await fetchUsers()

        setUsers(data)
        setGuestInfo(data['guest'])
        setToken(data['token'])
        localStorage.setItem('token', data['token'])
      }
      if (guest) {
        fetchData().catch(console.error)
      }
    }
  }, [guest, token])

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
      value={{
        guest,
        activateGuest,
        logout,
        users,
        guestInfo,
        createRegisterUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
