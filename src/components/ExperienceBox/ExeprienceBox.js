import React from 'react'
import './ExeprienceBox.css'
const ExeprienceBox = ({number,title,style}) => {
  return (
    <div style={{...style}} className='experienceBox'>
      <h1>{number}</h1>
      <p>{title}</p>
    </div>
  )
}

export default ExeprienceBox
