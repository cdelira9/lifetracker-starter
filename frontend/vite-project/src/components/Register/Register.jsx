import * as React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import apiClient from "../../services/apiClient";

export default function Register(props) {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: "",
  });

  const handleOnInputChange = (event) => {
    if (event.target.name === "password") {
      if (form.passwordConfirm && form.passwordConfirm !== event.target.value) {
        setErrors((e) => ({
          ...e,
          passwordConfirm: "Password's do not match",
        }));
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }));
      }
    }
    if (event.target.name === "passwordConfirm") {
      if (form.password && form.password !== event.target.value) {
        setErrors((e) => ({
          ...e,
          passwordConfirm: "Password's do not match",
        }));
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }));
      }
    }
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
      } else {
        setErrors((e) => ({ ...e, email: null }));
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setErrors((e) => ({ ...e, form: null }));

    const { data, error } = await apiClient.loginUser({
      email: form.email,
      username: form.username,
      first_name: form.firstName,
      last_name: form.lastName,
      password: form.password,
    });
    if (error) {
      setErrors((e) => ({ ...e, form: error }));
    }
    if (data?.user) {
      apiClient.setToken(data.token);
      console.log("data", data);
      props.setUser(data.user);
      navigate("/activity");
    }
    setIsProcessing(false);
  };

  return (
    <div className="Register">
      <div className="card">
        <h2>Register</h2>
        {errors.form && <span className="error">{errors.form}</span>}
        <div className="form">
          <div className="input-field">
            <label for="email">Email</label>
            <input
              for="email"
              name="email"
              placeholder="Enter a valid email"
              value={form.email}
              onChange={handleOnInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="input-field">
            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="your_username"
              value={form.username}
              onChange={handleOnInputChange}
            />
            {errors.username && (
              <span className="error">{errors.username}</span>
            )}
          </div>
          <div className="split-input-field">
            <div className="input-field">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.first_name}
                onChange={handleOnInputChange}
              />
              {errors.firstName && (
                <span className="error">{errors.firstName}</span>
              )}
            </div>
            <div className="input-field">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.last_name}
                onChange={handleOnInputChange}
              />
              {errors.lastName && (
                <span className="error">{errors.lastName}</span>
              )}
            </div>
          </div>
          <div className="input-field">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter a secure password"
              value={form.password}
              onChange={handleOnInputChange}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <div className="input-field">
            <label for="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="Confirm your password"
              value={form.password_confirm}
              onChange={handleOnInputChange}
            />
            {errors.passwordConfirm && (
              <span className="error">{errors.passwordConfirm}</span>
            )}
          </div>
          <button
            className="btn"
            disabled={isProcessing}
            onClick={handleOnSubmit}
          >
            {isProcessing ? "Loading..." : "Create Account"}
          </button>
        </div>
        <div className="footer">
          <p>
            Already have an account? Login
            <a href="/login"> here</a>
          </p>
        </div>
      </div>
    </div>
  );
}
