import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../img/Logo.png'
const Navbar = () => {
    return (
      <div >
        <nav className='nav'>
          <ul className='nav-list'>
            <div>
                <li><img className='image' src={Logo} alt="logo" /></li>
            </div>
            </ul>

            <ul className='nav-list'>
            <div className='nav-list'>
            <li className='nav-item'>
              <Link to="/" className='nav-link'>Flavanoids</Link>
            </li>
            <li className='nav-item'>
              <Link to="/gamma" className='nav-link'>Gamma</Link>
            </li>
            </div>
          </ul>
        </nav>  
      </div>
    );
  }
  
  export default Navbar;
 