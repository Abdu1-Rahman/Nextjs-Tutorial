import React from 'react';
import Link from 'next/link';
import Button from '../components/Button';

const NavBar = () => {
  const navItems = [
    { label: "About us", path: "/about" },
    { label: "Service", path: "/services" },
    { label: "Reviews", path: "/reviews" },
    { label: "Blog", path: "/blog" },
    { label: "Faq", path: "/faq" },
    { label: "Contacts", path: "/contact" },
  ];

  return (
    <div className='flex justify-between items-center gap-3 py-2 px-4 mt-3'>
      <h2 className='Logo text-orange-400 text-3xl font-bold'>Altica</h2>

      <ul className='flex justify-center gap-1'>
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

      <div>
        <Button  content={'Contact Us'}/>
      </div>
    </div>
  );
};

export default NavBar;
