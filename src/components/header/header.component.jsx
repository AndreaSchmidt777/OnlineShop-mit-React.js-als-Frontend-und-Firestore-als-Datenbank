import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/original.svg';

import './header.styles.scss';

const Header = () => (
   /* <BrowserRouter>*/
    <div className='header'>
       
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to="/shop">
              SHOP  
            </Link>
            <Link className='option' to="/shop">
              CONTACT  
            </Link>
        </div>
       
    </div>
   /* </BrowserRouter>*/
);

export default Header;