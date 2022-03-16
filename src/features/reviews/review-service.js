const createReview = async (reviewData, token) => {
  const response = await fetch(`http://localhost:8000/api/v1/reviews`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify(reviewData)
  })

  const data = await response.json()
  // console.log(data)
  return data
}

const getReviews = async (id) => {
  const response = await fetch(`http://localhost:8000/api/v1/reviews/${id}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })

  const data = await response.json()
  return data
}

export const reviewService = {
  createReview,
  getReviews
}
