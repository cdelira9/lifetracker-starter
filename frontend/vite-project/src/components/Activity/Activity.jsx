import * as React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import "./Activity.css";

export default function Activity(props) {
  return (
    <div className="ActivityPage">
      <div className="content">
        <div className="actions">
          <h2 className="heading">Activity Feed</h2>
          <div className="buttons">
            <a href="/exercise/create">
              <button className="Button outline small outline gold ">
                Add Exercise
              </button>
            </a>
            <a href="/sleep/create">
              <button className="Button outline small outline blue">
                Log Sleep
              </button>
            </a>
            <a href="/nutrition/create">
              <button className="Button outline small outline aqua ">
                Record Nutrition
              </button>
            </a>
          </div>
        </div>
        <div className="stats">
          <div className="main">
            <div className="SummaryStat large gold">
              <div className="background">
                <p>Total Exercise Minutes</p>
                <h1>0</h1>
              </div>
            </div>
            <div className="SummaryStat large purple">
              <div className="background">
                <p>Avg Sleep Hours</p>
                <h1>0</h1>
              </div>
            </div>
            <div className="SummaryStat large aqua">
              <div className="background">
                <p>Avg Daily Calories</p>
                <h1>0</h1>
              </div>
            </div>
          </div>
          <h4>More Stats</h4>
          <div className="more">
            <div className="SummaryStat small teal">
              <div className="background">
                <p>Maximum Hourly Calories</p>
                <h1>0</h1>
              </div>
            </div>
            <div className="SummaryStat small orange">
              <div className="background">
                <p>Avg Exercise Intensity</p>
                <h1>0</h1>
              </div>
            </div>
            <div className="SummaryStat small red">
              <div className="background">
                <p>Total Hours Slept</p>
                <h1>0</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
