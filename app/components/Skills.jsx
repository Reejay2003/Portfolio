import React from 'react'
import { SiGooglesheets } from "react-icons/si"; // Excel
import { SiCanva } from "react-icons/si"; // Canva
import { VscCode } from "react-icons/vsc"; // Web development
import { TbBinaryTree } from "react-icons/tb"; // DSA
import { ScrollArea } from "@/components/ui/scroll-area"

const icons = [
  {
    number: "01",
    title: "Excel",
    path: <SiGooglesheets />,
  },
  {
    number: "02",
    title: "Canva",
    path: <SiCanva />,
  },
  {
    number: "03",
    title: "Web-Dev",
    path: <VscCode />,
  },
  {
    number: "04",
    title: "Data Structures",
    path: <TbBinaryTree />,
  },
];

const Skills = () => {
  return (
    <ScrollArea className="h-[290px] w-full  border-0 ">
      <div className='p-6'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6'>
        {icons.map((icon, index) => (
          <div 
            key={index} 
            className='w-full h-48 p-4 border-gray-300 bg-white/15 ring-1 ring-black/5 rounded-lg flex flex-col items-center justify-center space-y-2 hover:text-purple-300 transition-colors duration-300'
          >
            <div className='flex items-center space-x-2 mb-10'>
              <div className='text-3xl mr-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 hover:from-purple-300 hover:to-purple-500 transition-colors duration-300'>{icon.number}</div>
              <div className='text-4xl'>{icon.path}</div>
            </div>
            <div className='text-xl font-extrabold mt-10 text-center w-3/4'>{icon.title}</div>
          </div>
        ))}
      </div>
    </div>

    </ScrollArea>
    
  );
};

export default Skills;
