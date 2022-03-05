import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from '../features/movies/movies-slice'
import authSlice from './../features/auth/auth-slice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    movie: moviesSlice
  }
})
