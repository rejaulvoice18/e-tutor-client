import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import CategoryCard from './CategoryCard';

const LanguageCategory = () => {
    const { user } = useContext(AuthContext)
    const [category, setCategory] = useState([])
    const [allData, setAllData] = useState([])

    useEffect(() => {
        // category data
        allCategory()
        // all data
        allDataDB()
    }, [user])

    
    const allDataDB = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-tutor`)
        setAllData(data)
    }

    // category
    const allCategory = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/languages-photos`)
        setCategory(data)
    }
    console.log(category)

    console.log('from language',allData)
    // only uniqe tutor
    const allTutor = [...new Set(allData.map(tut => tut.email))];

    // Total Reviews
    const allReviews = allData.map(rev => rev.review)
    // sub of reviews
    const totalReviews = allReviews.reduce((sum, currVal)=> sum + currVal, 0)

    return (
        <div className='w-11/12 mx-auto my-5'>
            {/* Alla Stats */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 my-14 justify-between'>
                <div className='text-center'>
                    <h2 className='font-bold text-2xl'>{allTutor.length}</h2>
                    <p className='text-xs'>Experience Tutors</p>
                </div>
                <div className='text-center'>
                    <h2 className='font-bold text-2xl'>{totalReviews}</h2>
                    <p className='text-xs'>5-star tutor reviews</p>
                </div >
                <div className='text-center'>
                    <h2 className='font-bold text-2xl'>{category.length}</h2>
                    <p className='text-xs'>Tutors Languages</p>
                </div>
                <div className='text-center'>
                    <h2 className='font-bold text-2xl'>{allTutor.length}</h2>
                    <p className='text-xs'>Users</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                {
                    category.slice(0,9).map((cat, idx) => <CategoryCard
                        key={idx}
                        cat={cat}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default LanguageCategory;