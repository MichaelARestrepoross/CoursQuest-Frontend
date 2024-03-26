import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SingleCourse from "./SingleCourse";
import { Search } from "lucide-react";

const CoursesIndex = ({ API }) => {
  //useState for All Courses
  const [allCourses, setAllCourses] = useState([]);
  //useState for filtered courses
  const [courses, setCourses] = useState([]);
  //useState for search bar inputs
  const [input, setInput] = useState("");
  // useState for selected subject
  const [selectedSubject, setSelectedSubject] = useState("");

  // Function to filter courses by subject
  function filterCoursesBySubject(subject) {
    if (subject === "All") {
      setCourses(allCourses);
    } else {
      const filtered = allCourses.filter(
        (course) => course.subject === subject
      );
      setCourses(filtered);
    }
  }

  // Function to handle subject filter change
  function handleSubjectChange(event) {
    const subject = event.target.value;
    setSelectedSubject(subject);
    filterCoursesBySubject(subject);
  }

  function filteredCourses(input, courses) {
    return courses.filter((course) => {
      return course.name.toLowerCase().match(input.toLowerCase());
    });
  }

  function handleSearchChange(event) {
    const search = event.target.value;
    const result = search.length
      ? filteredCourses(input, allCourses)
      : allCourses;
    setInput(search);
    setCourses(result);
  }

  useEffect(() => {
    fetch(`${API}/api/courses`)
      .then((res) => res.json())
      .then((data) => {
        setAllCourses(data);
        setCourses(data);
      });
  }, [API]);

  // Extract all unique subjects
  const subjects = [
    "All",
    ...new Set(allCourses.map((course) => course.subject)),
  ];

  return (
    <>
      <div className="mx-16 py-12">
        <div className="text-5xl pb-12"></div>
        <div className="flex items-center w-full h-12 rounded-xl focus-within:shadow-lg bg-white  border-4 border-grey-300 hover:border-gray-300 mb-12">
          <div className="flex items-center flex-grow">
            <div className="mr-2">
              <Search className="h-6 w-6 text-gray-300 ml-2" />
            </div>
            <input
              className="h-full flex-grow outline-none text-sm text-gray-700"
              type="text"
              id="search"
              placeholder="Search.."
              value={input}
              onChange={handleSearchChange}
            />
          </div>
          <div className="ml-4">
            <select
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={selectedSubject}
              onChange={handleSubjectChange}
            >
              {subjects.map((subject, index) => (
                <option key={index} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="text-4xl font-extrabold">Courses</div>
        <hr className="mt-1 mb-6 border-2" />
        <div>
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
