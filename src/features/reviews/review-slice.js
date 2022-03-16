import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { reviewService } from './review-service'

export const createReview = createAsyncThunk(
  'review/create',
  async (reviewData, thunk) => {
    const token = thunk.getState().auth.user.token

    const data = await reviewService.createReview(reviewData, token)

    console.log(data)

    if (
      data.message === ('fail' || 'error' || 'jwt expired') ||
      data.status === 'fail'
    ) {
      // console.log(data)
      // if the user token has expired then automatically log the user out
      localStorage.removeItem('user')
      return thunk.rejectWithValue(data)
    }

    // console.log(data)

    return data
  }
)

export const getReviews = createAsyncThunk(
  'review/get',
  async (movieId, thunk) => {
    // console.log(movieId)
    const data = await reviewService.getReviews(movieId)

    // console.log(data)

    if (data.status === ('fail' || 'error')) {
      thunk.rejectWithValue(data.message)
    }

    // console.log(data)

    return data
  }
)

const initialState = {
  loading: true,
  isSuccess: false,
  isError: false,
  review: {},
  reviews: [],
  message: ''
}

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = true
      state.isError = false
      state.isSuccess = false
      state.review = {}
      state.reviews = []
      state.message = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.pending, (state) => {
        state.loading = true
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.loading = false
        state.message = action.payload
        state.isError = true
      })
      .addCase(getReviews.fulfilled, (state, action) => {
        state.loading = false
        // state.isSuccess = true
        state.reviews = action.payload
      })
  }
})

export const { reset } = reviewSlice.actions
export default reviewSlice.reducer
