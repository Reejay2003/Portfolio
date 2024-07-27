import Link from "next/link";
import Socials from "./Social";
import CForm from "./CForm";

const Contact = () => {
  return (
    <div className="mb-14 mt-20">
      <div className='flex items-center justify-center mb-10'>
        <div className='text-5xl font-mono font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#29f5f5] to-[#d1124e]'>
          Contact
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-10">
        <div className="w-full lg:w-1/3 mb-10 lg:mb-0">
          <p className="text-2xl font-bold">Let's Connect</p>
          <p className="text-white/70 text-lg mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas fugiat explicabo tempora non distinctio sed.
          </p>
          <div className="flex flex-row mt-4">
            <Socials />
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <CForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
