import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReviewsIndex from "./ReviewsIndex";
import { Book } from "lucide-react";
import { enrollCourse, averageRating } from "../Helpers/detailedCourseHelper";

// const API = import.meta.env.VITE_API_URL;
const API = "https://coursquest-backend.onrender.com";

const DetailedCourse = ({ user }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [course, setCourse] = useState([]);
  const [reviewToggle, setReviewToggle] = useState(false);
  const [enrolled, setEnrolled] = useState(false);

  useEffect(() => {
    fetch(`${API}/api/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data))
      .catch((error) => console.error(error));
  }, [id, reviewToggle]);

  useEffect(() => {
    if (user && course.user_id === user.id) {
      setEnrolled(true);
    } else {
      setEnrolled(false);
    }
  }, [user, course]);

  const handleEnrollToggle = async () => {
    try {
      if (!enrolled) {
        await enrollCourse(id, user.id, true);
        setEnrolled(true);
      } else {
        await enrollCourse(id, user.id, false);
        setEnrolled(false);
      }
    } catch (error) {
      console.error("Error toggling enrollment:", error);
    }
  };

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
        return "bg-green-500";
      case "Intermediate":
        return "bg-yellow-500";
      case "Advanced":
        return "bg-red-500";
      default:
        return "";
    }
  }
  return (
    <div>
      <div className="w-full h-24 lg:h-48">
        <img
          src={image_url}
          alt={subject}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid md:flex p-8">
        <div className="md:w-3/4">
          <div className="bg-twitter-blue">
            <h1 className="text-4xl font-bold">{name}</h1>
            <span className="flex flex-row gap-2 my-4">
              <p className="inline-block bg-gray-200 rounded-3xl px-3 ">
                {subject}
              </p>
              <div>
                <div
                  className={`${getDifficultyColor(
                    difficulty
                  )} inline-block rounded-3xl px-3 text-white`}
                >
                  {difficulty}
                </div>
              </div>
              <div>
                {filterdReviews
                  ? "⭐️".repeat(averageRating(filterdReviews))
                  : null}
              </div>
            </span>
            <span className="flex flex-row gap-2 mb-2">
              <p className="date">
                Start:{" "}
                <span className="border-2 border-gray-200 inline-block p-1 rounded">
                  {" "}
                  {formatDate(start_date)}
                </span>
              </p>
              <p className="date">
                End:{" "}
                <span className="border-2 border-gray-200 inline-block p-1 rounded">
                  {formatDate(end_date)}
                </span>
              </p>
            </span>
            <span>
              <p className="pb-3 text-2xl font-semibold">Description:</p>
              <div className="text-md pb-3 mr-10">
                <span className="">
                  {description ? description.replace("`", "'") : null}
                </span>
              </div>
            </span>
            <div className="bg-gray-100 rounded p-1 inline-block items-center">
              <div className="flex items-center">
                <Book
                  strokeWidth={2}
                  className="border-2 border-gray-300 rounded-full w-10 h-10 p-2"
                />
                <div className="ml-3">Instructor: {professor}</div>
              </div>
            </div>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded inline-block my-5"
            onClick={handleEnrollToggle} // Invoke the function here
          >
            {enrolled ? (
              "Unenroll"
            ) : cost === "0.00" ? (
              <p>
                {" "}
                Enroll for <span>FREE</span>
              </p>
            ) : (
              <p>Enroll for ${cost}</p>
            )}
          </button>
        </div>
        <section className="md:w-1/3 bg-gray-200 rounded-xl mb-24">
          <ReviewsIndex
            filterdReviews={filterdReviews}
            user={user}
            id={course.id}
            reviewToggle={reviewToggle}
            setReviewToggle={setReviewToggle}
          />
        </section>
      </div>
    </div>
  );
};

export default DetailedCourse;
