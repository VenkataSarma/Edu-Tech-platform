import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

function Courses({ courses }) {
  return (
    <div>
      <div className="container11">
        <div className="search-c">
          <div className="search-c1">
            <div className="search-course">
              <input
                type="text"
                id="course"
                name="course"
                placeholder="What do you want to learn"
              />
              <span className="search-icon">&#x1F50D;</span>
            </div>
            <div className="data">
              <h2>Live and Recorded Courses</h2>
            </div>
          </div>
        </div>

        <div className="content">
          <section className="course-categories">
            <h2>Course Categories</h2>
            <div className="categories">
              <button className="category-btn">Programming Languages</button>
              <button className="category-btn">DSA / Placements</button>
              <button className="category-btn">Development / Testing</button>
              <button className="category-btn">Data Science</button>
              <button className="category-btn">Cloud / DevOps</button>
              <button className="category-btn">GATE 2025</button>
            </div>
          </section>

          <section className="popular-now">
            <div className="view-all">
              <h2>Trending Technologies</h2>
              <a className="view-all-al">View All</a>
            </div>

            <div className="courses">
              {/* Dynamically render course cards based on the fetched courses */}
              {courses &&
                courses
                  .filter(
                    (course) =>
                      course.course_price !== "0" && course.course_price < 500
                  )
                  .map((course) => (
                    <div className="course-card" key={course.course_id}>
                      <img
                        src={course.course_img || "default_image.jpeg"}
                        alt={course.course_name}
                      />
                      <h3>{course.course_name}</h3>
                      <p>
                        {course.course_short_description ||
                          "Beginner to Advanced"}
                      </p>
                      <h3>
                        Price: ₹
                        <del>{parseInt(course.course_price) + 1000}</del> ₹
                        {course.course_price}/-
                      </h3>
                      <Link to="/Coursepage">
                        <button className="content-btn">Explore</button>
                      </Link>
                    </div>
                  ))}
            </div>
          </section>

          <section className="live-courses">
            <div className="live-course">
              <div className="view-all">
                <h2>Live Courses</h2>
                <a className="view-all-al">View All</a>
              </div>

              <div className="courses">
                {/* Similar mapping for live courses if they are part of your fetched data */}
                {courses &&
                  courses
                    .filter((course) => course.course_type === "Live")
                    .map((course) => (
                      <div className="course-card" key={course.course_id}>
                        <img
                          src={course.course_img || "default_image.jpeg"}
                          alt={course.course_name}
                        />
                        <h3>{course.course_name}</h3>
                        <p>
                          {course.course_short_description ||
                            "Beginner to Advanced"}
                        </p>
                        <h3>
                          Price: ₹
                          <del>{parseInt(course.course_price) + 1000}</del> ₹
                          {course.course_price}/-
                        </h3>
                        <Link to="/Coursepage">
                          <button className="content-btn">Explore</button>
                        </Link>
                      </div>
                    ))}
              </div>
            </div>
          </section>

          <section className="free-courses">
            <div className="live-course">
              <div className="view-all">
                <h2>Free Courses</h2>
                <a className="view-all-al">View All</a>
              </div>

              <div className="courses">
                {/* Mapping for free courses */}
                {courses &&
                  courses
                    .filter((course) => course.course_price === "0")
                    .map((course) => (
                      <div className="course-card" key={course.course_id}>
                        <img
                          src={course.course_img || "default_image.jpeg"}
                          alt={course.course_name}
                        />
                        <h3>{course.course_name}</h3>
                        <p>
                          {course.course_short_description ||
                            "Beginner to Advanced"}
                        </p>
                        <h3>
                          Price: ₹
                          <del>{parseInt(course.course_price) + 1000}</del> ₹
                          {course.course_price}/-
                        </h3>
                        <Link to="/Coursepage">
                          <button className="content-btn">Explore</button>
                        </Link>
                      </div>
                    ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <div>
        <Footer />
      </div>
      <Outlet />
    </div>
  );
}

export default Courses;
