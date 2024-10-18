import "./App.css";
import React from "react";
import {  Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Coursepage from "./components/Coursepage";
import FetchCourses from "./components/FetchCourses";
import Log from "./components/Log";
import Reg from "./components/Reg";
import { UserProvider } from "./components/UserContext"; // Import UserProvider
import Dashboard from "./components/Dashboard";
import Video from "./components/Video";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/courses" element={<FetchCourses />} />
          <Route path="/Coursepage" element={<Coursepage />} />
          <Route path="/Log" element={<Log />} />
          <Route path="/Reg" element={<Reg />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Video" element={<Video />} />
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
