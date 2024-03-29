import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/CommonComponents/Nav";
import Footer from "./Components/CommonComponents/Footer";
import LandingPage from "./Components/CommonComponents/LandingPage";
import CoursesIndex from "./Components/CoursesIndex";
import DetailedCourse from "./Components/DetailedCourse";
import ReviewForm from "./Components/ReviewForm";
import AboutTheDevs from "./Components/CommonComponents/AboutTheDevs";

import UserDetails from "./Components/UserDetails";

const App = () => {
  //define api url
  // const API = import.meta.env.VITE_API_URL;
  const API = "https://coursquest-backend.onrender.com";

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/users/1`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="font-noto-sans">
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/courses" element={<CoursesIndex />} />
          <Route
            path="/courses/:id"
            element={<DetailedCourse  user={user} />}
          />
          <Route
            path="/courses/:id/edit/:reviewId"
            element={<ReviewForm  user={user} />}
          />
          <Route
            path="/courses/:id/new"
            element={<ReviewForm  user={user} />}
          />
          <Route path="/account" element={<UserDetails />} />
          <Route path="/aboutthedevs" element={<AboutTheDevs />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
