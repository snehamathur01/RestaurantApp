import React, { useState } from "react";
import "./styles.css";
import RC from "./Rcollection.js";
var db = Object.keys(RC);
export default function App() {
  const [cuisine, setCuisine] = useState("Indian");
  function onclickHandler(food) {
    setCuisine(food);
  }

  return (
    <div className="App">
      <h1>Restaurant Recommendation</h1>
      <ul>
        {db.map(function (food, index) {
          return (
            <li key={index} onClick={() => onclickHandler(food)}>
              {food}
            </li>
          );
        })}
      </ul>
      <div>
        {RC[cuisine].map((item) => {
          return (
            <div className="items">
              <div
                style={{ fontSize: "xx-large", padding: "30px", color: "red" }}
              >
                {item.name}
              </div>
              <div>
                <img src={item.img}></img>
              </div>
              <div className="rating">
                <span>{item.rating}</span>
              </div>
              <div style={{ fontSize: "x-large", paddingBottom: "100px" }}>
                {item.review}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
