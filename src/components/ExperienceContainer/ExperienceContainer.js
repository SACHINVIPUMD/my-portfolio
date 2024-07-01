import React from 'react'
import './ExperienceContainer.css'
import { Element } from 'react-scroll'
import ExeprienceBox from '../ExperienceBox/ExeprienceBox'
const ExperienceContainer = () => {
  return (
    <Element className='experienceContainer' id='exp'>
        <h1>Achivements</h1>
        <div className='experienceContainer_Info'>
            <ExeprienceBox number="20+" title="Certifications" />
            <ExeprienceBox number="150+" title="DSA Problems Solved" style={{backgroundColor: "#f64c08"}}/>
            <ExeprienceBox number="10+" title="Tech Events" />
            <ExeprienceBox number="5+" title="Hackathons" />
        </div>
    </Element>
  )
}

export default ExperienceContainer
