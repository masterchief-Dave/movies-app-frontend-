const createReview = async (data) => {
  const response = await fetch(``, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  const data = await response.json()
  return data
}

export const reviewService = {
  createReview
}
