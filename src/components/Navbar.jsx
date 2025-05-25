import React, { useRef, useState } from 'react'
import Logo from './Logo';

const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    // set the target element that will be collapsed or expanded (eg. navbar menu)
    const userDropDown = useRef();

    // optionally set a trigger element (eg. a button, hamburger icon)
    const NavDropDown = useRef();

    return (
        <nav className="bg-[white] z-[99] border-gray-200 fixed top-0 left-0 w-full dark:bg-[#161515] p-4 global-px">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                <Logo className={'h-8 text-lg'} />
                <div className="flex items-center md:order-2 space-x-3 md:space-x-3 rtl:space-x-reverse">
                    {/* Login/ Profile Button */}
                    {
                        !loggedIn ?
                            <button id='get-started' type="button" className="text-white bg-[#d40000] hover:bg-red-800 font-medium rounded-lg text-xs sm:text-sm px-4 py-2 text-center dark:bg-red-700 dark:hover:bg-red-700/90">
                                Get started
                            </button>
                            :
                            <button id="user-menu-button" type="button" className="flex text-sm bg-gray-800 rounded-full md:ml-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                {/* Profile */}
                                <img className="w-7 sm:w-8 aspect-square rounded-full" src="defaultProfile.png" alt="user photo" />
                            </button>
                    }
                    {/* User Drop Down */}
                    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600"
                        id="user-dropdown">
                        <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                            <li>
                                <a href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
                                    out</a>
                            </li>
                        </ul>
                    </div>
                    {/* Menu Button */}
                    <button data-collapse-toggle="navbar-user" type="button"
                        className="inline-flex -mr-2 items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-user" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                {/* Drop down Menu Items */}
                    <div
                        className="items-center justify-between hidden w-full mt-1 order-2" id="navbar-user">
                        <ul
                            className="flex flex-col shadow font-medium p-4 border border-gray-100 rounded-lg bg-gray-50 rtl:space-x-reverse dark:bg-[#252424] dark:border-neutral-700">
                            <li>
                                <a href="#"
                                    className="block py-2 px-3 text-white bg-red-700 rounded-sm"
                                    aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-[7px] px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-[#383535] dark:hover:text-white dark:border-gray-700">About</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-[7px] px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-[#383535] dark:hover:text-white dark:border-gray-700">Services</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-[7px] px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-[#383535] dark:hover:text-white dark:border-gray-700">Pricing</a>
                            </li>
                            <li>
                                <a href="#"
                                    className="block py-[7px] px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-white dark:hover:bg-[#383535] dark:hover:text-white dark:border-gray-700">Contact</a>
                            </li>
                        </ul>
                    </div>
            </div>
        </nav>
    )
}

export default Navbar
