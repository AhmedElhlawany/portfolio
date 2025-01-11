import {
    Skill_data,
    Skill_data2,
    Skill_data3,
    Skill_data4,
  } from "@/constants";
  import React from "react";
  import SkillDataProvider from "../sub/SkillDataProvider";
  import SkillText from "../sub/SkillText";
  
  const Skills = () => {
    return (
      <section
        id="skills"
        className="flex flex-col items-center justify-center gap-3 relative overflow-hidden  py-20"
        style={{ transform: "scale(0.9)" }}
      >
        <SkillText />
  
        <div className="flex flex-row justify-around flex-wrap mt-4 md:gap-14 gap-4 items-center ">
          {Skill_data.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
            
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 md:gap-14 gap-8 items-center ">
          {Skill_data2.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
            
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 md:gap-14 gap-8 items-center ">
          {Skill_data3.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
            
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 md:gap-14 gap-8 items-center">
          {Skill_data4.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
            
          ))}
        </div>

      
  
        {/* <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Frontend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div> */}
        {/* <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Backend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div> */}
        {/* <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Full_stack.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div> */}
        {/* <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Other_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div> */}
  
        <div className="w-full h-full absolute">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video
              className="w-full h-auto"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/cards-video.webm"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;