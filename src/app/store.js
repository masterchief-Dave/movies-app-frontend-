import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from '../features/movies/movies-slice'
import authSlice from './../features/auth/auth-slice'
import reviewSlice from '../features/reviews/review-slice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    movie: moviesSlice,
    review: reviewSlice
  }
})
