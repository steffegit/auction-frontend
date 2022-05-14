import React from 'react'
import SoldItemCard from '../Cards/SoldItemCard'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

function ContainerSoldItem() {
  return (
    <div className="flex flex-col mt-2 p-5 space-y-8">
      <div className="flex items-center justify-end">
        <h1 className="text-3xl sm:text-5xl font-bold">Sold Items</h1>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <SoldItemCard />
        <SoldItemCard />
        <SoldItemCard />
        <SoldItemCard />
      </div>
    </div>
  )
}

export default ContainerSoldItem
