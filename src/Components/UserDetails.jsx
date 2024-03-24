import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
  // const { id } = useParams();

  const [user, setUser] = useState(null);
  const URL = 'http://localhost:3003/api/users/1';
  const navigate = useNavigate()

  function navigateCourse(Id){
    navigate(`/courses/${Id}`);
  }

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        setUser(data); 
      })
      .catch(error => console.error('Error fetching user details:', error));
  }, []); 

  return (
    <div className="container mx-auto px-4">
      {user && (
        <div className='mb-6'>
          <h2 className="text-3xl font-bold mb-8">User Account</h2>
          <div className="bg-gray-200 rounded-lg p-6 mb-8">
            <p className="text-lg">
              <span className="font-bold">Name:</span> {user.name}
            </p>
            <p className="text-lg">
              <span className="font-bold">Email:</span> {user.email}
            </p>
            <p className="text-lg">
              <span className="font-bold">Is Faculty:</span>{' '}
              {user.is_faculty ? <span>&#10003;</span> : <span>&#10060;</span>}
            </p>
          </div>
          <h3 className="text-2xl font-bold mb-4">My Courses</h3>
          <div className="border-b-2 border-gray-300 mb-6"></div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {user.filteredCourses.map(course => (
              <div key={course.id} className="bg-white rounded-lg shadow-md p-6" onClick={()=>navigateCourse(course.id)}>
                <p className="text-lg">
                  <span className="font-bold">Name:</span> {course.name}
                </p>
                <p className="text-lg">
                  <span className="font-bold">Subject:</span> {course.subject}
                </p>
                <p className="text-lg">
                  <span className="font-bold">Difficulty:</span> {course.difficulty}
                </p>
                <p className="text-lg">
                  <span className="font-bold">Cost:</span> ${course.cost}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
