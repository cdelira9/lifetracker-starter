import * as React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import "./Sleep.css";

export default function Sleep() {
  return (
    <div className="SleepPage">
      <Navbar />
      <div className="Banner">
        <h1>Sleep</h1>
      </div>
      <div className="content">
        <div className="SleepOverview">
          <div className="header">
            <h3>Overview</h3>
            <button className="Button outline small outline blue">
              Add Sleep
            </button>
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
