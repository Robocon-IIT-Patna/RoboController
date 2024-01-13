import React, { useState } from "react";

const Slider = ({ label, value, onChange }) => {
  return (
    <div className="slider">
      <label>{label}</label>
      <input
        className="slider-input"
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></input>
      <span>{value}</span>
    </div>
  );
};

export default Slider;
