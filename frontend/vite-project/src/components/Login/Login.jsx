import * as React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apiClient from "../../services/apiClient";
import { useAuthContext } from "../../contexts/auth";

export default function Login(props) {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleOnInputChange = (event) => {
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
    <div className="Login">
      <div className="card">
        <h2>Login</h2>
        <h3 className="login-err">Login to track your lifestyle.</h3>
        {Boolean(errors.form) && <span className="error">{errors.form}</span>}
        <div className="form">
          <div className="input-field">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="user@gmail.com"
              value={form.email}
              onChange={handleOnInputChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="input-field">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={form.password}
              onChange={handleOnInputChange}
            />
          </div>
          <button
            className="btn"
            disabled={isProcessing}
            onClick={handleOnSubmit}
          >
            {isProcessing ? "Loading..." : "Login"}
          </button>
        </div>
        <div className="footer">
          <p>
            Don't have an account? Sign up <a href="/register">here.</a>
          </p>
        </div>
      </div>
    </div>
  );
}
