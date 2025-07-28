'use client'
import React from 'react';
import Link from 'next/link';
import Button from '../components/Button';
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from 'react';
import { MdClose } from "react-icons/md";


const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About us", path: "/about" },
    { label: "Service", path: "/services" },
    { label: "Reviews", path: "/reviews" },
    { label: "Blog", path: "/blog" },
    { label: "Faq", path: "/faq" },
    { label: "Contacts", path: "/contact" },
  ];

  return (
    <div className='max-w-7xl1   mx-auto flex justify-between items-center gap-3 py-2 px-4 mt-3'>
      <h2 className='Logo text-orange-400 text-3xl font-bold'>Altica</h2>

      <ul className='hidden md:flex justify-center gap-1'>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link href={item.path} passHref>
              <div className='w-[100px] text-center bg-white text-black hover:bg-orange-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-semibold rounded-full text-sm py-2 transition duration-200 dark:focus:ring-yellow-900 cursor-pointer'>
                {item.label}
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className='hidden md:flex'>
        <Button  content={'Contact Us'}/>
      </div>
        
      <div className='flex md:hidden'>
          <button onClick={()=> setIsOpen(!isOpen)}><AiOutlineMenu className='text-orange-400 text-3xl'/></button>
      </div>
      {isOpen && (
        <div className='absolute w-full top-0 left-0 bg-white z-1 h-full overflow-hidden'>
          <button onClick={()=>setIsOpen(!isOpen)} className='absolute text-3xl text-orange-400 right-2 top-3'><MdClose /></button>
        <ul className="mt-10 flex flex-col items-center gap-5">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.path}>
                <div className="w-[140px] text-center bg-white text-black hover:bg-orange-400 font-semibold rounded-full text-sm py-2 transition duration-200 cursor-pointer shadow">
                  {item.label}
                </div>
              </Link>
            </li> 
          ))}
        </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
