import React, { useState, Fragment, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'
import axios from 'axios'

const apiPath = 'https://auction-website89.herokuapp.com/main'

function TopBar() {
  let navigate = useNavigate()

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [showHambuger, setShowHambuger] = useState(false)

  const fetchData = async () => {
    try {
      const res = await axios.get(apiPath)
      setData(res.data)
      setError(null)
    } catch (err) {
      setError(err.message)
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="flex flex-col p-5 w-full space-y-4">
      <div className="flex justify-between items-center">
        <div className="text-xl sm:text-3xl font-bold">
          <a href="/">AuctionaX</a>
        </div>
        <div className="flex items-center space-x-2">
          {/* USER ACC  */}
          <div>
            <button
              type="button"
              className="p-2 rounded-md hover:bg-gray-200"
              onClick={() => navigate('/login')}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>
          {/* HAMBURGER */}
          <div className="flex items-center">
            {!showHambuger ? (
              <button
                type="button"
                onClick={() => setShowHambuger(true)}
                className="p-1 rounded-md hover:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowHambuger(false)}
                className="p-1 rounded-md hover:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
      <Transition
        as={Fragment}
        show={showHambuger}
        enter="transition ease-in-out duration-500"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-250"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="flex flex-col bg-white justify-around items-end space-y-2 text-xl font-semibold pb-2">
          <a href="#categories" className="hover:underline">
            Categories
          </a>
          <a href="#deals" className="hover:underline">
            Deals
          </a>
          <a href="/post" className="hover:underline">
            List Item
          </a>
          <a href="#help" className="hover:underline">
            Help
          </a>
        </div>
      </Transition>
      <SearchBar items={data} loading={loading} />
    </div>
  )
}

export default TopBar
