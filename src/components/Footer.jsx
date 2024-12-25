import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-800 text-white p-10'>
        <div className='md:flex justify-between'>
            <div>
                <h2 className='text-2xl font-bold'>eTutor</h2>
                <p className='text-xs'>Book a tutor and  Get 20% OFF your First Lession</p>
            </div>
            <div>
                logo
            </div>
        </div>
        <div className='divide-solid py-8'>
            <hr />
        </div>
        <div className='md:flex justify-between'>
            <div className='flex gap-5'>
                <p>Fint Tutor</p>
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