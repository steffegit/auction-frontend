import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import qs from 'qs'

export const UserContext = createContext({})

const usersUrl = 'https://auction-website89.herokuapp.com/users'
const registerUrl = 'https://auction-website89.herokuapp.com/users/register'
const loginUrl = 'https://auction-website89.herokuapp.com/users/login'

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

const loginUser = async (email, password) => {
  try {
    let postData = {
      email: email,
      password: password,
    }
    const res = await axios.post(loginUrl, qs.stringify(postData), {
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
  const [userInfo, setUserInfo] = useState(undefined)
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem('loggedIn')) === true
  )
  const [token, setToken] = useState(localStorage.getItem('token'))

  const createRegisterUser = async (info) => {
    await registerUser(info.name, info.email, info.password)
  }

  const logProfile = async (info) => {
    const data = await loginUser(info.email, info.password)
    localStorage.setItem('loggedIn', true)
    setLoggedIn(true)
    setToken(data['token'])
    localStorage.setItem('token', data['token'])
  }

  useEffect(() => {
    localStorage.setItem('guest', guest)

    if (token !== null) {
      const fetchData = async () => {
        const data = await fetchUserByToken(token)

        setUserInfo(data)
      }
      if (guest) {
        fetchData().catch(console.error)
      }
    } else {
      const fetchData = async () => {
        const data = await fetchUsers()

        setUserInfo(data['guest'])
        setToken(data['token'])
        localStorage.setItem('token', data['token'])
      }
      if (guest) {
        fetchData().catch(console.error)
      }
    }
  }, [guest, token])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserByToken(token)
      setUserInfo(data)
    }
    if (loggedIn && !guest) {
      fetchData().catch(console.error)
    }
  }, [token])

  const activateGuest = () => {
    localStorage.setItem('guest', true)
    localStorage.setItem('loggedIn', true)
    setGuest(true)
    setLoggedIn(true)
  }

  const logout = () => {
    localStorage.setItem('guest', false)
    localStorage.setItem('loggedIn', false)
    setLoggedIn(false)
    setGuest(false)
  }

  return (
    <UserContext.Provider
      value={{
        guest,
        activateGuest,
        logout,
        userInfo,
        loggedIn,
        createRegisterUser,
        logProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
