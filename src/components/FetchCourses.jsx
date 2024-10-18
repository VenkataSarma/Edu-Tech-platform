import React, { useState, useEffect } from "react";
import Courses from "./Courses";
import { useNavigate } from "react-router-dom";

function FetchCourses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch courses data from the API
    fetch("http://127.0.0.1:5000/api/courses") // Replace with your actual API endpoint
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  return (
    <div>
      <Courses courses={courses} />
    </div>
  );
}

export default FetchCourses;
