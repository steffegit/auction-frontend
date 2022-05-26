import React from 'react'

function Login() {
  return (
    <div className="flex flex-col p-5 max-w-7xl bg-bgColor m-5 rounded-sm">
      <div className="text-3xl font-bold self-center mb-10">Login</div>
      <form className="flex flex-col space-y-14">
        <div className="space-y-4">
          <input
            type="email"
            placeholder="mail@mail.com"
            className="w-full p-3 rounded-md shadow-md border border-slate-400 focus:outline-none focus:border-slate-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-md shadow-md border border-slate-400 focus:outline-none focus:border-slate-500"
          />
        </div>
        <button
          type="submit"
          className="py-3 bg-slate-400 font-medium rounded-md text-black hover:bg-slate-200 hover:outline hover:outline-black transition-all"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
