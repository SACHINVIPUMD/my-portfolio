import React from 'react'
import './Contact.css'
import { IconButton } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Element } from 'react-scroll';
const Contact = () => {
  return (
    <Element className='contact' id='contact'>
        <div className='contactContainer'>
            <p>
                Email : <span>chitratrust0@gmail.com</span>
            </p>
            <p>
                Github Username : <span>SACHINVIPUMD</span>
            </p>
            <div className='contactIcons'>
                <a href='https://in.linkedin.com/in/sachin-vipu-m-d-184116256'>
                    <IconButton>
                        <LinkedInIcon />
                    </IconButton>
                </a>
                <a href='https://www.facebook.com/share/vAEY5v3D48Dp9fkX/?mibextid=qi2Omg'>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                </a>
                <a href='https://www.instagram.com/_sachin_md?igsh=a2VnZm50Z3ZoeWZx'>
                    <IconButton>
                        <InstagramIcon />
                    </IconButton>
                </a>
            </div>
        </div>
    </Element>
  )
}

export default Contact
