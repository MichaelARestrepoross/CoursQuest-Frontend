import React, { useState, useEffect } from 'react';

const SingleReview = ({ API }) => {
  const [review, setReview] = useState(null);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    fetch(`${API}/api/reviews/1`)
      .then(response => response.json())
      .then(data => {
        setReview(data);
        fetch(`${API}/api/users/${data.user_id}`)
          .then(response => response.json())
          .then(userData => {
            setUserName(userData.name);
          })
          .catch(error => console.error('Error fetching user:', error));
      })
      .catch(error => console.error('Error fetching review:', error));
  }, []);

  return (
    <div>
      {review && (
        <div className="bg-white border border-blue-950 rounded-lg shadow-md p-2 m-2 flex flex-col">
          <div className="flex justify-between">
            <p className="text-lg font-bold">{userName}:</p>
            <p className="text-lg ml-2">
              <span className="font-bold">Rating: </span>
              {"⭐️".repeat(review.rating)}
            </p>
          </div>
          <div>
            <p className="text-lg">{review.review}</p>
          </div>
        </div>
      )}
    </div>
  );
};


export default SingleReview;
