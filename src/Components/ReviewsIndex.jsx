import React, { useState, useEffect } from 'react';
import SingleReview from './SingleReview';

const ReviewsIndex = ({API}) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/reviews`)
      .then(response => response.json())
      .then(data => {
        setReviews(data);
      })
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  return (
    <div className="container mx-auto px-4 border border-gray-300 rounded-lg shadow-md p-2">
      <div className="bg-slate-400 text-center py-4">Course Reviews</div>
      <div className="gap-4">
        {reviews.map(review => (
          <div key={review.id}>
            <SingleReview review={review} API={API} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsIndex;
