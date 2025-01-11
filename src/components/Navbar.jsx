import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import DarkWeb from './DarkWeb';
import logo from '../assets/logo.png'

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const handleSignOut = () => {
        signOutUser()
        toast.success('Successfully Signed Out');
    }
    const links = <>
        <li><NavLink to='/' className="font-bold ml-3">Home</NavLink></li>
        {
            <li><NavLink to='/find-tutors' className="ml-3 font-bold">Find Tutors</NavLink></li>
        }
        

    </>
    return (
        <div className=''>
            <div className='flex justify-end py-1 px-5 md:px-8 lg:px-20'><DarkWeb></DarkWeb></div>
            <div className="navbar bg-gray-800 text-white bg-opacity-95 fixed top-0 z-10 px-5 md:px-8 lg:px-20">

                <div className="navbar-start">
                    <div className="dropdown bg-gray-900">
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
                            className="bg-gray-800 text-white bg-opacity-95 menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl text-white">
                        <img className="w-8" src={logo} alt="" />
                        E-Tutor</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex gap-2">
                    {/* star */}
                    {
                        user?.email
                            ? <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                                        <img src={user?.photoURL && user?.photoURL} id="nameTitle" />
                                        <ReactTooltip
                                            anchorId="nameTitle"
                                            place='top'
                                            content={user?.email && user.displayName}
                                        />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    {
                                        user?.email && <NavLink to='/addTutorials' className="ml-3 font-bold"><a>Add Tutorials</a></NavLink>
                                    }
                                    {
                                        user?.email && <NavLink to='/myTutorials' className="font-bold mx-3"><a>My Tutorials</a></NavLink>
                                    }
                                    {
                                        user?.email && <NavLink to='/myBooked-tutor' className="font-bold mx-3"><a>My Booked Tutors</a></NavLink>
                                    }
                                    <li onClick={handleSignOut} className=""><a>Log Out</a></li>
                                </ul>
                            </div>
                            : <div className='flex gap-3'>
                                <Link to="/login" className='btn bg-white rounded text-black hover:bg-[#e0a823] hover:text-white'>Login</Link>
                            </div>
                    }
                    {/* end */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;