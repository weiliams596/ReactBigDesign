import React from 'react';
import { Link } from'react-router-dom';


import logo from '../../assets/logo.png';

import './header.css';

export default function Header() {
  return (
    <header className='header'>
        <div className="header-left">
            <Link to={'/'}><img src={logo} alt="logo" />
            <h1>Online School</h1></Link>
        </div>
    </header>
  )
}
