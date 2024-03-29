import React, { useState, useEffect } from "react";
import SingleCourse from "./SingleCourse";

const API = import.meta.env.VITE_API_URL;

const UserDetails = () => {

  const [user, setUser] = useState(null);
  const URL = `${API}/api/users/1`;

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => console.error("Error fetching user details:", error));
  }, []);

  return (
    <div className="container mx-auto px-4">
      {user && (
        <div className="mb-6">
          <h2 className="text-4xl mb-8 pt-24 font-extrabold">User Account</h2>
          <div className="bg-gray-200 rounded-lg p-6 mb-8">
            <p className="text-lg">
              <span className="font-bold">Name:</span> {user.name}
            </p>
            <p className="text-lg">
              <span className="font-bold">Email:</span> {user.email}
            </p>
            <p className="text-lg">
              <span className="font-bold">Is Faculty:</span>{" "}
              {user.is_faculty ? <span>&#10003;</span> : <span>&#10060;</span>}
            </p>
          </div>
          <h3 className="text-3xl font-bold mb-4">My Courses</h3>
          <hr className="mt-1 mb-6 border-2" />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mb-36">
            {user.filteredCourses.map((course) => (
              <SingleCourse key={course.id} course={course} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
