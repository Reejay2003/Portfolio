import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaInstagram, FaFire} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const social = [
    {icon: <FaGithub/>, path: ""},
    {icon: <FaLinkedinIn/>, path: ""},
    {icon: <FaInstagram/>, path: ""},
    {icon: <SiLeetcode/>, path: ""},
]

const Socials = () => {
  return (
    <div className="grid grid-cols-4 gap-6 mt-6">
        {social.map((item, index) => {
            return <Link key={index} href= {item.path} className="text-2xl hover:text-purple-500" >{item.icon}</Link>
        })}
    </div>
  )
}

export default Socials