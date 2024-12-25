import React, { useContext, useEffect, useState } from 'react';
import TutorCard from '../components/TutorCard';
import axios from 'axios';
import { AuthContext } from '../provider/AuthProvider';

const FindTutors = () => {
    const { user } = useContext(AuthContext)
    const [tutors, setTutors] = useState([])

    useEffect(() => {
        loadAllTutor()
    }, [user])

    const loadAllTutor = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-tutor`)
        setTutors(data)
    }
    console.log(tutors);
    return (
        <div className='w-11/12 mx-auto mb-5'>
            <h2 className='font-bold py-4 text-2xl'>Online Tutors & teacher for private lessons</h2>
            <h4 className='font-bold py-3'>{tutors.length} Tutorials available</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    tutors.map(tutor => <TutorCard 
                        key={tutor._id}
                        tutors = {tutor}
                    />)
                }
            </div>
        </div>
    );
};

export default FindTutors;