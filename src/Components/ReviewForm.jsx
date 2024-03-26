import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const ReviewForm = ({ user }) => {
  const navigate = useNavigate()
  const { id, reviewId } = useParams()

  const [newOrUpdatedReview, setNewOrUpdatedReview] = useState({
    user_id: user && user.id ? user.id : undefined,
    course_id: id,
    rating: '',
    review: ''
  });

  useEffect(() => {
    if (reviewId) {
      fetch(`http://localhost:3003/api/reviews/${reviewId}`)
        .then(response => response.json())
        .then(data => {
          setNewOrUpdatedReview(data)
        })
        .catch(error => {
          console.error('Error fetching review details:', error.message)
        });
    }
  }, [reviewId]);

  const handleTextChange = (event) => {
    setNewOrUpdatedReview({
      ...newOrUpdatedReview,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = reviewId ? `http://localhost:3003/api/reviews/${reviewId}` : 'http://localhost:3003/api/reviews'

    fetch(url, {
      method: reviewId ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newOrUpdatedReview),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(reviewId ? 'Failed to update review' : 'Failed to submit review')
      }
      console.log(reviewId ? 'Review updated successfully' : 'Review submitted successfully')
      setNewOrUpdatedReview({
        user_id: user.id,
        course_id: id,
        rating: '',
        review: ''
      });
    })
    .then (() => {navigate(`/courses/${id}`)})
    .catch(error => {
      console.error('Error:', error.message)
    });
  };

  return (
    <div className="bg-pink-400">
      <form onSubmit={handleSubmit}>
        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          type="number"
          name="rating"
          min="1"
          max="5"
          step="1"
          value={newOrUpdatedReview.rating}
          onChange={handleTextChange}
        />
        <label htmlFor="review">Review:</label>
        <textarea
          id="review"
          type="text"
          name="review"
          value={newOrUpdatedReview.review}
          onChange={handleTextChange}
        />

        <br />

        <button type="submit">{reviewId ? 'Update' : 'Submit'}</button>
      </form>
    </div>
  )
}

export default ReviewForm