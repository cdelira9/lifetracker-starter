import * as React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import "./Nutrition.css";

export default function Nutrition() {
  return (
    <div className="NutritionPage">
      <div className="Banner">
        <h1>Nutrition</h1>
      </div>
      <div className="content">
        <div className="NutritionOverview">
          <div className="header">
            <h3>Overview</h3>
            <a href="/nutrition/create">
              <button className="Button outline small outline aqua ">
                Record Nutrition
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
