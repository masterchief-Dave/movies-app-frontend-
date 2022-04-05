import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signup, reset } from '../features/auth/auth-slice'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

function Register() {
  const dispatch = useDispatch()
  const {   isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  useEffect(() => {
    if (isError) {
      toast.error(message)
      dispatch(reset())
    }

    if (isSuccess) {
      toast.success('Created successfully')
      dispatch(reset())
      navigate('/')
    }
  }, [isError, isSuccess, dispatch, message, navigate])

  const handleClick = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('clicked')
    if (formData.password !== formData.confirmPassword) {
      return toast.error('passwords do not match')
    }

    const userData = {
      name: formData.username,
      email: formData.email,
      password: formData.password,
      passwordConfirm: formData.confirmPassword
    }
    dispatch(signup(userData))
  }
  return (
    <>
    <Header text='register'/>
      <div className="w-full mt-10 max-w-md mx-auto">
        <h1 className="text-center font-bold text-lg">Register</h1>

        <form
          className="w-full max-w-lg"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                type="name"
                placeholder="Firstname Lastname"
                name="username"
                onChange={handleClick}
                value={formData.username}
              />
            </div>
          </div>

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
                onChange={handleClick}
                value={formData.email}
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
                onChange={handleClick}
                value={formData.password}
              />
              {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={handleClick}
                value={formData.confirmPassword}
              />
              {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
            
          </div>
        </form>
      </div>
    </>
  )
}

export default Register
