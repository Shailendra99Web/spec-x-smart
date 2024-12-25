import { SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav className="hidden md:block bg-customColor3 p-4 border-[#e4f3f7] border-t border-b text-customColor2">
                <ul className="flex flex-row sm:space-x-8 justify-center font-bold text-sm">
                    <li><a className="text-customColor hover:text-customColor" href="/">Home</a></li>
                    <li><a className="text-primary hover:text-customColor" href="/">Specx</a></li>
                    <li className="relative group">
                        <a className="text-primary hover:text-customColor" href="/">Book An Eye Exam</a>
                        {/* <ul className="absolute hidden group-hover:block bg-white text-primary mt-2 space-y-2 p-2 shadow-lg">
                            <li><a className="block hover:bg-gray-100 p-2" href="/book-an-eye-exam/option1">Option 1</a></li>
                            <li><a className="block hover:bg-gray-100 p-2" href="/book-an-eye-exam/option2">Option 2</a></li>
                            <li><a className="block hover:bg-gray-100 p-2" href="/book-an-eye-exam/option3">Option 3</a></li>
                        </ul> */}
                    </li>
                    <li><a className="text-primary hover:text-customColor" href="/">Eye XBucks</a></li>
                    <li><a className="text-primary hover:text-customColor" href="/">About Us</a></li>
                    <li><a className="text-primary hover:text-customColor" href="/">FAQ</a></li>
                    <li><a className="text-primary hover:text-customColor" href="/">Contact Us</a></li>
                </ul>
            </nav>

            {/* for Mobile View */}
            <div className='flex md:hidden pt-2 px-4 justify-evenly'>
                <div className='relative'>
                    <div className=''>
                        <button className="relative group">
                            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-primary ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                                <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                                    <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]"></div>
                                    <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10"></div>
                                    <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]"></div>
                                </div>
                            </div>
                        </button>
                    </div>
                    <SidebarTrigger className='absolute w-full h-full top-0 !bg-transparent' />
                </div>
                <div id='logo' className='text-center'>
                    <p className='text-customColor2 text-2xl font-bold pb-0 mb-0'>Spec<span className='text-customColor text-3xl'>X</span>Smart</p>
                    <p className='text-[#c1c1c1] text-sm font-semibold pt-0 mt-0'>Eyewear Evolved</p>
                    <p></p>
                </div>
            </div>
        </>
    );
};

export default Navbar;