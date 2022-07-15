import * as React from "react";
import "./LoginForm.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";

export default function LoginForm(props) {
  const navigate = useNavigate();
  return (
    <div className="login-page">
      {props.user?.user?.email ? (
        React.useEffect(() => {
          navigate("/activity"), [];
        })
      ) : (
        <Login setUser={props.setUser}></Login>
      )}
    </div>
  );
}
