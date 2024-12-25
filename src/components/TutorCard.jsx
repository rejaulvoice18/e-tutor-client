import React from 'react';
import { Link } from 'react-router-dom';

const TutorCard = ({ tutors }) => {

    const { name, email, tutorialPhoto, language, description, price, review, _id } = tutors || {}
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
                <p>Review: <span className='bg-yellow-200/60 font-bold p-1 rounded-md'>{review}</span></p>
                <p>Details: {description.substring(0, 30)}...</p>
            </div>
            <div className="flex flex-col flex-grow gap-3">
                <div className='flex-grow'>
                    <h2 className="card-title">BDT {price}</h2>
                </div>
                <div className="card-actions justify-end pr-2 pb-2">
                    <Link to={`/tutor/${_id}`}>
                        <button className="py-1 mt-2 px-4 bg-gray-800 text-white">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TutorCard;