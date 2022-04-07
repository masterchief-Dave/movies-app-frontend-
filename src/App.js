import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Movie from './pages/Movie'
import Profile from './pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <div id="app_container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/user/:id/settings" element={<Profile />} />
          <Route path="/user/:id/reviews" element={<Profile />} />
          <Route path="/user/:id/create" element={<Profile />} />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  )
}

export default App
