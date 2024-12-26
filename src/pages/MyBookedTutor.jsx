import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import MyBookedTutorRow from '../components/MyBookedTutorRow';

const MyBookedTutor = () => {

    const { user } = useContext(AuthContext)
    const [tutors, setTutors] = useState([])

    useEffect(() => {
        MyBookedTutor()

        // fetch(`${import.meta.env.VITE_API_URL}/myBooked-tutor/${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setTutors(data)
        //     })
    }, [user])

    const MyBookedTutor = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/myBooked-tutor/${user?.email}`)
        setTutors(data)
    }

    return (
        <section className='container px-4 mx-auto my-12'>
            <div className='flex items-center gap-x-3'>
            <h2 className='text-lg font-medium text-white py-1 px-3 rounded-md bg-gray-800 '>My Tutorials</h2>

                <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                    {tutors.length} tutor
                </span>
            </div>

            <div className='flex flex-col mt-6'>
                <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                        <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                            <table className='min-w-full divide-y divide-gray-200'>
                                <thead className='bg-gray-50'>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <div className='flex items-center gap-x-3'>
                                                <span>Name</span>
                                            </div>
                                        </th>
                                        <th
                                            scope='col'
                                            className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            <div className='flex items-center gap-x-3'>
                                                <span>Image</span>
                                            </div>
                                        </th>
                                       

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            Language
                                        </th>

                                        <th
                                            scope='col'
                                            className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                        >
                                            Price
                                        </th>

                                        <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white divide-y divide-gray-200 '>
                                    {
                                        tutors.map(tutor => <MyBookedTutorRow
                                            key={tutor._id}
                                            tutor={tutor}
                                           

                                        />)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyBookedTutor;