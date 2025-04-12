import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({ className = 'h-5 text-sm sm:text-lg' }) => {
    return (
        <Link to="/home" className={`flex items-center space-x-1 sm:space-x-3 rtl:space-x-reverse aspect-square ${className}`}>
            <img src="/logo.png" className="h-full w-full object-cover" alt="Streamify Logo" />
            <span className={`self-center font-semibold whitespace-nowrap dark:text-white text-[#d40000]`}>Streamify AI</span>
        </Link>
    )
}

export default Logo
