import * as React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import "./Register.css";

export default function Register() {
  return (
    <div className="Register">
      <div className="card">
        <h2>Register</h2>
        <div className="form">
          <div className="input-field">
            <label for="email">Email</label>
            <input for="email" name="email" placeholder="Enter a valid email" />
          </div>
          <div className="input-field">
            <label for="username">Username</label>
            <input type="text" name="username" placeholder="your_username"/>
          </div>
          <div className="split-input-field">
            <div className="input-field">
                <input type="text" name="firstName" placeholder="First Name"/>
            </div>
            <div className="input-field">
                <input type="text" name="lastName" placeholder="Last Name"/>
            </div>
          </div>
          <div className="input-field">
            <label for="passwordConfirm">Confirm Password</label>
            <input type="password" name="passwordConfirm" placeholder="Confirm your password"/>
          </div>
          <button className="btn">Create Account</button>
        </div>
        <div className="footer">
            <p>Already have an account? Login 
                <a href="/login"> here</a>
            </p>
        </div>
      </div>
    </div>
  );
}
