import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="from-gray-200 dark:from-[#141414] bg-gradient-to-b global-px p-4 rounded-lg w-full self-end shadow-sm dark:bg-[#161515]">
            <div className="w-full max-w-screen-xl mx-auto md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Logo className={'mb-4 sm:mb-0 h-10 text-2xl'} />
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to={'/about'} className="hover:underline me-4 md:me-6">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to={'/policy'} className="hover:underline me-4 md:me-6">Privacy
                                Policy
                            </Link>
                        </li>
                        <li>
                            <Link to={'/license'} className="hover:underline me-4 md:me-6">
                                Licensing
                            </Link>
                        </li>
                        <li>
                            <Link to={'/contact'} className="hover:underline">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" className="hover:underline">Stremify AI™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer
