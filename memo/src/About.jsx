import React from 'react'
import Container from './Container.jsx'
import Button from './Button.jsx'
import './About.css'

function About() {
  return (
   <>
   <div className="aboutDiv">
   <h1>Premise :)</h1>
   <p>We attend alot of events but miss out on the event photographs and overall hightlights.
    As event organizers share canvas link with the attended who can add the highlights from their end.
    Allow the attendees to share event highlights.
    Additionaly the users can maintain and manage the contacts they have made during the sttended events.</p>

    <Container className='cntrAbout'>
      <Button className='signupAbout' link='/signup' text='try now'></Button>
    </Container>

    <div className="creator">
    <h4>Dev team:shraddha/shradiphylleia</h4>
    <p>The creator is a student based out of India. She likes community events and has a nick for photography. In her solitary moments she can be seen enjoying long form content around critical analysis of cinematograhy among others.</p>
    </div>
    </div>
   </>
  )
}

export default About