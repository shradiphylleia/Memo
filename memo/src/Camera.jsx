import React from "react";
import "./Camera.css";


function Camera() {
  return (
    <>
      <div class="container">
        <div class="camera-top">
          <div class="zoom"></div>
          <div class="mode-changer"></div>
          <div class="sides"></div>
          <div class="range-finder"></div>
          <div class="focus"></div>
          <div class="red"></div>
          <div class="view-finder"></div>
          <div class="flash">
            <div class="light"></div>
          </div>
        </div>
        <div class="camera-mid">
          <div class="sensor"></div>
          <div class="lens"></div>
        </div>
        <div class="camera-bottom"></div>
      </div>
    </>
  );
}

export default Camera;
