import React from 'react';
import { IoCallOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { SiTorbrowser } from "react-icons/si";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row w-full h-28 bg-red-500 justify-center">
        <div className="md:w-1/3 flex flex-row justify-center md:items-center md:h-full">
        <a href="/" className="flex flex-row gap-3"><IoCallOutline className="bg-white rounded-full w-6 h-6"/><p className="text-white">Toll free 1800 200 1234</p></a>
        </div>
        <div className="md:w-1/3 flex flex-row justify-center md:items-center md:h-full">
        <a href="/" className="flex flex-row gap-3"><FaFacebook className="bg-white rounded-full w-6 h-6"/><p className="text-white">www.facebook.com/cripumps</p></a>
        </div>
        <div className="md:w-1/3 flex flex-row justify-center md:items-center md:h-full">
        <a href="" className="flex flex-row gap-3"><SiTorbrowser className="bg-white rounded-full w-6 h-6"/><p className="text-white">www.crigroups.com</p></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
