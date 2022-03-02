import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { reset, login } from './../features/auth/auth-slice'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'


function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const dispatch = useDispatch()
    const { isSuccess, isError, message } = useSelector(state => state.auth)
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
    }, [isSuccess, isError, message])

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
    return <>
        <div className="w-full mt-10 max-w-md mx-auto">
            <h1 className="text-center font-bold text-lg">Login</h1>
            <form className="rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>

                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" name='email' value={formData.email} onChange={handleChange} />
                </div>

                <div className="mb-6">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password" name='password' value={formData.password} onChange={handleChange} />
                    {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>

        </div>
    </>
}

export default Login