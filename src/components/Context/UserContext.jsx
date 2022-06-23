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
  const [guestToken, setGuestToken] = useState(
    localStorage.getItem('guestToken')
  )
  const [userToken, setUserToken] = useState(localStorage.getItem('userToken'))

  const createRegisterUser = async (info) => {
    await registerUser(info.name, info.email, info.password)
  }

  const logProfile = async (info) => {
    const data = await loginUser(info.email, info.password)
    localStorage.setItem('loggedIn', true)
    setLoggedIn(true)
    setUserToken(data['token'])
    localStorage.setItem('userToken', data['token'])
  }

  useEffect(() => {
    localStorage.setItem('guest', guest)

    if (guestToken !== null) {
      const fetchData = async () => {
        const data = await fetchUserByToken(guestToken)

        setUserInfo(data)
      }
      if (guest) {
        fetchData().catch(console.error)
      }
    } else {
      const fetchData = async () => {
        const data = await fetchUsers()

        setUserInfo(data['guest'])
        setGuestToken(data['token'])
        localStorage.setItem('guestToken', data['token'])
      }
      if (guest) {
        fetchData().catch(console.error)
      }
    }
  }, [guestToken])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserByToken(userToken)
      setUserInfo(data)
    }
    if (loggedIn && !guest) {
      fetchData().catch(console.error)
    }
  }, [userToken])

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
