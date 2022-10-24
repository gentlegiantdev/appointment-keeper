import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="about-div">
      <p>Appointment Keeper helps you keep your appointments by keeping track of them for you.</p>
      <h4>Version 1.0.2</h4>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About
