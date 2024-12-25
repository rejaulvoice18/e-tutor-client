import React from 'react';

const RightTutor = () => {
    return (
        <div className='w-11/12 mx-auto my-14'>
            <div className='text-center mb-12'>
                <h2 className='font-bold text-5xl mb-5'>Find the right Tutor for you.</h2>
                <p className='text-2xl'>With over 30,000 tutors and 1M+ leraners, we know language learning.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className=''>
                    <img src="https://preply.com/cdn-cgi/image/format=auto,fit=contain,width=700/https://static.preply.com/static/ssr/_next/static/images/Ash-c8d8273fa488c713dd42b75e4109cd7c.jpg" alt="" />
                </div>
                <div className='flex flex-col gap-5 justify-center'>
                    <h2 className='font-bold text-3xl'>The best choice I made for self-development in a long time</h2>
                    <p className='font-bold'>Justyna</p>
                    <p>Bengali Learner on eTutor</p>
                </div>
            </div>
        </div>
    );
};

export default RightTutor;