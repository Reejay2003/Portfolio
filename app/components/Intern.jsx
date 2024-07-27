import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"

const description = [
  {
    number: "01",
    title: "PA to Member of Legislative Assembly",
    path: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ullam provident assumenda. Eveniet labore libero et, laborum laboriosam quam alias assumenda error harum quis nemo",
  },
  {
    number: "02",
    title: "PCS Nepal - ERP Login Portal",
    path: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ullam provident assumenda. Eveniet labore libero et, laborum laboriosam quam alias assumenda error harum quis nemo",
  },
  {
    number: "03",
    title: "DTU SE Dept. x LG Office  Task management System",
    path: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ullam provident assumenda. Eveniet labore libero et, laborum laboriosam quam alias assumenda error harum quis nemo",
  },
  
];

const Intern = () => {
  return (
    <ScrollArea className="h-[290px] w-full  border-0 ">
      <div className='flex flex-col gap-6 p-6 '>
        {description.map((icon, index) => (
          <div 
            key={index} 
            className='w-full p-4 border-gray-300 bg-white/15 ring-1 ring-black/5 rounded-lg flex flex-col items-center justify-center space-y-2 hover:text-purple-300 transition-colors duration-300'
          >
            <div className='flex items-center space-x-2 mb-4'>
              <div className='text-3xl mr-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 hover:from-purple-300 hover:to-purple-500 transition-colors duration-300'>{icon.number}</div>
              <div className='text-lg font-bold'>{icon.title}</div>
            </div>
            <div className='text-sm ml-[-15px] mt-2 text-left font-mono w-3/4'>{icon.path}</div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

export default Intern