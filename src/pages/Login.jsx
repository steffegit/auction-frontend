import React from 'react'

function Login() {
  return (
    <div className="flex flex-col p-5 py-20 max-w-7xl mx-auto rounded-sm">
      <div className="text-3xl font-bold self-center mb-10">Login</div>
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
        </div>
        <button
          type="submit"
          className="py-3 bg-secondary font-medium rounded-md text-white hover:bg-primary"
        >
          Login
        </button>
      </form>
      <div className="flex mt-2 items-center justify-center">
        <a
          href="#forgot"
          className="hover:underline text-gray-400 hover:text-black"
        >
          Forgot your password?
        </a>
      </div>
    </div>
  )
}

export default Login
