import React, { useState, useEffect } from "react";

const SingleReview = ({ review, API, user }) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    fetch(`${API}/api/users/${review.user_id ||1}`)
      .then((response) => response.json())
      .then((userData) => {
        setUserName(userData.name);
      })
      .catch((error) => console.error("Error fetching user:", error));
  }, [API, review.user_id]);

  return (
    <div>
      {review && (
        <div className="bg-white border border-blue-950 rounded-lg shadow-md p-2 m-2 flex flex-col">
          <div className="flex justify-between">
            <p className="text-lg font-bold">{userName}:</p>
            <p className="text-lg ml-2">{"⭐️".repeat(review.rating)}</p>
          </div>
          <div>
            {console.log(user.name)}
            <p className="text-lg">{review.review}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleReview;
