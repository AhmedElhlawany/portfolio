'use client'

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Image from "next/image";
import Slider from "react-slick";


const Projects = () => {

 
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 1500,
    arrows:false
  };


  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-20"
      id="projects"
    >
      <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-5/6 ">
      <Slider {...settings}>
<div className="p-5 w-1/3 hover:scale-105 duration-500 ">
<a className='cursor-pointer hover:scale-105 duration-500 w-1/4' popoverTarget="_blank" href='https://ecommerce-app-red-two.vercel.app/login' target="_blank">

<ProjectCard
  src="/cart.jpg"
  title="Ecommerce App"
  description="an application showing products and payment methods with cart and wishlist products using react js ,css,tailwind and some other libraries."
/>
</a>
</div>
<div className="p-5 w-1/3 hover:scale-105 duration-500"> 
<a popoverTarget="_blank" href="https://ahmedelhlawany.github.io/movie-app/" className='w-1/4 cursor-pointer hover:scale-105 duration-500'> 
     <ProjectCard
          src="/movie.jpg"
          title="Movie App"
          description="movie app is an application showing some movies from api using html,css,bootstrap and js."
        />
        </a></div>
<div className="p-5 w-1/3 hover:scale-105 duration-500">
  <a popoverTarget="_blank" href="https://ahmedelhlawany.github.io/weather/" className='w-1/4 cursor-pointer hover:scale-105 duration-500'>
       <ProjectCard
          src="/weather.jpg"
          title="Weather App"
          description="application showing the weather of cities using api ,HTML,CSS,BOOTSTRAP and JS."
        />
       </a></div>
<div className="p-5 w-1/3 hover:scale-105 duration-500" >
  <a popoverTarget="_blank" href="https://ahmedelhlawany.github.io/crud/" className='w-1/4 cursor-pointer hover:scale-105 duration-500'>
       <ProjectCard
          src="/crud.jpg"
          title="Crud"
          description="application showing a system that you can add  products to the list,update and delete from them  using HTML,CSS,BOOTSTRAP and JS."
        />
       </a></div>
        
       <div className="p-5 w-1/3 hover:scale-105 duration-500">
       <a popoverTarget="_blank" href="https://ahmedelhlawany.github.io/Login/" className='w-1/4 cursor-pointer hover:scale-105 duration-500'>
       <ProjectCard
          src="/login.jpg"
          title="Login System"
          description="system for login and register by user using HTML,CSS,BootStap and JS"
        />
       </a>
       </div>
       </Slider>

       

      
        
      </div>
    </div>
  );
};

export default Projects;