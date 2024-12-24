import React from 'react';
import { MdFolderDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import { Link } from 'react-router-dom';

const MyTutorialRow = ({ tutorial }) => {
    const { name, tutorialPhoto, language, description, price, review, _id } = tutorial || {}

    return (
        <tr>
            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                {name}
            </td>
            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                <img src={tutorialPhoto} alt="" />
            </td>

            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                {review}
            </td>

            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                {description.substring(0, 30)}....
            </td>
            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                <div className='flex items-center gap-x-2'>
                    <p className='px-3 py-1 rounded-full text-blue-500 bg-blue-100/60 text-xs'>
                        {language}
                    </p>
                </div>
            </td>
            <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                <div className='inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-blue-100/60 text-blue-500'>
                    <h2 className='text-sm font-normal '>
                        ${price}
                    </h2>
                </div>
            </td>
            <td className='px-4 py-4 text-sm whitespace-nowrap'>
                <div className='flex items-center gap-x-6'>
                    {/* Delete Button */}
                    <button
                        className='transition-colors duration-200 text-red-400   hover:text-red-500 focus:outline-none'>
                        <MdFolderDelete size={30} />
                    </button>
                    {/* Update Button */}
                    <Link to={`/updateMyTutorial/${_id}`}>
                        <button
                            className=' text-yellow-400 transition-colors duration-200   hover:text-yellow-500 focus:outline-none'>
                            <GrDocumentUpdate size={20} />
                        </button>
                    </Link>
                </div>
            </td>
        </tr>
    );
};

export default MyTutorialRow;