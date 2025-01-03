import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const navLinks = <>
        <li><Link to={'/'} >হোম</Link></li>
        <li><Link to={'/service'} >সেবা</Link></li>
        <li><Link to={'/about'} >আমাদের সম্পর্কে</Link></li>
        <li><Link to={'/contact'} >যোগাযোগ</Link></li>
    </>
    return (
        <div className=" navbar bg-base-100 shadow-xl md:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <div className='hidden lg:flex gap-10'>
                    <a className="btn text-xl bg-[#00424D] hover:bg-[#00424D] text-white">দিন মজুর</a>
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
            </div>
            {/* <div className="navbar-center lg:hidden flex">
                <a className="btn btn-ghost text-xl">দিন মজুর</a>
            </div> */}
            <div className="navbar-end">
                <a className="btn bg-[#00424D] hover:bg-[#00424D] text-white">দিনমজুরে যোগদান করুন।</a>
            </div>
        </div>
    )
}

export default Navbar
