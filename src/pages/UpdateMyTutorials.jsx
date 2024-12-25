import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';

const UpdateMyTutorials = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [tutorial, setTutorial] = useState([])
    const { id } = useParams()

    useEffect(() => {
        loadSingleMyTutorial()
    }, [user])

    const loadSingleMyTutorial = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/tutorial/${id}`)
        setTutorial(data)
    }

    const { name, email, tutorialPhoto, language, description, price, review } = tutorial || {}

    console.log(tutorial);

    const handleUpdateTutorials = async e => {
        e.preventDefault()
        
        const name = e.target.name.value;
        const email = e.target.email.value;
        const tutorialPhoto = e.target.tutorialPhoto.value;
        const language = e.target.language.value;
        const description = e.target.description.value;
        const price = e.target.price.value;

        const updateTutorial = { name, email, tutorialPhoto, language, description, price, review: 0 };

        console.table({ updateTutorial })

        try{
            const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/update-tutorial/${id}`,
                updateTutorial
            )
            // e.target.reset()
            console.log(data)
            toast.success('Tutorial updated successfully!!')
            navigate('/myTutorials')

        } catch (error){
            console.log(error.message)
        }

    }
    return (
        <div className='p-24'>
            <h2 className='font-bold text-2xl bg-[#36ab3f] inline-block px-2 text-white'>Update a Tutorial</h2>
            <form onSubmit={handleUpdateTutorials}>
                {/* user name and user email row */}
                <div className='md:flex gap-3 mb-5'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Name</span>
                        </label>
                        <label className='input-group'>
                            <input name="name" disabled={true} defaultValue={user && user.displayName} className='input input-bordered w-full' type="text" placeholder='User Name' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Email</span>
                        </label>
                        <label className='input-group'>
                            <input name="email" disabled={true} defaultValue={user && user.email} className='input input-bordered w-full' type="text" placeholder='email' id="" />
                        </label>
                    </div>
                </div>
                {/* Tutorial image url row */}
                <div className='md:flex gap-3 mb-5'>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span className='label-text'>Tutorial Image URL</span>
                        </label>
                        <label className='input-group'>
                            <input name="tutorialPhoto" defaultValue={tutorialPhoto && tutorialPhoto} className='input input-bordered w-full' type="text" placeholder='Tutorial Image URL' id="" />
                        </label>
                    </div>
                </div>
                {/* description and price row */}
                <div className='md:flex gap-3 mb-5'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Description</span>
                        </label>
                        <label className='input-group'>
                            <input name="description" defaultValue={description} className='input input-bordered w-full' type="text" placeholder='Description' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Price</span>
                        </label>
                        <label className='input-group'>
                            <input name="price" defaultValue={price} className='input input-bordered w-full' type="text" placeholder='Price' id="" />
                        </label>
                    </div>
                </div>
                {/* Language and review row */}
                <div className='md:flex gap-3 mb-5'>
                <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Language</span>
                        </label>
                        <label className='input-group'>
                            <input name="language" defaultValue={language} className='input input-bordered w-full' type="text" placeholder='language' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Review</span>
                        </label>
                        <label className='input-group'>
                            <input name="review" defaultValue={review} disabled={true} className='input input-bordered w-full' type="text" placeholder='Review' id="" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Tutorial" className='btn btn-block bg-[#e0a823] text-black font-bold' />
            </form>
        </div>
    );
};

export default UpdateMyTutorials;