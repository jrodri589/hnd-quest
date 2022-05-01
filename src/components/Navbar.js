import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  
  const menuClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    } else {
      setButton(true);
    }
  };
  
  window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
                HNDQ <i className="fa-solid fa-sailboat"></i>
            </Link>
            <div className='menu-icon' onClick={menuClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars' }></i>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
               <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                 Home
               </Link>
              </li>
              <li className='nav-item'>
               <Link to='/Resorts' className='nav-links' onClick={closeMobileMenu}>
                 Resorts
               </Link>
              </li>
              <li className='nav-item'>
               <Link to='/Popular-spots' className='nav-links' onClick={closeMobileMenu}>
                 Popular Spots
               </Link>
              </li>
              <li className='nav-item'>
               <Link to='/Sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                 Sign-up
               </Link>
              </li>
              </ul>
            {button && <Button buttonStyle='btn--outline'>Sign up</Button> } 
        </div>
    </nav>
    </>
  )
}

export default Navbar;