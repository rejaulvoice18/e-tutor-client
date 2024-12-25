import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";

const CategoryCard = ({ cat }) => {
    const { language, tutorialPhoto } = cat || {}
    return (
        <>
            <Link to='/find-tutors'>
                <div className="card card-side bg-base-100 rounded p-6 items-center justify-items-center border gap-3">
                    <figure>
                        <img
                            className='w-10'
                            src={tutorialPhoto}
                            alt="Movie" />
                    </figure>
                    <div className="flex flex-col gap-3">
                        <p className='font-bold'>{language}</p>
                    </div>
                    <div className="flex flex-col flex-grow gap-3">
                        <div className="card-actions justify-end ">
                            <button className=""><FaChevronRight /></button>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default CategoryCard;