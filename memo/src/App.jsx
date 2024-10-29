import React from "react";
import Heading from "./Heading.jsx";
import Container from "./Container.jsx";
import Button from "./Button.jsx";
import Paragraph from "./Paragraph.jsx";


import "./App.css";


function App() {
  return (
    <>
      <div className="landingPage">
        <Heading
          className="headingtxt"
          text="Event centric memory & contact board"
        ></Heading>
        <Button className="sign" text="Signup" link="/signup"></Button>
      </div>

      <div className="landingSection2">
        <Heading
          className="Features"
          text="Allow attendes to post pictures from the event on the memory canvas for the events attended."
        ></Heading>

        {/* container box */}
        <div className="sectionContainer">
          {/* container 1 */}

          <Container className="cntr">
            <Container className="cntrdetails"></Container>
            <Heading className="title" text="Event canvas"></Heading>
            <Paragraph
              className="titledesc"
              text="manage event canvas"
            ></Paragraph>
          </Container>

          {/* container 2 */}

          <Container className="cntr">
            <Container className="cntrdetails"></Container>
            <Heading className="title" text="Contact management"></Heading>
            <Paragraph
              className="titledesc"
              text="manage networking details"
            ></Paragraph>
          </Container>
        </div>
      </div>

      {/* section 3 */}

      <div className="section3">
        <Heading className="section3Heading" text="How to?"></Heading>

          <div className="cntrdiv">
        {/* container 1 */}
        <Container className="cntrSection3">
          <Heading className="step" text="1.Share link"></Heading>
          <Paragraph
            className="stepdetail"
            text="Share link with attendes"
          ></Paragraph>
        </Container>

        {/* container 2 */}

        <Container className="cntrSection3">
          <Heading className="step" text="2.Add highlights"></Heading>
          <Paragraph
            className="stepdetail"
            text="Attendes can add event highlights"
          ></Paragraph>
        </Container>

        {/* container 3 */}

        <Container className="cntrSection3">
          <Heading className="step" text="3.Share & connect"></Heading>
          <Paragraph
            className="stepdetail"
            text="Share event canvas with the world."
          ></Paragraph>
        </Container>
      </div>
      </div>

      {/* section 4 */}

      <div className="section4">
      <Button className="signupsec4" text="Signup" link="/signup"></Button>
      <Heading className="section4Title" text="Get started now"></Heading>
      </div>
    </>
  );
}

export default App;
