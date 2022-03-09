import styles from './home.module.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { reset, getMovies } from './../features/movies/movies-slice'
import { useEffect } from 'react'
import logo1 from './../img1.jpg'

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
          <img
            className="object-cover"
            src={logo1}
            alt="Man looking at item at a store"
          />

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

            <Link to={`/movies/${el._id}`}>
              <button className="btn btn-primary">more ...</button>
            </Link>
          </div>
        </div>
      )
    })

  return (
    <>
      <div className={styles.home}>
        <div className={styles.query}>
          <h2 className={styles.filter_title}> Filter </h2>
          <div className={styles.filter}>
            <button className="btn btn-primary"> Comedy </button>
            <button className="btn btn-primary"> Adventure </button>
            <button className="btn btn-primary"> Anime </button>
            <button className="btn btn-primary"> Drama </button>
            <button className="btn btn-primary"> Fantasy </button>
            <button className="btn btn-primary"> Adventure </button>
          </div>
        </div>
        <div className={styles.movies}>{dataElements}</div>
      </div>
    </>
  )
}

export default Home
