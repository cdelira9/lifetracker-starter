import * as React from "react";
import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Navbar from "../Navbar/Navbar.jsx";
import ActivityPage from "../Activity/ActivityPage.jsx";
import Nutrition from "../Nutrition/Nutrition.jsx";
import SleepPage from "../Sleep/SleepPage.jsx";
import Login from "../Login/Login.jsx";
import NutritionPage from "../Nutrition/NutritionPage.jsx";
import ExercisePage from "../Exercise/ExercisePage.jsx";
import Register from "../Register/Register.jsx";
import LoginForm from "../LoginForm/LoginForm.jsx";
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
          <Navbar
            handleLogout={handleLogout}
            isLogin={isLogin}
            user={user}
            setUser={setUser}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/activity"
              element={
                <ActivityPage
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
                <ExercisePage
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
                <NutritionPage
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
                <SleepPage
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
                <LoginForm isLogin={isLogin} user={user} setUser={setUser} />
              }
            />
            <Route
              path="/register"
              element={
                <Register user={user} setUser={setUser} isLogin={isLogin} />
              }
            />
            <Route
              path="/nutrition/*"
              element={
                <NutritionPage
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
              path="/sleep/*"
              element={
                <SleepPage
                  addSleep={addSleep}
                  sleep={sleep}
                  user={user}
                  setUser={setUser}
                />
              }
            />
            <Route
              path="/exercise/*"
              element={
                <ExercisePage
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
