import React from 'react'
import img1 from '../../Assests/RMS.jpeg'
import img2 from '../../Assests/bookstore.jpeg'
import img3 from '../../Assests/docker.jpeg'
import img4 from '../../Assests/md houses.jpeg'
import img5 from '../../Assests/landing.jpeg'
import img6 from '../../Assests/portfolio.jpeg'
import Project from '../Projects/Project'
import { Element } from 'react-scroll';
import './ProjectContainer.css'
const ProjectContainer = () => {
  const projects = [
    {
      img : img1,
      title: "Restaurant Management System",
      desc: " A software application to streamline and automate restaurant operations, including order processing, inventory management, and customer service.",
      link: "https://md-foods.netlify.app/"
    },
    {
      img : img2,
      title: "Online Book Store",
      desc: "An Online Book Store project focuses on creating a platform for users to search for and explore a wide range of books integrated with API.",
      link: "https://mdbooks-lib.netlify.app/"
    },
    {
      img : img3,
      title: "AWS Docker",
      desc: "AWS Docker project involves deploying and managing containerized applications using Docker on AWS cloud infrastructure.",
      link: "https://md-foods.netlify.app/"
    },
    {
      img : img4,
      title: "MD Houses",
      desc: "This project involves creating a website using HTML, CSS, and JavaScript to list and showcase properties for sale.",
      link: "https://md-foods.netlify.app/"
    },
    {
      img : img5,
      title: "Md Foods",
      desc: "Developing a platform for users to search for and discover various restaurants and their offerings.",
      link: "https://md-foods.netlify.app/"
    },
    {
      img : img6,
      title: "My Portfolio",
      desc: "A Portfolio project involves creating a personal website to showcase skills, projects, and professional achievements using modern web technologies.",
      link: "https://md-foods.netlify.app/"
    },

  ];
  return (
    <Element className='projectContainer' id='projects'>
      <h1>Projects</h1>
      <p>
        Here are some projects to showcase my technical skill.
      </p>
      <div className='projectContainer_projects'>
    {
        projects.map((project,index)=>{
          return (
            <Project key={index}
            img={project.img} 
            title={project.title} 
            desc={project.desc} 
            link={project.link}
            />
          );
        })
    }
    </div>
    </Element>
  )
}

export default ProjectContainer
