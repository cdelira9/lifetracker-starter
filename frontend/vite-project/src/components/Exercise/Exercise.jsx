import * as React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import "./Exercise.css";

export default function Exercise() {
  return (
    <div className="ExercisePage">
      <div className="Banner">
        <h1>Exercise</h1>
      </div>
      <div className="content">
        <div className="ExerciseOverview">
          <div className="header">
            <h3>Overview</h3>
            <a href="/exercise/create">
              <button className="Button outline small outline gold ">
                Add Exercise
              </button>
            </a>
          </div>
          <div className="feed">
            <div className="empty">
              <h2>Nothing here yet.</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
