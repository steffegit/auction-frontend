import React from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
  return (
    <div className="flex flex-col p-5 py-20 max-w-7xl mx-auto rounded-sm">
      <div className="text-3xl font-bold self-center mb-10">Register</div>
      <form className="flex flex-col space-y-14 max-w-xl mx-auto">
        <div className="space-y-4">
          <input
            type="email"
            placeholder="mail@mail.com"
            className="w-full p-3 rounded-md border border-slate-400 focus:outline-none focus:border-slate-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-md border border-slate-400 focus:outline-none focus:border-slate-500"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 rounded-md border border-slate-400 focus:outline-none focus:border-slate-500"
          />
        </div>
        <button
          type="submit"
          className="py-3 bg-secondary font-medium rounded-md text-white hover:bg-primary transition-all"
        >
          Register
        </button>
      </form>
      <div className="flex justify-center mt-10 text-gray-400">
        Already have an account?&nbsp;
        <a href="/login" className="text-blue-500 font-bold hover:underline">
          Login
        </a>
      </div>
    </div>
  )
}

export default Register
