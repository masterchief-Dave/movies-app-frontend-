import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { reviewService } from './review-service'

const createReview = createAsyncThunk('review/create', async (data, thunk) => {
  const data = await reviewService.createReview(data)

  if (data.message === ('fail' || 'error')) {
    return thunk.rejectWithValue(data.message)
  }

  return data
})

const initialState = {
  loading: true,
  isSuccess: true,
  isError: true,
  review: {},
  reviews: [],
  message: ''
}

const reviewSlice = createSlice({
  name: review,
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = true
      state.isError = true
      state.isSuccess = true
      state.review = {}
      state.reviews = []
      state.message = ''
    }
  },
  extraReducers: (builder) => {}
})
