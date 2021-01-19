import React from 'react';
import HomeComp from '../components/HomeComp';
import NavTabs from '../components/NavTabs';
import HeaderHome from '../components/HeaderHome';

function Home() {
    return (
        <div>
            <HeaderHome />
            <NavTabs />
            <HomeComp />
        </div>
    )
};

export default Home;