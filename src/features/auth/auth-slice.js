import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { authService } from './auth-service'

export const signup = createAsyncThunk('auth/signup', async (user, thunk) => {
  const data = await authService.createUser(user)

  if (data.status === ('fail' || 'error')) {
    return thunk.rejectWithValue(data.message)
  }

  localStorage.setItem('user', JSON.stringify(data))
  return data
})

export const logout = createAsyncThunk('auth/logout', async (_, thunk) => {
  await authService.logout()
})

export const login = createAsyncThunk('auth/login', async (userData, thunk) => {
  const data = await authService.login(userData)

  if (data.status === ('fail' || 'error')) {
    return thunk.rejectWithValue(data.message)
  }

  localStorage.setItem('user', JSON.stringify(data))
  return data
})

export const updatePassword = createAsyncThunk(
  'auth/updatepassword',
  async (userData, thunk) => {
    const token = thunk.getState().auth.user.token
    console.log(token, userData)
    const data = await authService.updatePassword(userData, token)

    console.log(data)
    if (data.message === ('status' || 'fail')) {
      return thunk.rejectWithValue(data.message)
    }

    localStorage.setItem('user', JSON.stringify(data))

    return data
  }
)

let user = JSON.parse(localStorage.getItem('user'))
const initialState = {
  isSuccess: false,
  isError: false,
  message: '',
  user: user ? user : undefined,
  users: [],
  loading: false,
  loggedIn: {}
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false
      state.isError = false
      state.isSuccess = false
      state.message = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false
        state.message = action.payload
        state.isSuccess = false
        state.isError = true
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false
        state.isError = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.loading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload
        state.isError = false
        state.isSuccess = true
        state.loading = false
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.message = action.payload
        state.isError = true
        state.isSuccess = false
      })
  }
})

export const { reset } = authSlice.actions
export default authSlice.reducer
