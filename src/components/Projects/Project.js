import React from 'react'
import './Project.css'
import { useState } from 'react';
const Project = ({img,title,desc,link}) => {
    const [show, setshow] = useState(false);
  return (
    <a href={link}>
        <div className='project'
         onMouseEnter={()=>setshow(true)} 
         onMouseLeave={()=>setshow(false)}>
            {
                show?(
                    <div className='projectContent'>
                        <h4>{title}</h4>
                        <p>{desc}</p>
                    </div>
                ):(
                    <img src={img} alt='' />
                )
            }
        </div>
    </a>
  )
}

export default Project
