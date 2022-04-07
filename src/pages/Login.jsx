import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { reset, login } from './../features/auth/auth-slice'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import styles from './login.module.css'
import Header from './../components/Header'
import Footer from './../components/Footer'
import login_img from './../img/login.svg'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const dispatch = useDispatch()
  const { isSuccess, isError, message } = useSelector((state) => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    console.log(isError, isSuccess)
    if (isSuccess) {
      // toast.success('Login successful')
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
      <Header text="login" />
      <div className="" id={styles.login_container}>
        <main id={styles.main}>
          <section id={styles.section_1}>
            <div id={styles.form_container}>
              <div id={styles.img_container}>
                {/* <img src={login} alt="login" id={styles.img} /> */}
              </div>
              <form id={styles.form} onSubmit={handleSubmit} autoComplete='off'>
                <img src={login_img} id={styles.login_img}/>
              <h1>Login</h1>
                <input
                  type="text"
                  placeholder="email"
                  className={styles.input_text}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  placeholder="password"
                  className={styles.input_text}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />

                <div id={styles.button_box}>
                  <button type="submit">submit</button>
                </div>
              </form>
            </div>
          </section>
        </main>
          <Footer />
      </div>
    </>
  )
}

export default Login
