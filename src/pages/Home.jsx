import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import LanguageCategory from '../components/LanguageCategory';
import RightTutor from '../components/RightTutor';
import LessonLove from '../components/LessonLove';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LanguageCategory></LanguageCategory>
            <RightTutor></RightTutor>
            <LessonLove></LessonLove>
        </div>
    );
};

export default Home;