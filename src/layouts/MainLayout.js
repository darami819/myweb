import React from 'react';
import Banner from './Banner';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const MainLayout = () => {
    return(
        <>
            <Banner/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default MainLayout;