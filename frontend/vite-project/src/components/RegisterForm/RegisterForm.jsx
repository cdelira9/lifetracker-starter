import * as React from "react";
import "./RegistrationPage.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Registration from "../Register/Register";

export default function RegistrationPage(props) {
  const navigate = useNavigate();
  return (
    <div className="registration-page">
      {<Register setUser={props.setUser}></Register>}
    </div>
  );
}
