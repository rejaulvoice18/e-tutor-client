import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const TutorDetails = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [tutorial, setTutorial] = useState([])
    const { details } = useParams()

    useEffect(() => {
        loadSingleMyTutorial()
    }, [user])

    const loadSingleMyTutorial = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/tutor/${details}`)
        setTutorial(data)
    }

    // loadSingleMyTutorial = () => {
    //     fetch(`${import.meta.env.VITE_API_URL}/tutor/${details}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setTutorial(data)
    //         })
    // }
    const handleBookData = async () => {

        const bookedData = {
            tutorId: tutorial._id,
            name: tutorial.name,
            image: tutorial.tutorialPhoto,
            language: tutorial.language,
            price: tutorial.price,
            tutorEmail: tutorial.email,
            email: user.email
        }


        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/book-tutor`,
                bookedData
            )
            // e.target.reset()
            toast.success('Tutor booked successfully!!')
            navigate('/myBooked-tutor')

        } catch (error) {
        }

        // fetch(`${import.meta.env.VITE_API_URL}/book-tutor`, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(bookedData)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.insertedId) {
        //             toast.success('Tutor booked successfully!!')
        //             navigate('/myBooked-tutor')
        //         }
        //     })
    }
    // const { name, email, tutorialPhoto, language, description, price, review, _id } = tutor || {}
    return (
        <div className='w-11/12 mx-auto my-5'>
            <h2 className='py-5 text-2xl font-bold'>Tutor Details</h2>
            <div className="card card-side bg-base-100 rounded-none gap-3">

                <div className="flex flex-col gap-3">
                    <figure>
                        <img
                            className='w-56'
                            src={tutorial && tutorial.tutorialPhoto}
                            alt="Movie" />
                    </figure>
                    <h2 className="card-title"> {tutorial && tutorial.name}</h2>
                    <p className='font-bold'>Language: <span className='bg-yellow-00/60 text-yellow-500'>{tutorial && tutorial.language}</span></p>
                    <p>Review: {tutorial && tutorial.review}</p>
                    <p>Details: {tutorial && tutorial.description}</p>
                </div>
                <div className="flex flex-col flex-grow gap-3">
                    <div className='flex-grow'>
                        <h2 className="card-title">BDT {tutorial && tutorial.price}</h2>
                    </div>
                    <div className="card-actions justify-end pr-2 pb-2">
                        <button
                            onClick={handleBookData}
                            className="py-1 mt-2 px-4 bg-gray-800 text-white">Book</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorDetails;