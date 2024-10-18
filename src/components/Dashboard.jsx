import React, { useContext } from "react";
import Usericon from "./Images/User-icon.png";
import { UserContext } from "./UserContext";
import Sql from "./Images/sql.png";
import Python from "./Images/python.png";
import Java from "./Images/java.png";

function Dashboard() {
  const { user } = useContext(UserContext);
  const randomNumber = Math.floor(10000 + Math.random() * 90000);
  return (
    <div>
      <div class="dash-cont">
        <div class="dash-cont1">
          {/* <!-- Profile Section --> */}
          <div class="profile-card">
            <div class="profile-header">
              <img src={Usericon} alt="Profile Picture" class="profile-pic" />
              <h1>{user.firstname}</h1>
              <p>
                @{user.firstname}
                {randomNumber}
              </p>
              <a href="#" class="edit-btn1">
                edit
              </a>
            </div>
          </div>

          {/* <!-- Personal Information Section --> */}
          <div class="info-card">
            <div class="info-header">
              <h2>Personal Information</h2>
              <a href="#" class="edit-btn2">
                edit
              </a>
            </div>
            <ul class="info-list">
              <li>
                <i class="email-icon">📧</i> {user.email}
              </li>
              <li>
                <i class="phone-icon">📞</i> +91-9533384236
              </li>
              <li>
                <i class="location-icon">🌍</i> India
              </li>
            </ul>
          </div>

          {/* <!-- Resume Section --> */}
          <div class="resume-card">
            <h2>
              My Resume{" "}
              <a href="#" class="add-resume">
                + Add Resume
              </a>
            </h2>
            <p>Add your resume here</p>
          </div>
        </div>
        <div class="container2">
          <h1>Your Preparation</h1>

          {/* <!-- SQL Card --> */}
          <div class="dash-card">
            <div class="card-header">
              <span class="topic-badge sql">Sql</span>
              <div class="badge-icon">
                <img src={Sql} alt="SQL Icon" />
              </div>
            </div>
            <div class="progress-bar">
              <div class="progress1"></div>
            </div>
            <p>50%</p>
            <button class="btn-gray">Continue Preparation</button>
          </div>

          {/* <!-- Python Card --> */}
          <div class="dash-card">
            <div class="card-header">
              <span class="topic-badge python">Python</span>
              <div class="badge-icon">
                <img src={Python} alt="Python Icon" />
              </div>
            </div>
            <div class="progress-bar">
              <div class="progress2"></div>
            </div>
            <p>60%</p>
            <button class="btn-gray">Continue Preparation</button>
          </div>

          {/* <!-- Java Card --> */}
          <div class="dash-card">
            <div class="card-header">
              <span class="topic-badge java">Java</span>
              <div class="badge-icon">
                <img src={Java} alt="Java Icon" />
              </div>
            </div>
            <div class="progress-bar">
              <div class="progress3"></div>
            </div>
            <p>20%</p>
            <button class="btn-gray">Continue Preparation</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
