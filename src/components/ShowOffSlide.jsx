import React from 'react';

const ShowOffSlide = ({reviews}) => {
    const {image, title, name, comment} = reviews || {}
    return (
        <div className='md:flex items-center justify-center gap-10 px-10'>
            <div>
                <img className='h-[500px] w-full md:h-[500px] lg:h-[800px] lg:w-[600px] py-10' src={image} alt="" />
            </div>
            <div className='flex flex-col gap-4 justify-center'>
                <h2 className='text-2xl font-bold'>{title}</h2>
                <p className='font-bold'>{name}</p>
                <p className=''>{comment}</p>
            </div>
        </div>
    );
};

export default ShowOffSlide;