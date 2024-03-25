import { Link } from "react-router-dom";
import SingleCourse from "./SingleCourse";

const CoursesIndex = ({ courses }) => {
  return (
    <>
      <div className="mx-16 py-12">
        <div className="text-5xl pb-12"></div>
        <div className="text-4xl font-extrabold">Courses</div>
        <hr className="mt-1 mb-6 border-2" />
        <div className="">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <SingleCourse key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesIndex;
