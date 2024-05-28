import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Call the handleScroll function once initially to check if navbar should be shown
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <div className={`container ${isScrolled ? 'fixed-top' : ''}`}>
        {isScrolled && (
          <Link to="/">
            <nav className="navbar navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand">Navbar</a>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </nav>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
