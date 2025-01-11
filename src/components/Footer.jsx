import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' bg-gray-800 text-white py-10 px-5 md:px-8 lg:px-20'>
            <div className='md:flex justify-between'>
                <div>
                    <h2 className='text-2xl font-bold'>eTutor</h2>
                    <p className='text-xs'>Book a tutor and  Get 20% OFF your First Lession</p>
                </div>
                <Link to="/">
                    <div>
                        <img src={logo} className='w-12' alt="" />
                    </div>
                </Link>
            </div>
            <div className='divide-solid py-8'>
                <hr />
            </div>
            <div className='md:flex justify-between'>
                <div className='flex gap-5'>
                    <Link to="/">
                        <p>Home</p>
                    </Link>
                    <Link to="/find-tutors">
                        <p>Find Tutor</p>
                    </Link>
                    <Link to="/">
                        <p>Reviews</p>
                    </Link>

                </div>
                <div>

                </div>
                <div className='flex gap-5'>
                    <a href="">Facebook</a>
                    <a href="">Twitter</a>
                    <a href="">Instagram</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;