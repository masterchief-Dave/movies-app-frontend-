import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../features/auth/auth-slice"

const Header = () => {
    const { user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate(0)

    const handleClick = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    console.log(user)
    return (
        <>
            <div className="navbar mb-20">
                <div className="flex-1">
                    <Link to='/' className="normal-case text-xl" style={{ fontFamily: 'Shizuru, cursive', fontSize: '25px' }}>
                        MOVIES
                    </Link>
                </div>
                <div className="flex-none">
                    {user?.message === 'success' ? <Link to='/' >
                        <button className="mr-5 btn" onClick={handleClick}> Logout </button>
                    </Link> : <> <Link to='/login'>
                        <button className="btn mr-5">
                            Login
                        </button>
                    </Link>
                        <Link to='/register' >
                            <button className="mr-5 btn"> Register </button>
                        </Link></>}

                </div>
            </div>
        </>
    )
}

export default Header