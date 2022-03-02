import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './components/Footer'
import Home from './pages/Home'
import Movie from './pages/Movie'

function App() {
  return (
    <BrowserRouter>
      <div className="mx-auto ">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<Movie />} />
        </Routes>
        <ToastContainer />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
