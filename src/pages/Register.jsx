import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signup, reset } from '../features/auth/auth-slice'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

function Register() {
    const dispatch = useDispatch()
    const { loading, isError, isSuccess, message } = useSelector(state => state.auth)
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

    }, [isError, isSuccess])

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
            <div className="w-full mt-10 max-w-md mx-auto">
                <h1 className="text-center font-bold text-lg">Register</h1>
                <form className="rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit} autoComplete='off'>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="name" placeholder="Name" name='username' onChange={handleClick} value={formData.username} />
                    </div>

                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" name='email' onChange={handleClick} value={formData.email} />
                    </div>

                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="password" name='password' onChange={handleClick} value={formData.password} />
                        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                    </div>

                    <div className="mb-6">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirmPassword" type="password" placeholder="Confirm Password" name='confirmPassword' onChange={handleClick} value={formData.confirmPassword} />
                        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                    </div>

                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Register
                        </button>
                        {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a> */}
                    </div>
                </form>

            </div></>
    )
}

export default Register