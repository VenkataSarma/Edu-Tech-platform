import React from "react";
import { useLocation, Link } from "react-router-dom";
import Lecture from "./Images/Lec1.png";
import Datascience from "./Images/Data science.jpeg";
import AI from "./Images/Ai.jpeg";
import Gate from "./Images/gate.jpeg";

function Coursepage() {
  const courses = [
    {
      title: "Data Science",
      img: Datascience,
      desc: "Explore the world of data science.",
    },
    {
      title: "Artificial Inteligence",
      img: AI,
      desc: "Dive deeper into AI and machine learning.",
    },
    {
      title: "Gate",
      img: Gate,
      desc: "Fullfill Your IIT Dream.",
    },
  ];
  return (
    <div className="container">
      <div className="header">
        <h1>DATA SCIENCE WITH PYTHON</h1>
        <p>
          This course teaches you how to get started in data science.
          <br /> You don’t need any programming prior knowledge. <br />
          We’ll teach you the Python basics you need to get started.
        </p>
        <div className="img1">
          <div className="image-stack">
            <img src={Lecture} alt="lecturer" className="lecturer-img" />
          </div>
          <div className="text-content">
            <br />
            <h4>+3 more</h4>
          </div>
        </div>
        <div className="cp-video">
          <div>
            <a href="" className="enroll-btn">
              ENROLL
              <br /> STARTS SEP 28
            </a>
          </div>
          <div className="Preview">
            <Link to="/Video">
              <button>Preview Course</button>
            </Link>
          </div>
        </div>
        <h5>4,678 already enrolled</h5>
      </div>

      <div className="details">
        <div className="card">
          <strong>BEGINNER LEVEL</strong>
          <br />
          <br />
          <span>⭐ 4.8</span>
          <br />
          <br />
          <strong>Flexible schedule</strong>
          <br />
          <br />
          <p>Learn at your own pace</p>
        </div>
      </div>

      <div className="syllabus">
        <h3>SYLLABUS</h3>
        <div className="modules">
          <div className="card1">
            <h4>MODULE 1</h4>
            <ul>
              <li>The Data Science Process</li>
              <li>Matplotlib for Visualization</li>
              <li>Introduction to Machine Learning</li>
            </ul>
          </div>
          <div className="card1">
            <h4>MODULE 2</h4>
            <ul>
              <li>Python for Data Science</li>
              <li>Seaborn for Beautiful Visuals</li>
              <li>Dask for Big Data</li>
            </ul>
          </div>
          <div className="card1">
            <h4>MODULE 3</h4>
            <ul>
              <li>NumPy for Numerical Computation</li>
              <li>Plotly for Interactive Visuals</li>
              <li>Power BI Desktop</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>RECOMMENDATIONS</h2>
      <div className="card-container">
        {courses.map((course, index) => (
          <div key={index} className="card11">
            <h3>{course.title}</h3>
            <img src={course.img} alt={`Course ${index + 1}`} />
            <p>{course.desc}</p>
            <button className="buy-now-button">Explore</button>
          </div>
        ))}
      </div>
      {/* <div className="courses">
        {course ? (
          <>
            <div className="course-card" key={course.course_id}>
              <img
                src={course.course_img || "default_image.jpeg"}
                alt={course.course_name}
              />
              <h1>{course.course_name}</h1>
              <p>{course.course_short_description || "Beginner to Advanced"}</p>
              <h3>
                Price: ₹<del>{parseInt(course.course_price) + 1000}</del> ₹
                {course.course_price}/-
              </h3>
            </div>
          </>
        ) : (
          <p>No course data available</p>
        )}
      </div> */}
    </div>
  );
}

export default Coursepage;
