import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Datascience from "./Images/Data science.jpeg";
import AI from "./Images/Ai.jpeg";
import Gate from "./Images/gate.jpeg";
import Email from "./Images/email.png";
import Phone from "./Images/phone.png";
import slide1 from "./Images/slide1.jpg";
import slide2 from "./Images/slide2.jpeg";
import Slide3 from "./Images/slide3.jpg";
import lec1 from "./Images/Lec1.png";
import lec2 from "./Images/Lec2.png";
import lec3 from "./Images/Lec3.png";

function Homepage() {
  // Slide index state for controlling the slideshow
  const [currentSlide, setCurrentSlide] = useState(0);

  // Data for slides, courses, and educators (easily modifiable)
  const slides = [
    { src: slide1, alt: "Slide 1" },
    { src: slide2, alt: "Slide 2" },
    { src: Slide3, alt: "Slide 3" },
  ];

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

  // Function to handle slide changes
  const plusSlides = (n) => {
    let newSlideIndex = (currentSlide + n + slides.length) % slides.length;
    setCurrentSlide(newSlideIndex);
  };

  return (
    <div>
      {/* Slideshow */}
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="mySlides"
            style={{ display: index === currentSlide ? "block" : "none" }}
          >
            <img src={slide.src} style={{ width: "100%" }} alt={slide.alt} />
          </div>
        ))}
        <button onClick={() => plusSlides(-1)}>❮</button>
        <button onClick={() => plusSlides(1)}>❯</button>
      </div>
      <br />

      {/* Dots for navigation */}
      <div style={{ textAlign: "center" }}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>

      {/* Trending Courses */}
      <section>
        <div className="data-card">
          <h2>TRENDING COURSES</h2>
          <div className="search-course1">
            <input
              type="text"
              id="course"
              name="course"
              placeholder="What do you want to learn"
            />
            <span className="search-icon">&#x1F50D;</span>
          </div>
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
          <div className="course-btn">
            <Link to="/courses">
              <button className="view-all-button">View All Courses</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Educators */}
      <section>
        <h2>TOP EDUCATORS</h2>
        <div class="images-grid">
          <div class="image-item">
            <img src={lec1} alt="Image 1" class="image" />
            <p class="description">Educator 1 - Subject</p>
          </div>
          <div class="image-item">
            <img src={lec2} alt="Image 2" class="image" />
            <p class="description">Educator 2 - Subject</p>
          </div>
          <div class="image-item">
            <img src={lec3} alt="Image 3" class="image" />
            <p class="description">Educator 3 - Subject</p>
          </div>
        </div>
      </section>

      {/* About and Contact Section */}
      <section>
        <div class="two-column-layout">
          <div class="about">
            <h3>About Us</h3>
            <p>
              At [Institution Name], we are dedicated to fostering an
              environment of academic excellence and holistic growth. Our
              institution is committed to empowering students with the
              knowledge, skills, and values they need to succeed in an
              ever-evolving world.
            </p>
          </div>
          <div class="contact-form">
            <h3>Contact Us</h3>
            <form>
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div class="contact-info">
            <p>
              <img src={Email} alt="Email Icon" />
              Email Address :
              <a href="mailto:test101@gmail.com"> srigadaakshay@gmail.com</a>
            </p>
            <p>
              <img src={Phone} alt="Phone Icon" />
              Contact Number: 9533384236
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Homepage;
