import React from 'react'

const steps = ['Pick Up', 'Financing', 'Bid Amount', 'Deposit Fee', 'Success']

function FormSteps() {
  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      <div className="w-full flex justify-center items-center sm:space-x-10">
        {steps.map((item, idx) => (
          <a
            href={`#step${idx}`}
            className={`relative flex flex-col items-center text-gray-500 transition-all`}
          >
            <div className="rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3">
              {idx}
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
