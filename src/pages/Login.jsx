import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { UserContext } from '../components/Context/UserContext'

function Login() {
  const { activateGuest, logProfile } = useContext(UserContext)
  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

  return (
    <div className="flex flex-col p-5 py-20 max-w-7xl mx-auto rounded-sm">
      <div className="text-3xl font-bold self-center mb-10">Login</div>
      <form
        className="flex flex-col space-y-14 max-w-xl mx-auto w-full"
        onSubmit={handleSubmit((data) => {
          logProfile(data)
          navigate('/', { replace: true })
        })}
      >
        <div className="space-y-4">
          <div className="w-full space-y-1">
            <label htmlFor="email">Email</label>
            <input
              {...register('email')}
              type="email"
              name="email"
              placeholder="johndoe@mail.com"
              className="w-full p-3 rounded-md border border-slate-400 focus:outline-none focus:border-slate-500"
            />
          </div>
          <div className="w-full space-y-1">
            <label htmlFor="password">Password</label>
            <input
              {...register('password')}
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 rounded-md border border-slate-400 focus:outline-none focus:border-slate-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="py-3 bg-secondary font-medium rounded-md text-white hover:bg-primary transition-all"
        >
          Login
        </button>
      </form>
      <div className="flex mt-2 items-center justify-center">
        <a
          href="#forgot"
          className="hover:underline text-gray-400 hover:text-black transition-all duration-75"
        >
          Forgot your password?
        </a>
      </div>
      <div className="flex flex-col sm:flex-row text-center justify-center mt-10">
        Don't have an account?&nbsp;
        <div>
          <a
            href="/register"
            className="text-blue-500 font-bold hover:underline"
          >
            Register
          </a>
          &nbsp;or&nbsp;
          <button
            className="hover:underline text-green-700 font-bold"
            onClick={() => {
              activateGuest()
              // TODO: Make this prettier
              alert('You are now logged in as a guest')
              navigate('/', { replace: true })
            }}
          >
            Login as Guest
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
