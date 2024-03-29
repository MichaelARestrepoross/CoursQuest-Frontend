import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ReviewForm = ({ user }) => {
  const API = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();
  const { id, reviewId } = useParams();

  const [newOrUpdatedReview, setNewOrUpdatedReview] = useState({
    user_id: user && user.id ? user.id : undefined,
    course_id: id,
    rating: 1,
    review: "",
  });

  useEffect(() => {
    if (reviewId) {
      fetch(`${API}/api/reviews/${reviewId}`)
        .then((response) => response.json())
        .then(({ review }) => {
          setNewOrUpdatedReview({ ...newOrUpdatedReview, review });
        })
        .catch((error) => {
          console.error("Error fetching review details:", error.message);
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

    const url = reviewId
      ? `${API}/api/reviews/${reviewId}`
      : `${API}/api/reviews`;

    fetch(url, {
      method: reviewId ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrUpdatedReview),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            reviewId ? "Failed to update review" : "Failed to submit review"
          );
        }
        console.log(
          reviewId
            ? "Review updated successfully"
            : "Review submitted successfully"
        );
        setNewOrUpdatedReview({
          user_id: user.id,
          course_id: id,
          rating: "",
          review: 1,
        });
      })
      .then(() => {
        navigate(`/courses/${id}`);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  return (
    <div className="relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dvmczcg3f/image/upload/v1711646017/books_being_books_jpg_ufdxkr.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-80 min-w-72 z-10 relative border-4 border-gray-300 rounded-xl shadow-xl p-3 bg-gray-100">
          <div className="text-2xl text-center font-bold pb-4">
            Please Leave A Review
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center space-y-3">
              <div className="flex justify-center items-center">
                <label
                  htmlFor="rating"
                  className="text-gray-700 pr-2 mr-3 bg-gradient-to-br from-amber-300 to-yellow-200 rounded pl-2 shadow-sm"
                >
                  Rating:
                </label>
                <input
                  id="rating"
                  type="number"
                  name="rating"
                  min="1"
                  max="5"
                  step="1"
                  value={newOrUpdatedReview.rating.toString()}
                  onChange={handleTextChange}
                  className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex justify-center items-center">
                <textarea
                  style={{ resize: "none" }}
                  id="review"
                  type="text"
                  name="review"
                  value={newOrUpdatedReview.review}
                  onChange={handleTextChange}
                  className="w-full border border-gray-300 p-2 rounded-md h-40 focus:outline-none focus:border-blue-500 shadow"
                  placeholder="Please leave your review here!"
                  minLength="10"
                  maxLength="100"
                  required
                />
              </div>
            </div>

            <div className="flex justify-start">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-4"
              >
                {reviewId ? "Update" : "Submit"}
              </button>
              <button
                onClick={() => navigate(-1)}
                type="submit"
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-md w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-4 ml-3"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
