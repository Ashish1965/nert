import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { SiTorbrowser } from "react-icons/si";

export default function Home() {
  return (
    <section>
      <div className="flex justify-start md:justify-center">
        <div className="md:w-1/3 w-1/2">
        <img src="asserts/logo.png" alt="" />
        </div>
      </div>
      <div className="flex md:flex-row gap-x-5 flex-col mx-5 justify-center items-center">
      <div className="md:w-1/3">
          <img src="asserts/1.png" alt="" />
        </div>
        <div className="md:w-2/3">
        <h1 className="py-2 font-bold text-lg">C.R.L. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h1>
        <ul className="list-disc ml-10">
          <li className="text-sm font-semibold">C.R.1.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
          <li className="text-sm font-semibold">C.R.1. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
        </ul>
          <img src="asserts/2.png" alt="" />
          <p className="text-sm font-semibold">Government of India has awarded the <span className="font-bold">"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
      </div>
      <div className="flex justify-center items-center p-5">
        <p className="text-sm font-semibold">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
      </div>
      <div className="px-20">
        <img src="asserts/3.png" alt="" />
        <p className="text-center text-sm p-5">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
        <hr className="border-y-2px mx-20 border-red-600" />
      </div>
      <div className="flex items-center justify-center flex-col p-5">
        <h1 className="py-2 font-bold text-lg">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h1>
        <p className="text-sm font-semibold text-center mt-5">CHEMICALS & PROCESS <span className="text-red-500">|</span> POWER <span className="text-red-500">|</span> WATER & WASTE WATER <span className="text-red-500">|</span> OILS & GAS <span className="text-red-500">|</span> PHARMA <span className="text-red-500">|</span> SUGARS & DISTILLERIES <span className="text-red-500">|</span> PAPER & PULP <span className="text-red-500">|</span> MARINE & DEFENCE <span className="text-red-500">|</span> METAL & MINING</p>
        <p className="text-sm font-semibold text-center mt-5">FOOD & BEVERAGE <span className="text-red-500">|</span> PETROCHEMICAL & REFINERIES <span className="text-red-500">|</span> SOLAR <span className="text-red-500">|</span> BUILDING <span className="text-red-500">|</span> HVAC <span className="text-red-500">|</span> FIRE FIGHTING <span className="text-red-500">|</span> AGRICULTURE & RESIDENTIAL</p>
      </div>
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
    </section>
  );
}
