import React from "react";
import "./Card.css";
import food from "./victoriasponge.jpeg"; // Tell webpack this JS file uses this image

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-group">
          <h5 className="card-title">{props.title}</h5>
        </div>
      </div>
      <img className="card-image" src={food} alt="Logo" />
      <div className="card-text">{props.preparationtime}</div>
      <div className="card-text">{props.cookingtime}</div>
      <div className="card-text">{props.serving}</div>
      </div>
  );
}