import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/auth-slice'

const Header = () => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate(0)

  const handleClick = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  // console.log(user?.data.user?.name)
  // console.log(user)
  const initial = user && user?.data.user?.name.split(' ')[0][0]
  // console.log(initial)
  return (
    <>
      <div className="navbar ">
        <div className="flex-1">
          <Link
            to="/"
            className="normal-case text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-extrabold "
          >
            MOVIES 🍿
          </Link>
        </div>
        <div className="flex-none">
          {user?.message === 'success' ? (
            <>
              <Link to="/">
                <button className="mr-5 btn btn-sm" onClick={handleClick}>
                  {' '}
                  Logout{' '}
                </button>
              </Link>

              <Link to={`/user/${user?.data.user._id}/settings`}>
                <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                    <span className='text-xs'> {initial} </span>
                  </div>
                </div>
              </Link>
            </>
          ) : (
            <>
              {' '}
              <Link to="/login">
                <button className="btn btn-sm mr-5  font-extrabold shadow-lg">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="mr-5 btn-sm btn font-extrabold shadow-lg">
                  {' '}
                  Register{' '}
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Header
