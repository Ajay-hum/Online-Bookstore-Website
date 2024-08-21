import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-scroll'

//Import Icons to use....................
import { MdLibraryBooks } from "react-icons/md";
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

const Navbar = () => {
  const [active, setActive] = useState('navBar');

  // Function to toggle navBar
  const showNav = () => {
      setActive('navBar activeNavbar');
  };

  // Function to close navBar
  const removeNav = () => {
      setActive('navBar');
  };

  return (
    <section className="navBarSection">
      <div className="header">

        <div className="logoDiv">
          <Link to="home" smooth={true} duration={500} className="logo">
            <h1>
              <MdLibraryBooks className='icon' />G.S.Books.
            </h1>
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists flex">

            <li className="navItem">
              <Link to="home" smooth={true} duration={500} className='navLink'>Home</Link>
            </li>

            <li className="navItem">
              <Link to="categories" smooth={true} duration={500} className='navLink'>Categories</Link>
            </li>

            <li className="navItem">
              <Link to="trending" smooth={true} duration={500} className='navLink'>Trending</Link>
            </li>

            <li className="navItem">
              <Link to="deals" smooth={true} duration={500} className='navLink'>Offers</Link>
            </li>

            <li className="navItem">
              <Link to="booklist" smooth={true} duration={500} className='navLink'>Booklist</Link>
            </li>

            <li className="navItem">
              <Link to="#" smooth={true} duration={500} className='navLink'>Wishlist</Link>
            </li>

            <div className="headerBtns flex">
              <button className='btn'>
                <Link to="#" className='navLink'>Book Now</Link>
              </button>
            </div>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className='icon' />
          </div>
        </div>

        <div onClick={showNav} className='toggleNavbar'>
          <TbGridDots className='icon' />
        </div>
      </div>
    </section>
  )
}

export default Navbar