import React from 'react';

// Import icons
import { BsGithub, BsTelegram, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='bg-footer bg-cover bg-no-repeat bg-center min-h-[263px] flex items-center py-8'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row justify-between'>
          {/* Logo */}
          <div className='flex-1 text-orange text-4xl text-center lg:text-left flex items-center justify-center lg:justify-start mb-6'>Pet First</div>
          <div className='text-white flex-1'>
            {/* Links */}
            <ul className='flex flex-col gap-y-6 items-center lg:flex-row lg:gap-x-4 text-base font-semibold mb-8'>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            {/* Social */}
            <div className='flex justify-center lg:justify-start'>
              <div className='mr-6'>Follow</div>
              <ul className='flex gap-x-4'>
                <li>
                  <a href="#"><BsGithub /></a>
                </li>
                <li>
                  <a href="#"><BsInstagram /></a>
                </li>
                <li>
                  <a href="#"><BsTelegram /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
