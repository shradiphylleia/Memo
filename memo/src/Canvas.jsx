import Heading from "./Heading";
import "./Canvas.css";
import Card from "./Card";
import {fakeData} from './data/fakeData'

import React from "react";

function Canvas({ eventName }) {
  return (
    <>
      <Heading className="eventHeading" text={eventName}></Heading>
      <hr />
        <div className="canvas">
          {fakeData.map((image) => (
            <Card key={image.id} cardData={image} />
          ))}
        </div>
        {/* <input type="file" accept="image/*" multiple className="canvasButton" /> */}
    </>
  );
}
export default Canvas;

//render each as an object itself like on the notes app each is different and render and map each of them
