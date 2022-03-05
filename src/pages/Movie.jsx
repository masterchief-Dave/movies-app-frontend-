import styles from './movie.module.css'

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMovie, reset } from './../features/movies/movies-slice'
import { useParams } from 'react-router-dom'

function Movie() {
  const [showReview, setShowReview] = useState(false)
  const { id } = useParams()
  const { movie } = useSelector((state) => state.movie)
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  // console.log(movie?.data?.movie)
  console.log(user)
  useEffect(() => {
    dispatch(getMovie(id))
    dispatch(reset)
  }, [id])

  return (
    <div id={styles.movies}>
      <div id={styles.movie_obj} className="shadow-xl">
        <img
          className="object-cover"
          src="http://via.placeholder.com/640x360"
          alt="Man looking at item at a store"
        />
        <div id={styles.movie_details}>
          <h1 className="text-md font-extrabold">
            {' '}
            <span className="font-extrabold">Title: </span>{' '}
            {movie?.data?.movie?.title}{' '}
            <span className="text-sm">
              {' '}
              (
              {movie?.data?.movie?.genre.map((el) => (
                <span className=" font-extrabold" id={styles.element}>
                  {' '}
                  {el}{' '}
                </span>
              ))}
              )
            </span>
          </h1>
          <h2 className="font-extrabold text-sm">
            Year: {new Date(movie?.data?.movie?.year).getFullYear()}
          </h2>
          <h3 className="text-sm">
            {' '}
            <span className="font-extrabold">Directors: </span>{' '}
            {movie?.data?.movie?.directors.map((el) => (
              <span id={styles.element} className=" font-extrabold">
                {' '}
                {el}{' '}
              </span>
            ))}
          </h3>
          <p className="text-sm">
            <span className="font-extrabold"> Cast: </span>{' '}
            {movie?.data?.movie?.cast.map((el) => (
              <span className=" font-extrabold" id={styles.element}>
                {el}{' '}
              </span>
            ))}
          </p>
          <p className="text-sm font-extrabold">
            <span className="font-extrabold">Storyline: </span>
            {movie?.data?.movie?.storyline}
          </p>
        </div>
      </div>

      <div className={styles.movie_reviews}>
        <h1 className={styles.movie_review_title}>Movie Reviews</h1>
        <div className={styles.user_reviews}>
          <div className={styles.movie_review_user}>
            <h3 className=" ">(David Bodunrin) (@ 29th sept, 2022) 💭💻</h3>
          </div>
          <p className={styles.movie_review_user_review}>
            {' '}
            this is a really good movie, I am quite impressed Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Voluptas maiores in et ut
            soluta officia sunt quaerat possimus illo, cum reprehenderit,
            nostrum quia asperiores error doloremque dolor laudantium
            consequatur reiciendis! Ullam nisi reprehenderit libero adipisci
            consectetur, tenetur vel ut, rem corrupti omnis optio deleniti
            veniam sit exercitationem! Obcaecati adipisci excepturi sapiente,
            iure aliquid ratione culpa sint animi recusandae velit magnam.
          </p>
        </div>
        <div className="new_review">
          <h2 className={styles.new_review_user}>What do you think 🤔? </h2>
          <form action="">
            <div className="rating" id={styles.rating}>
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Review 350 characters"
              id={styles.review}
            ></textarea>
            <button
              className="btn btn-xs btn-primary"
              disabled={user?.message === 'success' ? false : true}
              type='submit'
            >
              {' '}
              Add review +{' '}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Movie
