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
    <div>
      <SingleReview API={API}/>
      <div className="bg-slate-400">ReviewsIndex</div>
    </div>
  );
};

export default ReviewsIndex;
