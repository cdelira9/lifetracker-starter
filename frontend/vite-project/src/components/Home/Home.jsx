import * as React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">

      <div className="hero">
        <img
          src="http://codepath-lifetracker.surge.sh/static/media/smartwatch-screen-digital-device.e2983a85.svg"
          alt="hero img"
        />
        <h1>Life Tracker</h1>
        <p>Helping you take back control of your world</p>
      </div>

      <div className="tiles">
        <div className="tile">
            <img src="http://codepath-lifetracker.surge.sh/static/media/icons-workout-48.4f4cdb05.svg" alt="Fitness"></img>
            <p>Fitness</p>
        </div>
        <div className="tile">
            <img src="http://codepath-lifetracker.surge.sh/static/media/icons8-porridge-100.132d2715.svg" alt="Food"></img>
            <p>Food</p>
        </div>
        <div className="tile">
            <img src="http://codepath-lifetracker.surge.sh/static/media/icons8-resting-100.81067336.svg" alt="Rest"></img>
            <p>Rest</p>
        </div>
        <div className="tile">
            <img src="http://codepath-lifetracker.surge.sh/static/media/icons8-planner-100.997ca54c.svg" alt="Planner"></img>
            <p>Planner</p>
        </div>
      </div>
    </div>
  );
}
