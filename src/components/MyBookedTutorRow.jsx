import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';
import { GrDocumentUpdate } from 'react-icons/gr';
import { MdFolderDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MyBookedTutorRow = ({tutor}) => {

    const { name, image, language, price, _id, tutorId } = tutor || {}

    const handleIncrementReview = async (id) =>{

    try {
        // make a patch request to increase review count
      const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/review-inc/${id}`)
        toast.success('One review Added Successfully!!!')
      } catch (error) {
      }

    //   fetch(`${import.meta.env.VITE_API_URL}/review-inc/${id}`, {
    //     method: 'PATCH'
    //     // headers: {
    //     //     'content-type': 'application/json'
    //     // },
    //     // body: JSON.stringify(bookedData)
    // })
    //     .then(res => res.json())
    //     .then(data => {
    //         if (data.modifiedCount) {
    //             toast.success('One review Added Successfully!!!')
    //         }
    //     })
    }

    return (
        <tr>
            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                {name}
            </td>
            <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                <img className="w-20" src={image} alt="" />
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
                        onClick={() => handleIncrementReview(tutorId)}
                        className='transition-colors duration-200 text-green-400 bg-green-200/60 p-1 rounded-md  hover:text-green-700 focus:outline-none'>
                        Review
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default MyBookedTutorRow;