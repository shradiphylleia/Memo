import React from "react";
import Button from "./Button";
import Camera from "./Camera";
import "./Feature.css";

function Feauter() {
  return (
    <>
      <Camera></Camera>
      <div className="ftr">
        <div className="canvas">
          <div className="canvasdesc">
            <h1>Event Canvas</h1>
            <p>
              {" "}
              As event organizers share canvas link with the attended who can
              add the highlights from their end. Allow the attendees to share
              event highlights.
            </p>
          </div>
          <img src="src/assets/camera.png" alt="a camera potrait" />
        </div>

        <div className="contact">
          <img
            src="src/assets/attendees.png"
            alt="a graphic depicting two people at an event"
          />
          <div className="contactDesc">
            <h1>Contact management</h1>
            <p>
              Manage contact details for the people you meet during
              events.Schedule future meets and save notes about the people to
              ease interaction
            </p>
          </div>
        </div>
        <div className="signcntr">
          <Button className="fsignup" link="/signup" text="try now"></Button>
          <h1>memo-ry</h1>
        </div>
      </div>
    </>
  );
}

export default Feauter;
