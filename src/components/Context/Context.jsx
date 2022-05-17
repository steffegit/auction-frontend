import axios from 'axios'
import React, { useState, createContext, useEffect } from 'react'

export const SiteContext = createContext({})

const fetchAPI = async () => {
  try {
    const res = await axios.get('https://auction-website89.herokuapp.com/main')

    return res.data
  } catch (error) {
    console.log(error)
    return null
  }
}

export const SiteContextProvider = ({ children }) => {
  const [promotedCars, setPromotedCars] = useState([])
  const [soldCars, setSoldCars] = useState([])
  const [currentCars, setCurrentCars] = useState([])

  useEffect(() => {
    const getCars = async () => {
      const cars = await fetchAPI()

      setPromotedCars(cars.filter((car) => car.promoted === true))
      setSoldCars(cars.filter((car) => car.sold === true))
      setCurrentCars(cars.filter((car) => !car.sold && !car.promoted))
    }

    getCars().catch(console.error)
  }, [])

  return (
    <SiteContext.Provider value={{ promotedCars, soldCars, currentCars }}>
      {children}
    </SiteContext.Provider>
  )
}
