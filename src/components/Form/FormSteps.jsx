import React, { useState } from 'react'

const steps = ['Pick Up', 'Financing', 'Bid Amount', 'Deposit Fee']

function FormSteps({ page, setPage }) {
  return (
    <div className="mx-4 p-4 flex justify-between items-center mb-10">
      <div className="w-full flex justify-center items-center sm:space-x-6">
        {steps.map((item, idx) => (
          <a
            type="button"
            key={idx}
            onClick={() => {
              setPage(idx)
            }}
            className={`relative flex flex-col items-center text-gray-500 transition-all hover:cursor-pointer`}
          >
            <div
              className={`rounded-full transition duration-500 ease-in-out border-2 ${
                page == idx ? 'bg-slate-500 text-white' : 'border-gray-300'
              } h-12 w-12 flex items-center justify-center py-3`}
            >
              {idx + 1}
            </div>
            <div className="text-center mt-4 w-20 text-xs font-medium uppercase">
              {item}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default FormSteps
