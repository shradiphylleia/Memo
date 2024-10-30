import React, { useState, useEffect } from "react";
import Heading from "./Heading";
import "./Canvas.css";
import Card from "./Card";
import { db } from "./appwrite/databases";

function Canvas({ eventName }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const init = async () => {
      try {
        const response = await db.canvas.list(); // Replace 'images' with the collection ID in your database
        setImages(response.documents);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };
    
    init();
  }, []);

  return (
    <>
      <Heading className="eventHeading" text={eventName} />
      <hr />
      <div className="canvas">
        {images.map((image) => (
          <Card key={image.$id} cardData={image} />
        ))}
      </div>
      {/* <input type="file" accept="image/*" multiple className="canvasButton" /> */}
    </>
  );
}

export default Canvas;
