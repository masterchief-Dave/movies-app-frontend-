import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/auth-slice'
import styles from './header.module.css'

const Header = (prop) => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate(0)

  const handleClick = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  console.log(prop.text)

  // console.log(user?.data.user?.name)
  // console.log(user)
  const initial = user && user?.data.user?.name.split(' ')[0][0]
  // console.log(initial)
  return (
    <>
      <header id={prop.text === undefined ? styles.header : styles.header_1}>
        <div className={styles.navbar}>
          <div className="flex-1">
            <Link
              to="/"
              className="normal-case text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-extrabold "
            >
              MOVIES 🍿
            </Link>
          </div>
          <div className="">
            {user?.message === 'success' ? (
              <div className={styles.at_login}>
                <Link to="/">
                  <button className={styles.btn} onClick={handleClick} id={styles.logout} >
                    {' '}
                    Logout{' '}
                  </button>
                </Link>

                <Link to={`/user/${user?.data.user._id}/settings`}>
                  <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                      <span className="text-xs"> {initial} </span>
                    </div>
                  </div>
                </Link>
              </div>
            ) : (
              <div className={styles.at_login}>
                {' '}
                <Link to="/login">
                  <button className={styles.btn} id={styles.login}>
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className={styles.btn} id={styles.register}>
                    {' '}
                    Register{' '}
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
