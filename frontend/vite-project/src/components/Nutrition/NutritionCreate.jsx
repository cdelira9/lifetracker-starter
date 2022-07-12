import * as React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import "./NutritionCreate.css";

export default function NutritionCreate() {
  return (
    <div className="NutritionPage">
      <div className="Banner">
        <h1>Nutrition</h1>
      </div>
      <div className="content">
        <div className="NutritionNew">
          <h2>Record Nutrition</h2>
          <div className="form">
            <div className="InputField">
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Nutrition name"
              ></input>
            </div>
            <div className="InputField">
              <label for="category">Category</label>
              <input
                type="text"
                name="category"
                placeholder="Nutrition category"
              ></input>
            </div>
            <div className="split-input-field">
              <div className="InputField">
                <label for="quantity">Quantity</label>
                <input
                  type="number"
                  name="calories"
                  min="1"
                  max="100000000"
                  value="1"
                ></input>
              </div>
              <div className="InputField">
                <label for="calories">Calories</label>
                <input
                  type="number"
                  name="calories"
                  min="0"
                  max="10000000000"
                  step="10"
                  value="1"
                ></input>
              </div>
            </div>
            <div className="InputField">
              <label for="imageUrl">Image URL</label>
              <input
                type="text"
                name="imageUrl"
                placeholder="http://www.food-image.com/1"
              />
            </div>
            <button className="Button primary large aqua">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
