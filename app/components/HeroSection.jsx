"use client";
import React from 'react';
import Image from 'next/image';
import { IoCloudDownloadOutline } from "react-icons/io5";
import { RiContactsLine } from "react-icons/ri";
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const HeroSection = ({ scrollToContact }) => {
  return (
    <section className='p-4 grid grid-cols-1 lg:grid-cols-12 mt-10'>
      <div className='col-span-7 place-self-center order-2 lg:order-1 sm:items-center sm:justify-between lg:text-left text-center'>
        <div className='text-6xl text-white'>Hi I'm <br />
          <div className='text-3xl py-4 mt-7 lg:leading-normal text-secondary'>
            <TypeAnimation
              sequence={[
                'Reejay Yadav',
                1000,
                'Front-end Developer',
                1500,
                'DTU Student',
                900,
                'Ui/UX Designer',
                1100
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </div>
        </div>
        <p className='text-white/65 text-lg lg:text-xl mt-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores necessitatibus dolorem dolor molestiae
        </p>
        <div className='flex flex-col lg:flex-row p-3 my-8 items-center gap-8'>
          <Link href = {'#contact'}
            className='w-full lg:w-auto border-[2px] rounded-xl p-2 text-white bg-secondary hover:bg-primary hover:border-secondary hover:text-secondary flex justify-center items-center px-10 transition duration-300 ease-in-out'
            onClick={scrollToContact}
          >
            <p className='flex flex-row gap-3 items-center'><RiContactsLine className='text-xl' />Contact Me</p>
          </Link>
          <Link href='https://red-nadya-64.tiiny.site'  target="_blank" className='w-full lg:w-auto border-[2px] px-6 rounded-xl p-2 text-white bg-secondary hover:bg-primary hover:border-secondary hover:text-secondary flex justify-center items-center transition duration-300 ease-in-out'>
            <p className='flex flex-row gap-3 items-center'><IoCloudDownloadOutline className='text-xl' />Download CV</p>
          </Link>
        </div>
      </div>
      <div className='col-span-5 p-4 order-1 lg:order-2 mb-3 justify-center items-center relative w-full h-[500px] lg:w-[500px] lg:h-[500px] text-center'>
        <Image src="/photo.png" alt="Profile Photo" className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' width={300} height={300} />
      </div>
    </section>
  );
};

export default HeroSection;
