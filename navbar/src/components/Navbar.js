import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);        //<17:22
  const [dropdown, setDropdown] = useState(false);  //26:50

  const handleClick = () => setClick(!click);       //17:22>
  const closeMobileMenu = () => setClick(false);    //<23:55

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      {/*<18:00 */}
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          KolOn
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />      {/*Saat rensponsive, berubah 3 garis tidur*/}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>         {/*Saat 3 garis diklik, berubah jadi X*/}

          {/* Menu producst */}
          <li className='nav-item'>
            <Link
              to='/home'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/consulting'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Consulting
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link
              to='/registrasi'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Registrasi
            </Link>
          </li>
    
          <li className='nav-item'>
            <Link
              to='/login'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              to='/contactus'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Hubungi Kami
            </Link>
          </li>
        </ul>
       
      </nav>
    </>
  );
}

export default Navbar;
