import * as React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import "./ExerciseCreate.css";

export default function ExerciseCreate() {
  return (
    <div className="ExercisePage">
      <div className="Banner">
        <h1>Exercise</h1>
      </div>
      <div className="content">
        <div className="ExerciseNew">
          <h2>Add Exercise</h2>
          <div className="form">
            <div className="InputField">
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Exercise name"
              ></input>
            </div>
            <div className="InputField">
              <label for="category">Category</label>
              <input
                type="text"
                name="category"
                placeholder="Exercise category"
              ></input>
            </div>
            <div className="split-input-field">
              <div className="InputField">
                <label for="duration">Duration (min)</label>
                <input
                  type="number"
                  name="duration"
                  min="1"
                  max="100000000"
                ></input>
              </div>
              <div className="InputField">
                <label for="intensity">Intensity (1-10)</label>
                <input
                  type="number"
                  name="intensity"
                  min="0"
                  max="10"
                ></input>
              </div>
            </div>
            <button className="Button primary large gold">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
