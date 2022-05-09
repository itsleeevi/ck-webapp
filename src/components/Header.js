import React from 'react';
import Logo from '../images/logo.png';


const Header = props => {
    return (
        <div className='logo'>
            <img src={Logo} />
        </div>
    );
}

export default Header;