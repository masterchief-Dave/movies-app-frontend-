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

export const moviesService = { getMovies, getMovie }
