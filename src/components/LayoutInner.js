import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

import Gold from '../images/gold.png';

const LayoutInner = props => {
    return (
        <div className='header'>
            <Header />
            <nav >
                <div className='main_container'>
                    <div className='inner_nav'>
                        <div id='header_btn'>
                            <Link to='/'>
                                BACK
                            </Link>
                        </div>
                        <div className='gold_img'>
                            <img src={Gold} />
                        </div>
                        <div></div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default LayoutInner;