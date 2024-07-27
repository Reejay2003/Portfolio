"use client";
import React, { useState } from 'react';
import Card from './Card';
import { ScrollArea } from "@/components/ui/scroll-area"
import ProjectTag from './ProjectTag';

const info = [
  {
    title: "Weather App",
    description: "Responsive weather app that tells magnitude of info about the weather and is majorly a showcase of my tailwind and api understanding",
    url: "/weather.png",
    tag:"All, Next",
    git: "https://github.com/Reejay2003/Weather-App",
    vercel: ""
  },
  {
    title: "Weather App",
    description: "Responsive weather app that tells magnitude of info about the weather and is majorly a showcase of my tailwind and api understanding",
    url: "/weather.png",
    tag:"All, React",
    git: "https://github.com/Reejay2003/Weather-App",
    vercel: ""
  },
  {
    title: "Weather App",
    description: "Responsive weather app that tells magnitude of info about the weather and is majorly a showcase of my tailwind and api understanding",
    url: "/weather.png",
    tag:"All, Next",
    git: "https://github.com/Reejay2003/Weather-App",
    vercel: ""
  },
  {
    title: "Weather App",
    description: "Responsive weather app that tells magnitude of info about the weather and is majorly a showcase of my tailwind and api understanding",
    url: "/weather.png",
    tag:"All, React",
    git: "https://github.com/Reejay2003/Weather-App",
    vercel: ""
  },
  // Add more project objects as needed
];

const Work = () => {
   const [tag, setTag] = useState("All");

   const handleTag = (newTag) =>{
    setTag(newTag);
   }

   const filteredProject = info.filter((project) => 
      project.tag.includes(tag)
   ); 

  return (
    <div className='mt-10 flex flex-col items-center justify-center'>
      <div className='text-5xl font-mono text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-[#29f5f5] to-[#d1124e]'>My Projects</div>
      <div className='flex my-10'>
        <ProjectTag  onClick={handleTag} isSelected={tag == 'All'} name={'All'}></ProjectTag>
        <ProjectTag  onClick={handleTag} isSelected={tag == 'Next'} name={'Next'}></ProjectTag> 
        <ProjectTag  onClick={handleTag} isSelected={tag == 'React'} name={'React'}></ProjectTag>
      </div>
      <ScrollArea className="w-full h-[400px] overflow-y-auto flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredProject.map((item, index) => (
            <Card info={item} key={index} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default Work;
