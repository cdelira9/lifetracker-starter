import * as React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  //   const handleOnInputChange = (event) => {
  //     if(event.target.name === "email"){
  //         if(event.target.value.indexOf("@") === -1){
  //             setErrors((e) => ({...e, email:}))
  //         }
  //     }
  //   }

  return (
    <div className="Login">
      <div className="card">
        <h2>Login</h2>
        <div className="form">
          <div className="input-field">
            <label for="email">Email</label>
            <input type="email" name="email" placeholder="user@gmail.com" />
          </div>
          <div className="input-field">
            <label for="password">Password</label>
            <input type="password" name="password" placeholder="password" />
          </div>
          <button className="btn">Login</button>
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
