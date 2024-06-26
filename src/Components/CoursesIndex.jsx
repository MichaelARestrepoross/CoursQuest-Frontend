import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SingleCourse from "./SingleCourse";
import { Search } from "lucide-react";

const CoursesIndex = () => {
  // const API = import.meta.env.VITE_API_URL;
  const API = "https://coursquest-backend.onrender.com";
  // useState for All Courses
  const [allCourses, setAllCourses] = useState([]);
  // useState for filtered courses
  const [courses, setCourses] = useState([]);
  // useState for search bar inputs
  const [input, setInput] = useState("");
  // useState for selected filter
  const [selectedFilter, setSelectedFilter] = useState("");
  // useState for setting the filters
  const [filters, setFilters] = useState([]);

  // Function to filter courses based on selected filter
  function filterCourses(filter) {
    if (filter === "All") {
      setCourses(allCourses);
    } else {
      const filtered = allCourses.filter(
        (course) =>
          course.subject === filter ||
          course.difficulty === filter ||
          (course.cost === "0.00" && filter === "Free")
      );
      setCourses(filtered);
    }
  }

  // Function to handle filter change
  function handleFilterChange(event) {
    const filter = event.target.value;
    setSelectedFilter(filter);
    filterCourses(filter);
  }

  // Function to handle search input change
  function handleSearchChange(event) {
    const search = event.target.value;
    const result = search.length
      ? allCourses.filter((course) =>
          course.name.toLowerCase().includes(search.toLowerCase())
        )
      : allCourses;
    setInput(search);
    setCourses(result);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API}/api/courses`);
        if (!response.ok) {
          throw new Error('Failed to fetch course data');
        }
        const data = await response.json();
        setAllCourses(data);
        setCourses(data);
  
        const subjects = new Set(data.map((course) => course.subject));
        const difficulties = new Set(data.map((course) => course.difficulty));
        const filteredCosts = ["Free"];
        const filters = ["All", ...new Set([...subjects, ...difficulties, ...filteredCosts])];
        setFilters(filters);
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    };
  
    fetchData();
  }, [API]);

  return (
    <>{courses.length > 0 &&
      <div className="mx-16 pt-24 pb-36">
        <div className="flex items-center  h-12 mb-12">
          <div className="flex items-center flex-grow rounded-xl focus-within:shadow-lg bg-white  border-4 border-gray-300 hover:border-gray-400">
            <div className="mr-2 ">
              <Search className="h-6 w-6 text-gray-300 ml-2" />
            </div>
            <input
              className="h-full flex-grow outline-none text-sm text-black rounded-xl"
              type="text"
              id="search"
              placeholder="Search.."
              value={input}
              onChange={handleSearchChange}
            />
          </div>
          <div className="ml-4">
            <select
              className="flex justify-center items-center h-9 rounded-xl border-4 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={selectedFilter}
              onChange={handleFilterChange}
            >
              {filters.length > 0 &&
                filters.map((filter, index) => (
                  <option key={index} value={filter}>
                    {filter}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="text-4xl font-extrabold">Courses</div>
        <hr className="mt-1 mb-6 border-2" />
        <div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            {courses.length > 0 &&
              courses.map((course) => (
                <SingleCourse key={course.id} course={course} />
              ))}
          </div>
        </div>
      </div>
      }
    </>
  );
};

export default CoursesIndex;
