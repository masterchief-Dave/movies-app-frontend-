import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { reset, login } from './../features/auth/auth-slice'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {Link} from 'react-router-dom'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const dispatch = useDispatch()
  const { isSuccess, isError, message } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (isSuccess) {
      toast.success('Login successful')
      dispatch(reset())
      navigate('/')
    }

    if (isError) {
      toast.error(message)
      dispatch(reset())
    }
  }, [isSuccess, isError, message, dispatch, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(login(formData))
  }

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }
  return (
    <>
      <div className="w-full mt-10 max-w-md mx-auto">
        <h1 className="text-center font-bold text-lg">Login</h1>

        <form className="w-full max-w-lg" onSubmit={handleSubmit} autoComplete='off'>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="password"
                type="password"
                placeholder="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to='/forgot'
            >
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
