import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-gray-800 text-white p-10'>
            <div className='md:flex justify-between'>
                <div>
                    <h2 className='text-2xl font-bold'>eTutor</h2>
                    <p className='text-xs'>Book a tutor and  Get 20% OFF your First Lession</p>
                </div>
                <div>
                    <img src={logo} className='w-12' alt="" />
                </div>
            </div>
            <div className='divide-solid py-8'>
                <hr />
            </div>
            <div className='md:flex justify-between'>
                <div className='flex gap-5'>
                    <Link to="/find-tutors">
                        <p>Find Tutor</p>
                    </Link>
                    <p>Reviews</p>
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