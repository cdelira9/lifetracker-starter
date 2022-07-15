import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import apiClient from "../../services/apiClient";
import "./Navbar.css";

export default function Navbar(props) {
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

          {props.user.email ? (
            <li className="btn">
              <span onClick={props.handleLogout}>Logout</span>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li className="btn">
                <Link to="/register">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
