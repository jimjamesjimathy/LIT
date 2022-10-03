import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import './Navbar.scss';


const Navbar = () => {
  const [mobile, setMobile] = useState(false);


  const handleNav = () => {
    setMobile(!mobile);
  }

  return (
    <div className='Navbar'>
      <div className="navBG" />
      <div className="nav-wrap">
        <div className="logo">
          <p>LOGO</p>
        </div>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="">Menu</a>
          <a href="">Booking</a>
          <a href="">Contact</a>
        </div>
        <div className="mobile-menu">
          <button onClick={handleNav}>
            <GiHamburgerMenu size={40} className='hamburger' />
          </button>
        </div>
      </div>
      <div className={mobile ? 'mobile-links' : 'mobile-links-hidden'}>
        <button onClick={handleNav}>
        <GrClose size={40} className='hamburger' />
        </button>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Menu</a>
        <a href="">Booking</a>
        <a href="">Contact</a>
      </div>
    </div>
  )
}

export default Navbar;