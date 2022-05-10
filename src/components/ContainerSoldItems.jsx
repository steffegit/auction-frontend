import React from 'react'
import SoldItem from './SoldItem'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

function ContainerSoldItem() {
  return (
    <div className="flex flex-col mt-2 p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Sold Items</h1>
        <Menu as="div">
          <Menu.Button className="flex space-x-2 p-2 bg-black text-white hover:bg-gray-900 rounded-md border border-gray-400 shadow-md">
            <div>Today</div>
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
                d="M19 9l-7 7-7-7"
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
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
              <div className="p-1 space-y-1">
                <button
                  type="button"
                  className="hover:bg-gray-100 text-black group flex w-full items-center rounded-md px-2 py-2 text-sm space-x-2"
                >
                  Yesterday
                </button>
                <button
                  type="button"
                  className="hover:bg-gray-100 text-black group flex w-full items-center rounded-md px-2 py-2 text-sm space-x-2"
                >
                  A week ago
                </button>
                <button
                  type="button"
                  className="hover:bg-gray-100 text-black group flex w-full items-center rounded-md px-2 py-2 text-sm space-x-2"
                >
                  A month ago
                </button>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <SoldItem />
        <SoldItem />
        <SoldItem />
        <SoldItem />
      </div>
    </div>
  )
}

export default ContainerSoldItem
