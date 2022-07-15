import * as React from "react";
import "./SleepPage.css";
import { userState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import SleepOverview from "./SleepOverview";
import SleepNew from "./SleepNew";
import SleepDetail from "./SleepDetail";

export default function SleepPage(props) {
  return (
    <div className="sleep-page">
      {props.user.email ? (
        <main>
          <div className="banner">
            <h1>Sleep</h1>
          </div>
          <Routes>
            <Route
              path="/"
              element={
                <SleepOverview
                  sleep={props.sleep}
                  user={props.user}
                ></SleepOverview>
              }
            ></Route>
            <Route
              path="/create"
              element={<SleepNew addSleep={props.addSleep}></SleepNew>}
            ></Route>
            <Route
              path="/id/:sleepId"
              element={<SleepDetail sleep={props.sleep}></SleepDetail>}
            ></Route>
          </Routes>
        </main>
      ) : (
        <Login user={props.user} setUser={props.setUser}></Login>
      )}
    </div>
  );
}