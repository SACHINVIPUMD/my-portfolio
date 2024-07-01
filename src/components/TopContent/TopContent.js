import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css';
const TopContent = () => {
  return (
    <div className='topContent'>
      <div className='topContent_Container'>
        <h1>Sachin Vipu M D</h1>
        <p>A Professional Web and App Developer</p>
        <a href='https://drive.google.com/file/d/1adHkkql8ZUajyypqditAejq7ZET1Ebsd/view?usp=sharing'>
            <button className='topContent_Download'>Download CV</button>
        </a>
        <Link to='projects' smooth={true} duration={500}>
        <button className='topContent_Work'>My Work</button>
        </Link>
      </div>
    </div>
  )
}

export default TopContent
