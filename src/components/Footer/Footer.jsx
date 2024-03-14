import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import {RiLinkedinFill} from 'react-icons/ri';
import {AiFillYoutube, AiFillGithub, AiOutlineInstagram} from 'react-icons/ai';


const socialLinks = [
  {
    path: "/",
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5'/>
  },
  {
    path: "/",
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5'/>
  },
  {
    path: "/",
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5'/>
  }
  ,
  {
    path: "/",
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5'/>
  }
];

const quickLinks01 =[
  {
    path:"/",
    display:"About Us"
  },
  {
    path:"/",
    display:"About Us"
  },
  {
    path:"/",
    display:"About Us"
  },
  {
    path:"/",
    display:"About Us"
  },
]
const quickLinks03 =[
  {
    path:"/",
    display:"About Us"
  },
  {
    path:"/",
    display:"About Us"
  }
]

const quickLinks02 =[
  {
    path:"/",
    display:"About Us"
  },
  {
    path:"/",
    display:"About Us"
  },
  {
    path:"/",
    display:"About Us"
  },
  {
    path:"/",
    display:"About Us"
  },
]




const Footer = () => {
  const year = new Date().getFullYear();
  return (
  <footer className=' pb-16 pt-10'>
    <div className="container">
      <div className=" flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
        <div>
          <img src={logo} alt="" />
          <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>Copright {year} develop by Vikrant Mainwal</p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer