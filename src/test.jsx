import React from 'react'
import './navbar.css'
import { Link } from 'react-scroll'

//Import Icons to use....................
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

const Navbar = () => {
  return (
    <section className="navBarSection">
      <div className="header">
        <div className="logoDiv">
          <Link to="#" smooth={true} duration={500} className="logo">
            <h1>
              <MdOutlineTravelExplore className='icon' /> G.S.Books
            </h1>
          </Link>
        </div>

        <div className="navBar">
          <ul className="navLists flex">
            <li className="navItem">
              <Link to="#" smooth={true} duration={500} className='navLink'>Home</Link>
            </li>

            <li className="navItem">
              <Link to="#" smooth={true} duration={500} className='navLink'>Categories</Link>
            </li>

            <li className="navItem">
              <Link to="#" smooth={true} duration={500} className='navLink'>Trending</Link>
            </li>

            <li className="navItem">
              <Link to="#" smooth={true} duration={500} className='navLink'>Offers</Link>
            </li>

            <li className="navItem">
              <Link to="#" smooth={true} duration={500} className='navLink'>Booklist</Link>
            </li>

            <li className="navItem">
              <Link to="#" smooth={true} duration={500} className='navLink'>Wishlist</Link>
            </li>

            <div className="headerBtns flex">
              <button className='btn'>
                <Link to="/book" className='navLink'>Book Now</Link>
              </button>
            </div>
          </ul>

          <div className="closeNavbar">
            <AiFillCloseCircle className='icon' />
          </div>
        </div>

        <div  className='toggleNavbar'>
          <TbGridDots className='icon' />
        </div>
      </div>
    </section>
  )
}

export default Navbar