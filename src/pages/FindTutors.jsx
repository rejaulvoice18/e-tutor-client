import React, { useContext, useEffect, useState } from 'react';
import TutorCard from '../components/TutorCard';
import axios from 'axios';
import { AuthContext } from '../provider/AuthProvider';
import Title from '../components/Title';
import './FindTutors.css';

const FindTutors = () => {
    Title('FintTutors')
    const { user } = useContext(AuthContext)
    const [tutors, setTutors] = useState([])
    const [filter, setFilter] = useState('')
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')

    // pagination
    const [currentPage, setCurrentPage] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [count, setCount] = useState(0)

    const numberOfPages = Math.ceil(count / itemsPerPage);

    const pages = [...Array(numberOfPages).keys()];
    console.log(pages)

    useEffect(() => {
        console.log(`${import.meta.env.VITE_API_URL}/productsCount`)
        fetch(`${import.meta.env.VITE_API_URL}/productsCount`)
            .then(res => res.json())
            .then(data => setCount(data.count))
            .catch(err => console.error('Fetch error:', err));
    }, [])

    useEffect(() => {
        const loadAllTutor = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-tutorials-search?filter=${filter}&search=${search}&sort=${sort}&page=${currentPage}&size=${itemsPerPage}`)
            setTutors(data)
            console.log(`${import.meta.env.VITE_API_URL}/all-tutorials-search?filter=${filter}&search=${search}&sort=${sort}&page=${currentPage}&size=${itemsPerPage}`)
        }
        loadAllTutor()
    }, [filter, search, sort, currentPage, itemsPerPage])
    // if somthing changes in filter and search then useEffects dependency will call again

    // Pagination functionality
    const handleItemsPerPage = e => {
        console.log(e.target.value);
        const val = parseInt(e.target.value)
        setItemsPerPage(val);
        setCurrentPage(0)
    }

    // previous page functionality
    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    // next page functionaltiy 
    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <div className='container mx-auto mb-5'>
            <h2 className='font-bold py-4 text-2xl'>Online Tutors & teacher for private lessons</h2>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5 my-10 '>
                <div>
                    <select
                        name='category'
                        id='category'
                        className='border p-4 rounded-lg'
                        onChange={e => setFilter(e.target.value)}
                    >
                        <option value=''>Filter By Category</option>
                        <option value='Bangla'>Bangla</option>
                        <option value='Arabic'>Arabic</option>
                        <option value='Spanish'>Spanish</option>
                        <option value='German'>German</option>
                        <option value='Hindi'>Hindi</option>
                        <option value='Chinese'>Chinese</option>
                        <option value='English'>English</option>
                        <option value='Russian'>Russian</option>
                        <option value='Romanian'>Romanian</option>
                    </select>
                </div>

                <form>
                    <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                        <input
                            className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                            type='text'
                            name='search'
                            onChange={e => setSearch(e.target.value)}
                            placeholder='Enter Language Title'
                            aria-label='Enter Language Title'
                        />

                        <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                            Search
                        </button>
                    </div>
                </form>
                <div>
                    <select
                        name='category'
                        id='category'
                        onChange={(e) => setSort(e.target.value)}
                        value={sort}
                        className='border p-4 rounded-md'
                    >
                        <option value=''>Sort By Price</option>
                        <option value='dsc'>Descending Order</option>
                        <option value='asc'>Ascending Order</option>
                    </select>
                </div>
            </div>
            <h4 className='font-bold py-3'>{tutors.length} Tutorials available</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    tutors.map(tutor => <TutorCard
                        key={tutor._id}
                        tutors={tutor}
                    />)
                }
            </div>
            {/* Paginatin start from here  */}
            <div className='pagination'>
                <p>Current page: {currentPage}</p>
                <button onClick={handlePrevPage}>Prev</button>
                {
                    pages.map(page => <button
                        className={currentPage === page ? 'selected' : undefined}
                        onClick={() => setCurrentPage(page)}
                        key={page}>{page}</button>)
                }
                <button onClick={handleNextPage}>Next</button>
                <select value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>
            {/* Pagination ends from here  */}
        </div>
    );
};

export default FindTutors;