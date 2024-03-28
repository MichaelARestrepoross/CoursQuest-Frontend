import React, { useState } from "react";
import SingleReview from "./SingleReview";
import { useNavigate } from "react-router-dom";

const ReviewsIndex = ({
  API,
  filterdReviews,
  user,
  id,
  reviewToggle,
  setReviewToggle,
}) => {
  const navigate = useNavigate();

  function navigateNewForm(id) {
    navigate(`/courses/${id}/new`);
  }

  return (
    <div className=" px-4 border border-gray-300 rounded-xl shadow-md p-2">
      <div className="bg-white text-center rounded-lg py-4 m-2">
        <h2 className="font-bold py-2 text-3xl"> Course Reviews</h2>
        <button
          onClick={() => navigateNewForm(id)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          New Review 📝
        </button>
      </div>
      <div className="overflow-y-auto h-[400px]">
        {filterdReviews &&
          filterdReviews.map((review) => (
            <div key={review.id}>
              <SingleReview
                review={review}
                API={API}
                user={user}
                id={id}
                reviewToggle={reviewToggle}
                setReviewToggle={setReviewToggle}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReviewsIndex;
