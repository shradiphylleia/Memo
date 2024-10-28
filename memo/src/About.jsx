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
    As event organizers you can share canvas link with the attendees who can add the highlights from their end.
    Allowing the attendees to share event highlights.
    Additionally the users can maintain and manage the contacts they have made during the events attended.</p>

    <Container className='cntrAbout'>
      <Button className='signupAbout' link='/signup' text='try now'></Button>
    </Container>

    <div className="creator">
    <h4>Dev team:shraddha/shradiphylleia</h4>
    <p>The creator is a student based out of India. She likes community events and has a nick for photography. In her solitary moments she can be seen enjoying long form content around critical analysis of cinematograhy among others.</p>
    </div>

    <div className='creds'>
      <h3>Special thanks to the references which hepled me elevate this project</h3>
      <a href="https://codepen.io/cassidoo/pen/QMZmNV">Camera on feature page</a>
    </div>
    </div>
   </>
  )
}

export default About