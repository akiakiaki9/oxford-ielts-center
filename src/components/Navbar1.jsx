import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

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
        <Link to='/' style={{textDecoration: 'none'}}><h1>Oxford IELTS</h1></Link>
      </div>
      <div className={`menu-icon ${isOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
        <FaBars />
      </div>
      <div className={`menu-links ${isOpen ? 'active' : ''}`}>
        <div className="close-icon" onClick={toggleMenu}>
          <FaTimes />
        </div>
        <Link to='/' onClick={() => handleLinkClick('/')}>Главная</Link>
        <Link to='/teachers' onClick={() => handleLinkClick('/menu')}>Учителя</Link>
        <Link to='/gallery' onClick={() => handleLinkClick('/gallery')}>Галлерея</Link>
        <Link to='/about-us' onClick={() => handleLinkClick('/about-us')}>О нас</Link>
        <Link to='/news' onClick={() => handleLinkClick('/news')}>Новости</Link>
        <Link to='/contacts' onClick={() => handleLinkClick('/contacts')}>Контакты</Link>
      </div>
      {isOpen && <div className="overlay" onClick={toggleMenu} />}
    </nav>
  );
}


