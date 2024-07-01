import React from 'react'
import { Element } from 'react-scroll'
import skillimg from '../../Assests/portfolioskill.jpg'
import { LinearProgress } from '@mui/material/'
import './SkillContainer.css'
const SkillContainer = () => {
  return (
    
      <Element className='skillContainer' id='skills'>
        <div className='skillContainer_Image'>
            <img src={skillimg}  alt="" />
        </div>
        <div className='skillContainer_Text'>
            <h2>SKILL SET</h2>
            <div className='skillContainer_Skillset'>
                <h5>React</h5>
                <div className="skillContainer_Slider skillContainer_Slider1">
                    <LinearProgress variant='determinate' value={90} />
                </div>
            </div>
            <div className='skillContainer_Skillset'>
                <h5>Node Js</h5>
                <div className='skillContainer_Slider skillContainer_Slider2'>
                    <LinearProgress variant='determinate' value={75} />
                </div>
            </div>
            <div className='skillContainer_Skillset'>
                <h5>Java</h5>
                <div className='skillContainer_Slider skillContainer_Slider3'>
                    <LinearProgress variant='determinate' value={80} />
                </div>
            </div>
            <div className='skillContainer_Skillset'>
                <h5>Docker</h5>
                <div className='skillContainer_Slider skillContainer_Slider4'>
                    <LinearProgress variant='determinate' value={70} />
                </div>
            </div>
            <div className='skillContainer_Skillset'>
                <h5>Spring Boot</h5>
                <div className='skillContainer_Slider skillContainer_Slider5'>
                    <LinearProgress variant='determinate' value={60} />
                </div>
            </div>
            <div className='skillContainer_Skillset'>
                <h5>Dart</h5>
                <div className='skillContainer_Slider skillContainer_Slider6'>
                    <LinearProgress variant='determinate' value={65} />
                </div>
            </div>
        </div>
      </Element>
    
  )
}

export default SkillContainer

