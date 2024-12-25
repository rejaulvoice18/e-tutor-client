import React from 'react';

const TutorCard = ({tutors}) => {
    const { name, email, tutorialPhoto, language, description, price, review } = tutors || {}
    return (
        <div className="card card-side bg-base-100 rounded-none shadow-md gap-3">
            <figure>
                <img
                    className='w-44 h-full overflow-clip'
                    src={tutorialPhoto}
                    alt="Movie" />
            </figure>
            <div className="flex flex-col gap-3">
                <h2 className="card-title">{name}</h2>
                <p className='text-green-500 font-bold'>{language}</p>
                <p>Review: {review}</p>
                <p>Details: {description.substring(0,30)}...</p>
            </div>
            <div className="flex flex-col flex-grow gap-3">
                <div className='flex-grow'>
                    <h2 className="card-title">BDT {price}</h2>
                </div>
                <div className="card-actions justify-end pr-2 pb-2">
                    <button className="py-1 mt-2 px-4 bg-gray-800 text-white">Details</button>
                </div>
            </div>
        </div>
    );
};

export default TutorCard;