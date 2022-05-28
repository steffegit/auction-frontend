import React, { useState, Fragment } from 'react'
import { Transition } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'

import { SiteContext } from './Context/Context'
import { useContext } from 'react'

function TopBar() {
  const navigate = useNavigate()

  const { allCars } = useContext(SiteContext)

  const [showHambuger, setShowHambuger] = useState(false)

  return (
    <div className="flex flex-col p-3 py-5 max-w-7xl mx-auto space-y-4">
      <div className="flex items-center sm:py-4">
        <div className="text-xl sm:text-3xl font-bold">
          <a href="/">AuctionaX</a>
        </div>
        <div className="flex w-full justify-center">
          <div className="flex items-center space-x-2">
            <div className="hidden sm:flex space-x-8 justify-around items-end space-y-2 text-xl pb-2 mr-4">
              <a href="#categories" className="hover:underline">
                Categories
              </a>
              <a href="#deals" className="hover:underline">
                Deals
              </a>
              <a href="#specials" className="hover:underline">
                Specials
              </a>
              <a href="#help" className="hover:underline">
                Help
              </a>
            </div>
            {/* USER ACC  */}
          </div>
        </div>
        <div className="flex space-x-2">
          <div>
            <button
              type="button"
              className="flex items-center space-x-2 sm:px-4 sm:py-2 p-2 pl-0 sm:pl-4 rounded-md bg-red-500 text-white hover:bg-red-700 transition-all"
              onClick={() => navigate('/post')}
            >
              <div className="hidden sm:block text-xl font-semibold">Post</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div>
            <button
              type="button"
              className="flex items-center space-x-2 p-2 sm:px-4 sm:py-2 pl-0 sm:pl-4 rounded-md bg-secondary text-white hover:bg-blue-500 transition-all"
              onClick={() => navigate('/login')}
            >
              <div className="hidden sm:block text-xl font-semibold">Login</div>
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
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setShowHambuger(true)}
              className="p-2 rounded-md hover:bg-gray-200 border border-slate-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
          </div>
        </div>
      </div>
      <Transition
        as={Fragment}
        show={showHambuger}
        enter="transition ease-in-out duration-800"
        enterFrom="transform opacity-0 translate-x-[999px]"
        enterTo="transform opacity-100 translate-x-0"
        leave="transition ease-in duration-800"
        leaveFrom="transform opacity-100 translate-x-0"
        leaveTo="transform opacity-0 translate-x-[999px]"
      >
        <div className="h-[3000px] w-full absolute right-0 top-0 bottom-0 left-0 justify-start items-end z-30 flex flex-col bg-[#f2f4f5] space-y-2 text-xl font-semibold pr-4">
          <button
            type="button"
            onClick={() => setShowHambuger(false)}
            className="flex space-x-1 items-center p-2 rounded-md hover:bg-gray-200"
          >
            <p>Close</p>
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
          <div className="flex flex-col w-1/2 px-2 pl-4">
            <a
              href="#categories"
              className="hover:underline border-b border-slate-300 w-full text-right pt-4 pb-2"
            >
              Categories
            </a>
            <a
              href="#deals"
              className="hover:underline border-b border-slate-300 w-full text-right pt-4 pb-2"
            >
              Deals
            </a>
            <a
              href="/post"
              className="hover:underline border-b border-slate-300 w-full text-right pt-4 pb-2"
            >
              List Item
            </a>
            <a
              href="#help"
              className="hover:underline border-b border-slate-300 w-full text-right pt-4 pb-2"
            >
              Help
            </a>
          </div>
        </div>
      </Transition>
      <SearchBar items={allCars} />
    </div>
  )
}

export default TopBar
