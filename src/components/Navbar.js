
//Navbar.js
import React from 'react';

const Navbar = () => {
    return (
        <header
            style={{
                position: 'sticky',
                top: '0',
                zIndex: '1',
                backgroundColor: 'darkblue',
            }}
        >
            <img src="/assets/images/whitelogo.png" height="50" width="150" alt="Logo" />
        </header >
    )
};
export default Navbar;