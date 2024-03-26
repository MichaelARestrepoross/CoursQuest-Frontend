import React, { useState } from "react";
import SingleReview from "./SingleReview";
import { useNavigate } from "react-router-dom";

const ReviewsIndex = ({ API, filterdReviews, user,id, reviewToggle,setReviewToggle }) => {
  const navigate = useNavigate();

  function navigateNewForm(id){
    navigate(`/courses/${id}/new`)
  }

  return (
    <div className="container mx-auto px-4 border border-gray-300 rounded-lg shadow-md p-2">
      <div className="bg-slate-400 text-center py-4 flex justify-between items-center m-2">
        <h1></h1>
        <h2 className=""> Course Reviews</h2>
        <button onClick={() => navigateNewForm(id)} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">New Review 📝</button>
      </div>
      <div className="gap-4">
        {filterdReviews &&
          filterdReviews.map((review) => (
            <div key={review.id}>
              <SingleReview review={review} API={API} user ={user} id = {id} reviewToggle={reviewToggle} setReviewToggle ={setReviewToggle} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReviewsIndex;
