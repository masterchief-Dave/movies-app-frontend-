import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './profile.module.css'
import { GoGear } from 'react-icons/go'
import { MdRateReview } from 'react-icons/md'
import { IoIosCreate } from 'react-icons/io'
import { useSelector, useDispatch } from 'react-redux'
import { updatePassword, reset } from './../features/auth/auth-slice'
import {
  createMovies,
  reset as resetMovies
} from './../features/movies/movies-slice'
// import {}

function Profile() {
  const password1 = useRef()
  const password2 = useRef()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const [displaySettings, setDisplaySettings] = useState(true)
  const [displayReviews, setDisplayReviews] = useState(false)
  const [displayMovies, setDisplayMovies] = useState(false)
  const [editPassword, setEditPassword] = useState(true)
  const [disableSavebtn, setDisableFormBtn] = useState(true)
  const [formPasswordData, setFormPasswordData] = useState({
    password: '',
    newPassword: ''
  })
  const [createFormData, setCreateFormData] = useState({
    title: '',
    genre: '',
    year: '',
    cast: '',
    storyline: '',
    directors: ''
  })

  let path

  // console.log(user.data.user._id)
  useEffect(() => {
    path = window.location.href.split('/')
    // console.log('refresh')
    if (path[5] === 'settings') {
      setDisplaySettings(true)
      setDisplayReviews(false)
      setDisplayMovies(false)
    } else if (path[5] === 'create') {
      setDisplaySettings(false)
      setDisplayReviews(false)
      setDisplayMovies(true)
    } else if (path[5] === 'reviews') {
      setDisplaySettings(false)
      setDisplayReviews(true)
      setDisplayMovies(false)
    }
  }, [path])

  function handleClick(e) {
    e.preventDefault()
    // console.log(e.target.href)
    const pathname = e.target.href.split('/')

    if (pathname[5] === 'settings') {
      setDisplaySettings(true)
      setDisplayReviews(false)
      setDisplayMovies(false)
    } else if (pathname[5] === 'create') {
      setDisplaySettings(false)
      setDisplayReviews(false)
      setDisplayMovies(true)
    } else if (pathname[5] === 'reviews') {
      setDisplaySettings(false)
      setDisplayReviews(true)
      setDisplayMovies(false)
    }

    // console.log('displaySettings', displaySettings)
    // console.log('displayMovies', displayMovies)
    // console.log('displayReviews', displayReviews)
  }

  function handleSubmitProfile(e) {
    e.preventDefault()
  }

  function handlePassword(e) {
    e.preventDefault()
    setEditPassword((prev) => !prev)
    password1.current.focus()
    // console.log(editPassword)
    // console.log('change password btn clicked')
  }

  function handlePasswordData(e) {
    setFormPasswordData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  function handleSubmitPassword(e) {
    e.preventDefault()
    // console.log('submit data')
    // console.log(formPasswordData)
    setEditPassword((prev) => !prev)
    dispatch(updatePassword(formPasswordData))
    dispatch(reset())
    // setFormPasswordData((prev) => {

    // })
    formPasswordData.password2.value = ''
  }

  function handleCreateMovie(e) {
    setCreateFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  function handleSubmitCreateMovie(e) {
    e.preventDefault()
    // dispatch some code here
    dispatch(createMovies(createFormData))
    dispatch(resetMovies())
  }

  // console.log(createFormData)

  return (
    <div id={styles.user}>
      <div id={styles.user_profile} className="shadow-2xl">
        <div id={styles.user_profile_menu}>
          <ul className="menu  w-56 p-2 rounded-box">
            <li>
              <Link
                to={`/user/${user?.data?.user._id}/settings`}
                onClick={handleClick}
              >
                <GoGear />
                SETTINGS
              </Link>
            </li>
            <li>
              <Link
                to={`/user/${user?.data?.user._id}/reviews`}
                onClick={handleClick}
              >
                <MdRateReview />
                MY REVIEWS
              </Link>
            </li>
            <li>
              <Link
                to={`/user/${user?.data?.user._id}/create`}
                onClick={handleClick}
              >
                <IoIosCreate />
                CREATE MOVIES
              </Link>
            </li>
          </ul>
        </div>
        <div id={styles.user_profile_content}>
          <div id={styles.sage}>
            <div
              id={styles.user_settings}
              className={
                displaySettings
                  ? styles.user_display_block
                  : styles.user_display_none
              }
            >
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-extrabold">
                {' '}
                YOUR ACCOUNT SETTINGS
              </h1>
              <form
                action="/user/:id/changeprofile"
                className="w-full max-w-lg"
                autoComplete="off"
                onSubmit={handleSubmitProfile}
              >
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="user_name"
                    >
                      Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="user_name"
                      type="text"
                      placeholder="Name"
                      name="username"
                      disabled
                      value={user?.data?.user.name}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="user_email"
                    >
                      Email Address
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="user_email"
                      type="email"
                      placeholder="Email"
                      name="email"
                      disabled
                      value={user?.data?.user.email}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Edit Settings
                  </button>

                  {/* <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Save
                  </button> */}
                </div>
              </form>
              <hr style={{ marginTop: '30px', marginBottom: '30px' }} />

              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-extrabold">
                CHANGE PASSWORD
              </h1>

              <form
                className="w-full max-w-lg"
                autoComplete="off"
                onSubmit={handleSubmitPassword}
              >
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="current_password"
                    >
                      Current Password
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="current_password"
                      type="password"
                      placeholder="Current Password"
                      name="password"
                      disabled={editPassword}
                      value={FormData.password}
                      onChange={handlePasswordData}
                      ref={password1}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="new_password"
                    >
                      New Password
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="new_password"
                      type="password"
                      placeholder="New Password"
                      name="newPassword"
                      disabled={editPassword}
                      value={FormData.newPassword}
                      onChange={handlePasswordData}
                      ref={password2}
                    />
                  </div>
                </div>

                <div
                  className="flex items-center justify-between"
                  id={styles.password_btn}
                >
                  <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="reset"
                    onClick={handlePassword}
                    id={styles.password_editbtn}
                  >
                    {editPassword ? 'Edit Password' : 'Cancel'}
                  </button>

                  <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    id={styles.password_savebtn}
                    disabled={editPassword}
                  >
                    Save Password
                  </button>
                </div>
              </form>
            </div>
            <div
              id={styles.user_reviews}
              className={
                displayReviews
                  ? styles.user_display_block
                  : styles.user_display_none
              }
            >
              {' '}
              user reviews
            </div>
            <div
              id={styles.admin_user_create}
              className={
                displayMovies
                  ? styles.user_display_block
                  : styles.user_display_none
              }
            >
              <h1 className="block text-sm font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-extrabold">
                {' '}
                CREATE NEW MOVIES{' '}
              </h1>
              <form
                className="w-full max-w-lg"
                onSubmit={handleSubmitCreateMovie}
                autoComplete="off"
              >
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-title"
                    >
                      Title
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-title"
                      type="text"
                      placeholder="Pirates of the Caribbean"
                      name="title"
                      value={createFormData.title}
                      onChange={handleCreateMovie}
                    />
                    {/* <p className="text-gray-600 text-xs italic">
                      Make it as long and as crazy as you'd like
                    </p> */}
                  </div>
                </div>
                {/* this is for the genre and the year */}
                <div className="flex flex-wrap mb-6 -mx-3">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-genre"
                    >
                      Genre
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-genre"
                        name="genre"
                        value={createFormData.genre}
                        onChange={handleCreateMovie}
                      >
                        <option value="" defaultValue="">
                          Genre
                        </option>

                        <option value="comedy">Comedy</option>
                        <option value="adventure">Adventure</option>
                        <option value="anime">Anime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="drama">Drama</option>
                        <option value="action">Action</option>
                        <option value="thriller">Thriller</option>
                        <option value="fiction">Fiction</option>
                        <option value="horror">Horror</option>
                        <option value="documentary">Documentary</option>
                        <option value="family">Family</option>
                        <option value="crime">Crime</option>
                        <option value="animation">Animation</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-year"
                    >
                      Release Year
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="date"
                      placeholder="2022"
                      name="year"
                      value={createFormData.year}
                      onChange={handleCreateMovie}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-cast"
                    >
                      Cast
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-cast"
                      type="text"
                      placeholder="Geoffrey Rush, Orlando Bloom"
                      name="cast"
                      value={createFormData.cast}
                      onChange={handleCreateMovie}
                    />
                    {/* <p className="text-gray-600 text-xs italic">
                      Make it as long and as crazy as you'd like
                    </p> */}
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-story"
                    >
                      Storyline
                    </label>
                    <textarea
                      className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"'
                      id="grid-story"
                      name="storyline"
                      value={createFormData.storyline}
                      onChange={handleCreateMovie}
                    />
                    {/* <p className="text-gray-600 text-xs italic">
                      Make it as long and as crazy as you'd like
                    </p> */}
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-directors"
                    >
                      Directors
                    </label>
                    <input
                      className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"'
                      placeholder="John Krasinksi"
                      id="grid-directors"
                      name="directors"
                      value={createFormData.directors}
                      onChange={handleCreateMovie}
                    />
                    {/* <p className="text-gray-600 text-xs italic">
                      Make it as long and as crazy as you'd like
                    </p> */}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
