import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import { Tooltip as ReactTooltip } from 'react-tooltip'

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const handleSignOut = () => {
        signOutUser()
        toast.success('Successfully Signed Out');
    }
    const links = <>
        <NavLink to='/' className="font-bold ml-3"><a>Home</a></NavLink>
        {
            <NavLink to='/find-tutors' className="ml-3 font-bold"><a>Find Tutors</a></NavLink>
        }
        {
            <NavLink to='/addTutorials' className="ml-3 font-bold"><a>Add Tutorials</a></NavLink>
        }
        {
            <NavLink to='/myTutorials' className="font-bold mx-3"><a>My Tutorials</a></NavLink>
        }
        {
            <NavLink to='/myBooked-tutor' className="font-bold mx-3"><a>My Booked Tutors</a></NavLink>
        }
    </>
    return (
        <>
            {/* <div className='flex justify-end'><ThemeToggle></ThemeToggle></div> */}
            <div className="navbar bg-[#36ab3f] text-white bg-opacity-95 fixed top-0 z-10">

                <div className="navbar-start">
                    <div className="dropdown bg-[#36ab3f]">
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
                            className="bg-[#e0a823] text-black bg-opacity-95 menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-white">E-Tutor</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex gap-2">

                    {
                        user && user?.email
                            ? <div className='flex gap-3'>
                                <div className='flex flex-col items-center'>
                                    <div className="avatar cursor-pointer">
                                        <div className="ring-offset-base-900 w-11 rounded-full ring ring-offset-2">
                                            <img src={user?.photoURL && user?.photoURL} id="nameTitle" />
                                            <ReactTooltip
                                                anchorId="nameTitle"
                                                place='top'
                                                content={user?.email && user.displayName}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button onClick={handleSignOut} className="btn bg-white rounded text-[#36ab3f] hover:bg-[#e0a823] hover:text-white">Log Out</button>
                            </div>

                            : <div className='flex gap-3'>
                                <Link to="/login" className='btn bg-white rounded text-[#36ab3f] hover:bg-[#e0a823] hover:text-white'>Login</Link>
                            </div>
                    }

                </div>
            </div>
        </>
    );
};

export default Navbar;