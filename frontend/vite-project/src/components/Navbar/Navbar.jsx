import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="content">
        <div className="logo">
          <a href="/">
            <img
              src="http://codepath-lifetracker.surge.sh/static/media/codepath.70a9a31f.svg"
              alt="logo"
            ></img>
          </a>
        </div>
        <ul className="links">
          <li>
            <a href="/activity">Activity</a>
          </li>
          <li>
            <a href="/exercise">Exercise</a>
          </li>
          <li>
            <a href="/nutrition">Nutrition</a>
          </li>
          <li>
            <a href="/sleep">Sleep</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li className="btn secondary">
            <a href="/register">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
