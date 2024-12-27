import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'

const Header = () => {
    return (
        <div className='my-4 flex flex-col md:flex-row justify-evenly items-center'>
            <div id='contact-info' className='px-4 flex space-x-4 text-sm text-[#8c8c8c] flex-wrap justify-center'>
                <p className='flex font-semibold text-nowrap'><Mail className='pr-1'></Mail>info@specxsmartclinic.com.sc</p>
                <p className='flex font-semibold text-nowrap ml-auto'><Mail className='pr-1'></Mail>0 1225 3445</p>
            </div>
            <div id='logo' className='hidden md:block text-center px-4'>
                <p className='text-customColor2 text-2xl font-bold pb-0 mb-0'>Spec<span className='text-customColor text-3xl'>X</span>Smart</p>
                <p className='text-[#c1c1c1] text-sm font-semibold pt-0 mt-0'>Eyewear Evolved</p>
                <p></p>
            </div>
            <div id='get-start' className='flex pt-2 px-4 space-x-4'>
                <Button className='font-bold bg-customColor3 text-customColor'>Log In</Button>
                <Button className='font-bold'>Get Started</Button>
            </div>
        </div>
    )
}

export default Header
