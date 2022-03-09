const getMovies = async () => {
  const response = await fetch(`http://localhost:8000/api/v1/movies`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })

  const data = await response.json()

  return data
}

const getMovie = async (id) => {
  const response = await fetch(`http://localhost:8000/api/v1/movies/${id}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })

  const data = await response.json()
  return data
}

const createMovies = async (movieData, token) => {
  console.log(movieData)
  const response = await fetch(`http://localhost:8000/api/v1/movies`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify(movieData)
  })

  const data = await response.json()
  return data
}

export const moviesService = { getMovies, getMovie, createMovies }
