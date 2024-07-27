import React from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Technologies from './Technologies'
import Education from './Education'
import Intern from './Intern'
import Skills from './Skills'

const About = () => {
  return (
    <section>
        <div className='flex flex-row-1 lg:flex-row-2 '>
            <div className='lg:block hidden mx-10'>
                <Image src={"/goku.jpg"} width={1050} height={3000} className='my-2'/>
                
            </div>
            <div className='lg:mx-5 lg:mr-10'>
                <div className='text-3xl mb-3 text-secondary'>About Me</div>
                <div className='text-lg text-white/45'> 
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid est fugit maxime sequi, doloribus in distinctio asperiores reiciendis nobis laborum dolorem. Voluptatum itaque veniam nesciunt esse doloremque deserunt mollitia molestiae!
                </div>
                <div className='mt-5 items-center justify-center lg:ml-20'> 
                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList className="text-xl">
                        <TabsTrigger value="Tskills">Skills</TabsTrigger>
                        <TabsTrigger value="Nskills">Technologies</TabsTrigger>
                        <TabsTrigger value="Education">Education</TabsTrigger>
                        <TabsTrigger value="Intern">Experience</TabsTrigger>

                    </TabsList>
                    <TabsContent value="Tskills"><Skills/></TabsContent>
                    <TabsContent value="Nskills"><Technologies/></TabsContent>
                    <TabsContent value="Education"><Education/></TabsContent>
                    <TabsContent value="Intern"><Intern/></TabsContent>
                </Tabs>


                </div>
            </div>
        </div>
    </section>
  )
}

export default About