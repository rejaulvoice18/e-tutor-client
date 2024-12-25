import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import LanguageCategory from '../components/LanguageCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LanguageCategory></LanguageCategory>
        </div>
    );
};

export default Home;