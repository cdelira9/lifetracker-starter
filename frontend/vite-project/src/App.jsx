import { useState } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Navbar from "./components/Navbar/Navbar.jsx";
import Activity from "./components/Activity/Activity";
import Exercise from "./components/Exercise/Exercise";
import Nutrition from "./components/Nutrition/Nutrition.jsx";
import Sleep from "./components/Sleep/Sleep.jsx";
import Login from "./components/Login/Login.jsx";
import NutritionCreate from "./components/Nutrition/NutritionCreate.jsx";
import SleepCreate from "./components/Sleep/SleepCreate.jsx";
import ExerciseCreate from "./components/Exercise/ExerciseCreate.jsx";
import Register from "./components/Register/Register.jsx";
import Home from "./components/Home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      {/* <Navbar />
      <div className="hero-image">
        <div className="hero-text">
          <h1>Life Tracker</h1>
          <p>Helping you take back control of your world</p>
        </div>
      </div> */}
      {/* <Container
        maxWidth={false}
        sx={{ backgroundColor: "purple", flexGrow: 0 }}
      >
        My Container
      </Container> */}
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/exercise" element={<Exercise />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/sleep" element={<Sleep />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/nutrition/create" element={<NutritionCreate />} />
            <Route path="/sleep/create" element={<SleepCreate />} />
            <Route path="/exercise/create" element={<ExerciseCreate />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
