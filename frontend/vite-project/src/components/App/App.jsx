import * as React from "react";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Navbar from "../Navbar/Navbar.jsx";
import Activity from "../Activity/Activity";
import Exercise from "../Exercise/Exercise";
import Nutrition from "../Nutrition/Nutrition.jsx";
import Sleep from "../Sleep/Sleep.jsx";
import Login from "../Login/Login.jsx";
import NutritionCreate from "../Nutrition/NutritionCreate.jsx";
import SleepCreate from "../Sleep/SleepCreate.jsx";
import ExerciseCreate from "../Exercise/ExerciseCreate.jsx";
import Register from "../Register/Register.jsx";
import Home from "../Home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import apiClient from "../../services/apiClient";
import { useAuthContext, AuthContextProvider } from "../../contexts/auth";

export default function AppContainer() {
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
}

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const { user, setUser } = useAuthContext();
  const [isFetching, setIsFetching] = useState(false);
  const [isFetchingExercise, setIsFetchingExercise] = useState(false);
  const [isFetchingSleep, setIsFetchingSleep] = useState(false);
  const [isFetchingActivity, setIsFetchingActivity] = useState(false);
  const [activity, setActivity] = useState([]);
  const [sleep, setSleep] = useState([]);
  const [exercise, setExercise] = useState([]);
  const [nutrition, setNutrition] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken();
      if (data) {
        setUser(data.user);
      }
      if (error) {
        setError(error);
      }
    };

    const token = localStorage.getItem("lifetracker_token");
    if (token) {
      apiClient.setToken(token);
      fetchUser();
    }
  }, [setUser]);

  const addNutrition = (newNutrition) => {
    setNutrition((oldNutrition) => [newNutrition, ...oldNutrition]);
  };

  const addExercise = (newExercise) => {
    setExercise((oldExercise) => [newExercise, ...oldExercise]);
  };

  const addSleep = (newSleep) => {
    setSleep((oldSleep) => [newSleep, ...oldSleep]);
  };

  const handleLogout = async () => {
    await apiClient.logoutUser();
    setUser({});
    setError(null);
  };
  const handleNutritonForm = async () => {
    const fetchActivites = async () => {
      setIsFetchingActivity(true);

      const { data, error } = await apiClient.listActivities();
      if (data) {
        setActivity(data.activities);
      }
      if (error) {
        setError(error);
      }
      setIsFetchingActivity(false);
    };

    fetchActivites();
  };

  return (
    <>
      <Navbar
        handleLogout={handleLogout}
        isLogin={isLogin}
        user={user}
        setUser={setUser}
      />
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
            <Route
              path="/activity"
              element={
                <Activity
                  activity={activity}
                  isLogin={isLogin}
                  user={user}
                  setUser={setUser}
                />
              }
            />
            <Route
              path="/exercise"
              element={
                <Exercise
                  exercise={exercise}
                  addExercise={addExercise}
                  user={user}
                  setUser={setUser}
                />
              }
            />
            <Route
              path="/nutrition"
              element={
                <Nutrition
                  handleNutritonForm={handleNutritonForm}
                  addNutrition={addNutrition}
                  nutrition={nutrition}
                  isLogin={isLogin}
                  user={user}
                  setUser={setUser}
                />
              }
            />
            <Route
              path="/sleep"
              element={
                <Sleep
                  addSleep={addSleep}
                  sleep={sleep}
                  user={user}
                  setUser={setUser}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login isLogin={isLogin} user={user} setUser={setUser} />
              }
            />
            <Route
              path="/register"
              element={
                <Register user={user} setUser={setUser} isLogin={isLogin} />
              }
            />
            <Route
              path="/nutrition/create"
              element={
                <NutritionCreate
                  handleNutritonForm={handleNutritonForm}
                  addNutrition={addNutrition}
                  nutrition={nutrition}
                  isLogin={isLogin}
                  user={user}
                  setUser={setUser}
                />
              }
            />
            <Route
              path="/sleep/create"
              element={
                <SleepCreate
                  addSleep={addSleep}
                  sleep={sleep}
                  user={user}
                  setUser={setUser}
                />
              }
            />
            <Route
              path="/exercise/create"
              element={
                <ExerciseCreate
                  exercise={exercise}
                  addExercise={addExercise}
                  user={user}
                  setUser={setUser}
                />
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}
