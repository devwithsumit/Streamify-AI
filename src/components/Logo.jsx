import React from 'react'

const Logo = ({ className = 'h-5 text-lg' }) => {
    return (
        <a href="/" className={`flex items-center space-x-3 rtl:space-x-reverse aspect-square ${className}`}>
            <img src="logo.png" className="h-full w-full object-cover" alt="Flowbite Logo" />
            <span className={`self-center font-semibold whitespace-nowrap dark:text-white text-[#d40000]`}>Streamify AI</span>
        </a>
    )
}

export default Logo
