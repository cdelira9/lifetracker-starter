import * as React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import "./SleepCreate.css";

export default function SleepCreate() {
  return (
    <div className="SleepPage">
      <div className="Banner">
        <h1>Sleep</h1>
      </div>
      <div className="content">
        <div className="SleepNew">
          <h2>Add Sleep</h2>
          <div className="form">
            <div className="InputField">
              <label for="startTime">StartTime</label>
              <input type="datetime-local" name="startTime"></input>
            </div>
            <div className="InputField">
              <label for="endTime">End Time</label>
              <input type="datetime-local" name="endTime"></input>
            </div>
            <button className="Button primary large blue">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
