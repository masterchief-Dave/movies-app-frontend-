import styles from './home.module.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { reset, getMovies } from './../features/movies/movies-slice'
import { useEffect } from 'react'
import logo1 from './../img1.jpg'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
  const movies = useSelector((state) => state.movie)
  const dispatch = useDispatch()

  // console.log(movies)
  useEffect(() => {
    dispatch(getMovies())
    dispatch(reset())
  }, [])

  const dataElements =
    movies?.movies.data?.movies &&
    movies.movies.data.movies.map((el) => {
      return (
        <div className={styles.movies_obj} key={el._id}>
          <div className={styles.img_container}>
            <img
              className="object-cover"
              src={logo1}
              alt="Man looking at item at a store"
            />
          </div>

          <div className={styles.movies_desc}>
            <div
              className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
              id={styles.movie_title}
            >
              {el.title}
            </div>

            <p
              className="mt-2 text-slate-500 text-sm"
              id={styles.movie_summary}
            >
              {el.storyline.substring(0, 100)}...
            </p>

            <Link to={`/movies/${el._id}`} className={styles.movies_link}>
              <button className={styles.btn_link} id={styles.btn}>more ...</button>
            </Link>
          </div>
        </div>
      )
    })

  return (
    <>
      <Header />
      <div className={styles.home}>
        <div className={styles.home_container}>
          <div className={styles.query}>
            <h2 id={styles.filter_title}> Filter </h2>
            <div className={styles.filter}>
              <button className={styles.btn_link}> Comedy </button>
              <button className={styles.btn_link}> Adventure </button>
              <button className={styles.btn_link}> Anime </button>
              <button className={styles.btn_link}> Drama </button>
              <button className={styles.btn_link}> Fantasy </button>
              <button className={styles.btn_link}> Adventure </button>
            </div>
          </div>
          <div className={styles.movies}>{dataElements}</div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
