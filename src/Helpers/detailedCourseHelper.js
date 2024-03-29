const API = import.meta.env.VITE_API_URL;

export const enrollCourse = async (courseId, userId, enrolled) => {
  try {
    // Fetch the original course data
    const response = await fetch(`${API}/api/courses/${courseId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch course data");
    }
    const courseData = await response.json();

    // Modify the course data with updated user_id
    const updatedCourseData = {
      ...courseData,
      user_id: enrolled ? userId : null,
    };

    // Send a PUT request to update the course
    const updateResponse = await fetch(`${API}/api/courses/${courseId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCourseData),
    });

    if (!updateResponse.ok) {
      throw new Error("Failed to update enrollment status");
    }
  } catch (error) {
    console.error("Error updating enrollment:", error);
  }
};

export function averageRating(filterdReviews) {
  if (filterdReviews.length === 0) {
    return 0; // Return 0 if there are no reviews
  }
  const sum = filterdReviews.reduce((accumulator, review) => {
    return accumulator + review.rating;
  }, 0);

  // Calculate the average
  const average = sum / filterdReviews.length;
  const roundedAverage = Math.round(average);

  return roundedAverage;
}
