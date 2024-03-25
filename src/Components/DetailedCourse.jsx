import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailedCourse = ({ API }) => {
  const { id } = useParams();
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/courses/${id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data))
      .catch((error) => console.error(error));
  }, [id]);

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
  } = course;

  // function for formatting the date
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

  return (
    <div className="h-screen p-12 md:p-14 lg:p-16 xl:p-20 cursor-pointer">
      <div>
        <img src={image_url} alt={subject} width="100" height="100" />
      </div>
      <div className="bg-twitter-blue">
        <h1>{name}</h1>
        <p className="date">Start Date: {formatDate(start_date)}</p>
        <p className="date">End Date: {formatDate(end_date)}</p>
        <p>Difficulty: {difficulty}</p>

        <p>Subject: {subject}</p>
        <p>Instructor: {professor}</p>
        <p>Description: {description}</p>
        {cost === "0.00" ? (
          <p style={{ color: "green" }}>FREE</p>
        ) : (
          <p>Cost: ${cost}</p>
        )}
      </div>
    </div>
  );
};

export default DetailedCourse;
