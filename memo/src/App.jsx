import React from "react";
import Heading from "./Heading.jsx";
import Container from "./Container.jsx";
import Button from "./Button";
import Paragraph from "./Paragraph.jsx";

function App() {
  return (
    <>
      {/* navbar */}
      <div className="navbar">
        <div className="name">
          <Button className="memo" text="memo" link="/"></Button>
        </div>

        <div className="nav">
          <Button className="quicklinks" text="Home" link="/"></Button>
          <Button
            className="quicklinks"
            text="Features"
            link="/features"
          ></Button>
          <Button className="quicklinks" text="About" link="/about"></Button>
        </div>

        <div className="signup">
          <Button
            className="signupBtn"
            text="Get Started"
            link="/signup"
          ></Button>
        </div>
      </div>

      <div className="landingPage">
        <Heading
          classname="headingtxt"
          text="Developer centric memory board"
        ></Heading>
        <Paragraph
          classname="desc"
          text="memo-ry lane and memo management website."
        ></Paragraph>
        <Button className="signupBtn" text="Signup" link="/signup"></Button>
      </div>

      <div className="landingSection2">
        <Heading
          className="Features"
          text="Allow attendes to post pictures from the event on the memory canvas for the events they attend. "
        ></Heading>

        {/* container box */}
        <div className="sectionContainer">
          {/* container 1 */}

          <Container className="cntr">
            <Container className="cntrdetails"></Container>
            <Heading className="title" text="Event canvas"></Heading>
            <Paragraph
              classname="titledesc"
              text="manage event canvas"
            ></Paragraph>
            <Button className="cntrBtn" text="try" link="/signup"></Button>
          </Container>

          {/* container 2 */}

          <Container className="cntr">
            <Container className="cntrdetails"></Container>
            <Heading className="title" text="Event canvas"></Heading>
            <Paragraph
              classname="titledesc"
              text="manage event canvas"
            ></Paragraph>
            <Button className="cntrBtn" text="try" link="/signup"></Button>
          </Container>
        </div>
      </div>

      {/* section 3 */}

      <div className="section3">

        <Heading className='section3Heading' text='How to?' ></Heading>

        {/* container 1 */}
        <Container className='cntrSection3'>
          <Heading className='step' text='1.Share link'></Heading>
          <Paragraph className='stepdetail' text='Share link with attendes'></Paragraph>
        </Container>

        {/* container 2 */}

        <Container className='cntrSection3'>
          <Heading className='step' text='2.Add event highlights'></Heading>
          <Paragraph className='stepdetail' text='Attendes can add event highlights'></Paragraph>
        </Container>

        {/* container 3 */}

        <Container className='cntrSection3'>
          <Heading className='step' text='3.Share with the world'></Heading>
          <Paragraph className='stepdetail' text='Share the event hightlights canvas with the world.'></Paragraph>
        </Container>

      </div>

      {/* section 4 */}

    <div className="section4">
      <Heading classname='section4Title' text='Get started now'></Heading>
      <Button className='signupsec4' text='Signup' link='/signup'></Button>
    </div>

    </>
  );
}

export default App;
