import React from 'react'

function FormFooter() {
  return (
    <div className="flex space-x-10 mx-auto">
      <button className="p-2 bg-red-600 hover:bg-red-700 text-white border rounded-full px-4">
        Prev
      </button>
      <button className="p-2 bg-green-500 hover:bg-green-600 text-white border rounded-full px-4">
        Next
      </button>
    </div>
  )
}

export default FormFooter
