import React, { useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'

function TopBar() {
  let navigate = useNavigate()

  return (
    <div className="flex flex-col p-5 w-screen border border-gray-300 border-t-0 space-y-4">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold">
          <a href="/">AuctionaX</a>
        </div>
        <div className="flex items-center space-x-2">
          {/* ADD ITEM */}
          <button
            type="button"
            className="flex p-2 rounded-md bg-sky-200 hover:bg-sky-400 border border-slate-300 space-x-2 transition-all"
            onClick={() => navigate('/post')}
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            <div className="font-medium">List Item</div>
          </button>
          {/* USER ACC  */}
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button
              type="button"
              className="p-2 rounded-md hover:bg-gray-100 border border-slate-300"
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
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-md ring-1 ring-black ring-opacity-10 focus:outline-none z-10">
                <div className="px-1 py-1 space-y-1">
                  <Menu.Item>
                    <button
                      type="button"
                      className="hover:bg-gray-100 text-black group flex w-full items-center rounded-md px-2 py-2 text-sm space-x-2"
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
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        />
                      </svg>
                      <div>Login</div>
                    </button>
                  </Menu.Item>
                  <Menu.Item>
                    <button
                      type="button"
                      className="hover:bg-gray-100 text-black group flex w-full items-center rounded-md px-2 py-2 text-sm space-x-2"
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
                          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                        />
                      </svg>
                      <div>Sign Up</div>
                    </button>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      {/* SEARCH INPUT */}
      <div>
        <label className="relative block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
            className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search anything from here"
            className="pl-12 w-full p-2 outline-none border border-slate-300 rounded-md focus:border-sky-500 font-medium"
          />
        </label>
      </div>
    </div>
  )
}

export default TopBar
