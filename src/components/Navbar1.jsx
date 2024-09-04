import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const [activePage, setAcitvePage] = useState(location.pathname)

  useEffect(() => {
    setAcitvePage(location.pathname)
  }, [location])

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path) => {
    if (location.pathname === path) {
      setIsOpen(false); // Закрываем меню, если ссылка ведет на текущую страницу
    } else {
      toggleMenu(); // Иначе переключаем меню
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.05) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="brand">
        <Link to='/' style={{ textDecoration: 'none' }}><h1>Oxford IELTS</h1></Link>
      </div>
      <div className={`menu-icon ${isOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
        <FaBars />
      </div>
      <div className={`menu-links ${isOpen ? 'active' : ''}`}>
        <div className="close-icon" onClick={toggleMenu}>
          <FaTimes />
        </div>
        <Link to='/' onClick={() => handleLinkClick('/')} style={{color: activePage === '/' ? 'var(--orange-color' : ''}}>
          Home
        </Link>
        <Link to='/teachers' onClick={() => handleLinkClick('/teachers')} style={{color: activePage === '/teachers' ? 'var(--orange-color' : ''}}>
          Teachers
        </Link>
        <Link to='/gallery' onClick={() => handleLinkClick('/gallery')} style={{color: activePage === '/gallery' ? 'var(--orange-color' : ''}}>
          Gallery
        </Link>
        <Link to='/about-us' onClick={() => handleLinkClick('/about-us')} style={{color: activePage === '/about-us' ? 'var(--orange-color' : ''}}>
          About Us
        </Link>
        <Link to='/news' onClick={() => handleLinkClick('/news')} style={{color: activePage === '/news' ? 'var(--orange-color' : ''}}>
          News
        </Link>
        <Link to='/contacts' onClick={() => handleLinkClick('/contacts')} style={{color: activePage === '/contacts' ? 'var(--orange-color' : ''}}>
          Contacts
        </Link>
      </div>
      {isOpen && <div className="overlay" onClick={toggleMenu} />}
    </nav>
  );
}


