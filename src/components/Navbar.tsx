import React from 'react';
import { NavLink } from "react-router-dom";
import { BsInstagram, BsTiktok } from "react-icons/bs";

const Navbar: React.FC = () => {

    return(
        <>
            <div className='shadow-md w-full fixed top-0 left-0 z-50'>
                <div className='h-24 bg-orange-400 items-center justify-between md:flex py-4 md:px-10'>
                    <div className='flex items-center ml-8'>
                        <NavLink to="/">
                            <img alt='logo' className='w-20 h-20' src={require("../images/ss-logo.png")} />
                        </NavLink>
                    </div>
                    <ul className='md:flex md:items-center'>
                        <li className='md:ml-8 text-xl'>
                            <NavLink to="/gallery">
                                <p className='font-marker hover:text-white duration-500'>gallery</p>
                            </NavLink>
                        </li>
                        <li className='md:ml-8 text-xl'>
                            <NavLink to="/newsletter">
                                <p className='font-marker hover:text-white duration-500'>newsletter</p>
                            </NavLink>
                        </li>
                        <li className='md:ml-8 text-xl'>
                            <NavLink to="/contact">
                                <p className='font-marker hover:text-white duration-500'>contact</p>
                            </NavLink>
                        </li>
                        <li className='md:ml-8 text-2xl'>
                            <a href="https://www.instagram.com/sketchsauceno/">
                                <BsInstagram className='hover:text-white duration-500' />
                            </a>
                        </li>
                        <li className='md:ml-4 text-2xl'>
                            <a href="https://www.tiktok.com/@sketchsauce">
                                <BsTiktok className='hover:text-white duration-500' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;