import React, { useState } from 'react'
import pic from '../assets/Profile.avif'
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { navBar } from '../common/utils';

function Navbar() {
    const [menu, setMenu] = useState(false);
    
    const NavbarItem = () =>{
        return navBar.map((element, index)=>(
            <li key={index} className='hover:scale-105 duration-200 cursor-pointer font-medium'>{element.name}</li>
    ))
}
    
    return (
        <div className='max-w-screen-2x1 container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0  '>
            <div className='flex justify-between items-center h-16'>
                <div className='flex space-x-2'>
                    <img src={pic} className='h-12 w-12 rounded-full' alt="image" />
                    <h1 className='font-semibold text-xl cursor-pointer'>Nikun<span className='text-green-500 text-2xl'>j</span>
                        <p className='text-sm'>Forn-end Developer</p>
                    </h1>
                </div>
                {/* Desktop bar */}
                <div>
                    <ul className='hidden md:flex space-x-8'>
                    {NavbarItem()}
                    </ul>
                    <button onClick={() => setMenu(!menu)} className='md:hidden'>
                        {
                            menu ?
                                <IoMdClose size={24} />
                                :
                                <RiMenu3Line size={24} />
                        }
                    </button>
                </div>
            </div>

            {/* mobile Dev bar */}
            {
                menu &&(
                    <div>
                        <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-10  text-xl '>
                        {NavbarItem()}
                        </ul>
                    </div>
                )
            }

        </div>
    )
}

export default Navbar