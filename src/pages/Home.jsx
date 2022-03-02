import styles from './home.module.css'
import { Link } from 'react-router-dom'
function Home() {
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
        <div className={styles.movies}>
          <div className={styles.movies_obj}>
            <img
              className="object-cover"
              src="http://via.placeholder.com/640x360"
              alt="Man looking at item at a store"
            />

            <div className={styles.movies_desc}>
              <div
                className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
                id={styles.movie_title}
              >
                Cobra Kai
              </div>

              <p
                className="mt-2 text-slate-500 text-sm"
                id={styles.movie_summary}
              >
                Getting a new business off the ground is a lot of hard work.
              </p>

              <Link to="/movies/:{id}">
                <button className="btn btn-primary">more ...</button>
              </Link>
            </div>
          </div>

          <div className={styles.movies_obj}>
            <img
              className="object-cover"
              src="http://via.placeholder.com/640x360"
              alt="Man looking at item at a store"
            />

            <div className={styles.movies_desc}>
              <div
                className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
                id={styles.movie_title}
              >
                Cobra Kai
              </div>

              <p
                className="mt-2 text-slate-500 text-sm"
                id={styles.movie_summary}
              >
                Getting a new business off the ground is a lot of hard work.
              </p>

              <Link to="/movies/:{id}">
                <button className="btn btn-primary">more ...</button>
              </Link>
            </div>
          </div>

          <div className={styles.movies_obj}>
            <img
              className="object-cover"
              src="http://via.placeholder.com/640x360"
              alt="Man looking at item at a store"
            />

            <div className={styles.movies_desc}>
              <div
                className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"
                id={styles.movie_title}
              >
                Cobra Kai
              </div>

              <p
                className="mt-2 text-slate-500 text-sm"
                id={styles.movie_summary}
              >
                Getting a new business off the ground is a lot of hard work.
              </p>

              <Link to="/movies/:{id}">
                <button className="btn btn-primary">more ...</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
