import styles from './movie.module.css'

import React from 'react'

function Movie() {
  return (
    <div className={styles.movies}>
      <div className={styles.movie_obj}>
        <img
          className="object-cover"
          src="http://via.placeholder.com/640x360"
          alt="Man looking at item at a store"
        />
        <div className="movie_details">
          <h1>
            {' '}
            <span>Title: </span> The Office <span> (Comedy, Sitcom)</span>
          </h1>
          <h2>Year: 2005</h2>
          <h3>
            {' '}
            <span>Directors: </span> Greg Daniels, Ricky Garvis
          </h3>
          <p>
            <span> Cast: </span> John Krasinski, Rainn Wilson, Steve Carell
          </p>
          <p className="text-sm ">
            <span>Storyline:</span> A mediocre paper company in the hands of
            Scranton, PA branch manager Michael Scott. This mockumentary follows
            the everyday lives of the manager and the employees he manages. The
            crew follows the employees around 24/7 and captures their quite
            humorous and bizarre encounters as they will do what it takes to
            keep the company thriving"
          </p>
        </div>
      </div>

      <div className="movie-reviews">
        <h1 className={styles.movie_review_title}>Movie Reviews</h1>
        <div className={styles.user_reviews}>
          <div className={styles.movie_review_user}>
            <h3 className=" ">
              (David Bodunrin) (@ 29th sept, 2022)
            </h3>
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
            Temporibus suscipit voluptatibus natus, beatae ad, sint asperiores
            et amet dolores nam, nihil quo ipsum praesentium nemo nostrum
            ratione eveniet reprehenderit quis fugit perferendis officia? Eius,
            temporibus. Fugiat, architecto recusandae? Aspernatur consequatur
            debitis magni eveniet et iste dignissimos facilis at laudantium
            beatae! Fuga ipsum nemo perspiciatis impedit tenetur debitis. A
            itaque hic exercitationem corrupti praesentium culpa! Ex accusamus
            enim libero? Recusandae omnis a repellendus officiis consequatur
            doloremque officia, adipisci architecto dolorum soluta consequuntur
            saepe perferendis aut molestiae quaerat! Quis ut molestias
            voluptatibus? Veniam iste non, consequatur ea quisquam assumenda
            ipsa.{' '}
          </p>
        </div>
        <div className="new_review">
          <h2 className="text-sm">
            What do you think 🤔?{' '}
            <button className="btn btn-xs btn-primary" disabled>
              {' '}
              Add review +{' '}
            </button>
          </h2>
          <div class="rating block">
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              class="mask mask-star-2 bg-orange-400"
            />
          </div>
          <textarea
            class="textarea textarea-bordered"
            placeholder="Review 350 characters"
          ></textarea>
        </div>
      </div>
    </div>
  )
}

export default Movie
