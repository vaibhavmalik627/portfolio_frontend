import React, { useState, useEffect, useContext } from 'react';
import styles from './Navbar.module.css';
import { ThemeContext } from '../../context/ThemeContext.jsx';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Update active link on scroll
    const onScroll = () => {
      const scrollPos = window.scrollY + 100; // offset for better detection
      let current = 'Home';
      navLinks.forEach(link => {
        const section = document.querySelector(link.href);
        if (section && section.offsetTop <= scrollPos) {
          current = link.name;
        }
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleClick = (name) => {
    setActive(name);
    setToggle(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>My Portfolio</div>

      <ul className={styles.links}>
        {navLinks.map(link => (
          <li key={link.name}>
            <a
              href={link.href}
              className={active === link.name ? styles.active : ''}
              onClick={() => handleClick(link.name)}
            >
              {link.name}
            </a>
          </li>
        ))}
        <li>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle light and dark theme"
          >
            {theme === 'light' ? '🌞' : '🌜'}
          </button>
        </li>
      </ul>

      <button
        className={styles.hamburger}
        onClick={() => setToggle(!toggle)}
        aria-label="Toggle mobile menu"
      >
        <div />
        <div />
        <div />
      </button>

      <div className={`${styles.mobileMenu} ${toggle ? styles.mobileOpen : ''}`}>
        <ul className={styles.links}>
          {navLinks.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                className={active === link.name ? styles.active : ''}
                onClick={() => handleClick(link.name)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label="Toggle light and dark theme"
            >
              {theme === 'light' ? '🌞' : '🌜'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
