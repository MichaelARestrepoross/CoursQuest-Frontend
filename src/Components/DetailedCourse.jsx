import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewsIndex from "./ReviewsIndex";

const DetailedCourse = ({ API, user }) => {
  const { id } = useParams();
  const [course, setCourse] = useState([]);
  const [reviewToggle, setReviewToggle]= useState(false);

  useEffect(() => {
    fetch(`${API}/api/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data))
      .catch((error) => console.error(error));
  }, [id,reviewToggle]);

  const {
    name,
    subject,
    description,
    professor,
    image_url,
    start_date,
    end_date,
    difficulty,
    cost,
    filterdReviews,
  } = course;

  // Function for formatting the date
  function formatDate(dateString) {
    const date = new Date(dateString);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();

    return `${month} ${day}, ${year}`;
  }

  // Function to get the appropriate class for difficulty
  function getDifficultyColor(difficulty) {
    switch (difficulty) {
      case "Beginner":
        return "text-green-500";
      case "Intermediate":
        return "text-yellow-500";
      case "Advanced":
        return "text-red-500";
      default:
        return "";
    }
  }

  return (
    <div className="h-screen p-12 md:p-14 lg:p-16 xl:p-20 cursor-pointer">
      <div>
        <img src={image_url} alt={subject} width="100" height="100" />
      </div>
      <div className="bg-twitter-blue">
        <h1>{name}</h1>
        <p>Description: {description}</p>
        {/* <>Rating: {"⭐️".repeat(rating)} </> */}
        <p className="date">Start Date: {formatDate(start_date)}</p>
        <p className="date">End Date: {formatDate(end_date)}</p>
        <p>
          Difficulty:{" "}
          <span className={getDifficultyColor(difficulty)}>{difficulty}</span>
        </p>
        <p>Subject: {subject}</p>
        <p>Instructor: {professor}</p>
        {cost === "0.00" ? (
          <p style={{ color: "green" }}>FREE</p>
        ) : (
          <p>Cost: ${cost}</p>
        )}
      </div>
      <section>
        <h1>Reviews</h1>
        <ReviewsIndex filterdReviews={filterdReviews} API={API} user = {user} id = {course.id} reviewToggle= {reviewToggle} setReviewToggle= {setReviewToggle}/>

        <h2>Username: </h2>
        {/* <p>{review}</p> */}
      </section>
    </div>
  );
};

export default DetailedCourse;
