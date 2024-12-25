import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddTotorials = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleAddTutorials = async e => {
        e.preventDefault()

        const name = e.target.name.value;
        const email = e.target.email.value;
        const tutorialPhoto = e.target.tutorialPhoto.value;
        const language = e.target.language.value;
        const description = e.target.description.value;
        const price = e.target.price.value;

        const newTutorial = { name, email, tutorialPhoto, language, description, price, review: 0 };

        console.table({ newTutorial })

        try{
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/add-tutorial`,
                newTutorial
            )
            // e.target.reset()
            console.log(data)
            toast.success('Tutorial added successfully!!')
            navigate('/myTutorials')

        } catch (error){
            console.log(error.message)
        }

    }
    return (
        <div className='p-24'>
            <h2 className='font-bold text-2xl bg-[#36ab3f] inline-block px-2 text-white'>Add a Tutorial</h2>
            <form onSubmit={handleAddTutorials}>
                {/* user name and user email row */}
                <div className='md:flex gap-3 mb-5'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Name</span>
                        </label>
                        <label className='input-group'>
                            <input name="name" defaultValue={user?.displayName && user.displayName} className='input input-bordered w-full' type="text" placeholder='User Name' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Email</span>
                        </label>
                        <label className='input-group'>
                            <input name="email" defaultValue={user && user.email} className='input input-bordered w-full' type="text" placeholder='email' id="" />
                        </label>
                    </div>
                </div>
                {/* Tutorial image url and language row */}
                <div className='md:flex gap-3 mb-5'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Tutorial Image URL</span>
                        </label>
                        <label className='input-group'>
                            <input name="tutorialPhoto" className='input input-bordered w-full' type="text" placeholder='Tutorial Image URL' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Language</span>
                        </label>
                        <label className='input-group'>
                            <input name="language" className='input input-bordered w-full' type="text" placeholder='language' id="" />
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
                            <input name="description" className='input input-bordered w-full' type="text" placeholder='Description' id="" />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span className='label-text'>Price</span>
                        </label>
                        <label className='input-group'>
                            <input name="price" className='input input-bordered w-full' type="text" placeholder='Price' id="" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Tutorial" className='btn btn-block bg-[#e0a823] text-black font-bold' />
            </form>
        </div>
    );
};

export default AddTotorials;