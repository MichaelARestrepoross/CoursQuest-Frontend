import { useNavigate } from "react-router-dom";

const SingleCourse = ({ course }) => {
  const navigate = useNavigate();

  function navigateCourse(Id) {
    navigate(`/courses/${Id}`);
  }
  return (
    <div
      className="shadow-2xl rounded-xl overflow-hidden bg-white hover:scale-105 transition-transform duration-300"
      onClick={() => navigateCourse(course.id)}
    >
      {/* <img
        className="rounded-t-xl w-full h-24 object-cover"
        src={course.image_url}
        alt="course image"
      /> */}
      <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-xl w-full"></div>
      <div className="bg-white h-56 mb-2 rounded-b-xl p-3">
        <div className="text-2xl border-b-2 pb-1 mb-2 font-semibold">
          {course.name}
        </div>
        <div className="inline-block bg-gray-200 rounded-3xl px-3 mb-1">
          {course.subject}
        </div>
        <div className="my-2">{course.description}</div>
        <div>Rating: {"🍌".repeat(course.rating)}</div>
        {course.cost === "0.00" ? (
          <div className="text-green-500 font-bold mt-1">FREE</div>
        ) : (
          <div className="font-bold mt-1">${course.cost} </div>
        )}
      </div>
    </div>
  );
};

export default SingleCourse;
