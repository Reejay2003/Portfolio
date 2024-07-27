import { Link } from 'lucide-react';
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Card = ({ info }) => {
  return (
    <div className='w-[500px] bg-primary rounded-xl cursor-pointer shadow-lg overflow-hidden my-2 lg:mx-10 group'>
      <div
        className='w-full h-[200px] relative'
        style={{
          backgroundImage: `url(${info.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='absolute top-0 left-0 w-full  h-full bg-slate-600 bg-opacity-80 hidden group-hover:flex group-hover:flex-row items-center justify-center'>
          <a href={info.git} target="_blank" >
            <FaGithub  className='mr-20 text-[72px] hover:border-[0.5px] p-[3px] hover:text-white/80 rounded-full' />
          </a>
          <a href={info.vercel} target="_blank" >
            <FaEye className='text-[72px] hover:border-[0.5px] p-[3px] hover:text-white/80 rounded-full' />
          </a>
        </div>
      </div>
      <div className='p-3'>
        <div className='text-xl font-extrabold mb-2 group-hover:text-blue-400'>{info.title}</div>
        <div className='text-lg text-white/50 group-hover:text-blue-400'>{info.description}</div>
      </div>
    </div>
  );
};

export default Card;
