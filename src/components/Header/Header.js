import React from 'react'
import { Link } from 'react-scroll'
import "./Header.css"

const header = () => {
  return (
    <div className='header'>
      <div className='headerLeft'>
        <h1>Develop<span>er</span></h1>
      </div>
      <div className='headerRight'>
        <Link to='about' smooth={true} duration={500}>
        <h4>About Me</h4>
        </Link>
        <Link to='skills' smooth={true} duration={500}>
        <h4>Skills</h4>
        </Link>
        <Link to='projects' smooth={true} duration={500}>
        <h4>Projects</h4>
        </Link>
        <Link to='exp' smooth={true} duration={500}>
        <h4>Achievements</h4>
        </Link>
        <Link to='contact' smooth={true} duration={500}>
        <h4>Contact</h4>
        </Link>
        <a className='headerRightButton' href='https://in.linkedin.com/in/sachin-vipu-m-d-184116256'>Recruit Me</a>
      </div>
    </div>
  )
}

export default header
