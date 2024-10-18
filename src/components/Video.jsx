import React from "react";

function Video() {
  return (
    <div>
      {/* <!-- First Section --> */}
      <section class="section">
        <div class="section1">
          <div class="left">
            {/* <!-- Video and Button Container --> */}
            <div class="video-container">
              {/* <!-- Embed YouTube Video --> */}
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/7tOaisRSE6g?si=Ueimb3_cVfzqm3Z-"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              {/* <!-- Button to Open Google Drive Material --> */}
              <button
                className="material-button"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1acYdjfQStnEEK702KB9DboLMoBN21-2R/view?usp=drive_link",
                    "_blank"
                  )
                }
              >
                View Material
              </button>
            </div>
          </div>
          <div class="right">
            <h2>Data Science With Python</h2>
            <p>
              The <strong>Data Science with Python</strong> course provides a
              comprehensive introduction to the fundamentals of data science
              using Python.
            </p>

            {/* <!-- Accordion Button 1 --> */}
            <button class="accordion">Introduction</button>
            <div class="panel">
              <ul>
                <li>
                  <button onclick="scrollAndSeek(0)">
                    1. Introduction <span class="duration">2min</span>
                  </button>
                </li>
                <li>
                  <button onclick="scrollAndSeek(120)">
                    2. Communicate Better to Connect Better{" "}
                    <span class="duration">2min</span>
                  </button>
                </li>
                <li>
                  <button onclick="scrollAndSeek(240)">
                    3. Self-Assessment: Discover Your Style{" "}
                    <span class="duration">1min</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* <!-- Accordion Button 2 --> */}
            <button class="accordion">Installation and Setup</button>
            <div class="panel">
              <ul>
                <li>
                  <button onclick="scrollAndSeek(300)">
                    1. Introduction <span class="duration">2min</span>
                  </button>
                </li>
                <li>
                  <button onclick="scrollAndSeek(420)">
                    2. Communicate Better to Connect Better{" "}
                    <span class="duration">2min</span>
                  </button>
                </li>
                <li>
                  <button onclick="scrollAndSeek(540)">
                    3. Self-Assessment: Discover Your Style{" "}
                    <span class="duration">1min</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* <!-- Accordion Button 3 --> */}
            <button class="accordion">Advanced DataScience Libraries</button>
            <div class="panel">
              <ul>
                <li>
                  <button onclick="scrollAndSeek(600)">
                    1. Introduction <span class="duration">2min</span>
                  </button>
                </li>
                <li>
                  <button onclick="scrollAndSeek(720)">
                    2. Communicate Better to Connect Better{" "}
                    <span class="duration">2min</span>
                  </button>
                </li>
                <li>
                  <button onclick="scrollAndSeek(840)">
                    3. Self-Assessment: Discover Your Style{" "}
                    <span class="duration">1min</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Second Section --> */}
      <section class="section">
        <h1>Course Overview</h1>
        <p>
          The <strong>Data Science with Python</strong> course provides a
          comprehensive introduction to the fundamentals of data science using
          Python, a powerful and versatile programming language. Designed for
          beginners, this course covers key concepts like data analysis,
          visualization, and machine learning, using popular libraries like
          NumPy, Pandas, Matplotlib, and Seaborn. You will also explore advanced
          tools like Plotly for interactive visualizations and Dask for handling
          big data. Through hands-on projects, you'll gain practical skills for
          solving real-world problems, making this course ideal for anyone
          looking to start a career in data science or enhance their data-driven
          decision-making skills.
        </p>
      </section>

      {/* <!-- Third Section: Sticky Notes --> */}
      <section class="section">
        <h2>KEY POINTS TO REMEMBER</h2>
        <div class="sticky-notes">
          <div class="sticky-note">
            <h3>Note 1</h3>
            <p class="note-text" id="note1">
              Remember to review the advanced flexbox lesson!
            </p>
            <textarea
              class="note-input"
              id="inputNote1"
              placeholder="Type here..."
            ></textarea>
            <button
              class="save-button"
              onclick="saveText('inputNote1', 'note1')"
            >
              Save
            </button>
          </div>
          <div class="sticky-note">
            <h3>Note 2</h3>
            <p class="note-text" id="note2">
              Don't forget to check out the bonus materials.
            </p>
            <textarea
              class="note-input"
              id="inputNote2"
              placeholder="Type here..."
            ></textarea>
            <button
              class="save-button"
              onclick="saveText('inputNote2', 'note2')"
            >
              Save
            </button>
          </div>
          <div class="sticky-note">
            <h3>Note 3</h3>
            <p class="note-text" id="note3">
              Join the live Q&A session on Friday at 3 PM.
            </p>
            <textarea
              class="note-input"
              id="inputNote3"
              placeholder="Type here..."
            ></textarea>
            <button
              class="save-button"
              onclick="saveText('inputNote3', 'note3')"
            >
              Save
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Video;
