import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';
import Navbar from './Navbar';

import CrystalLeft from '../images/crystal.png';
import CrystalRight from '../images/crystal02.png';

const Layout = props => {
    return (
        <div>
            <Header />
            <Navbar />
            <Outlet />
            <div className='Crystal_image'>
                <img src={ CrystalLeft } />
            </div>
            <div className='Crystal_image_right'>
                <img src={ CrystalRight } />
            </div>
        </div>
    );
};

export default Layout;