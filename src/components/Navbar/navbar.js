import React from 'react';
import './navbar.css';
import logo from'../../assets/logo.png';
import contactimg from '../../assets/contact.png';
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
        <nav className='navbar'>
            { <img src={logo} alt='logo'className='logo'/>}
            <div className='desktopmenu'>
            <Link activeclass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenuitem'>Home</Link>            
            <Link activeclass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenuitem' >About</Link>           
            <Link activeclass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenuitem'>Portfolio</Link>            
            <Link activeclass='active' to='experience' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenuitem'>Experience</Link>            
            </div>
            <button className='desktopmenubtn'>
            <Link activeclass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='desktopmenuitem1'>Contact</Link>            
            <img src={contactimg} alt='' className='desktopmenuimg'/></button>
        </nav>
  )
}

export default Navbar
