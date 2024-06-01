import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const imgurl6='https://cookcraftco.com/cdn/shop/files/cookcraft_logo_1000x1000.png?v=1614318222';
  const imgurl7='https://static.vecteezy.com/system/resources/thumbnails/020/788/814/small_2x/icon-symbol-or-website-admin-social-login-element-concept-3d-rendering-png.png';
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

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
          <nav className="navbar navbar-light bg-light fixed-top navbar-expand-lg">
            <div className="container-fluid">
              <a class="navbar-brand" href="/">
              <img src={imgurl6} alt="Description of the image" height="30" class="d-inline-block align-top" />

              </a>
              <div className="d-flex align-items-center">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item"><a><Link to="/" class="nav-link">Button 1</Link></a></li>
                  <li class="nav-item"><a><Link to="/" class="nav-link">Button 2</Link></a></li>
                  <li class="nav-item"><a><Link to="/" class="nav-link">Button 3</Link></a></li>
                </ul>
              </div>
              <form className="d-flex ms-auto"> {/* 'ms-auto' pushes the search bar to the right */}
                <a class="nav-item"><Link to="/login" class="nav-link">
                <img src={imgurl7} alt="Description of the image" height="40" class="d-inline-block align-top" />

                  </Link></a>
              </form>

            </div>
          </nav>
          )}
      </div>
    </header>
  );
};

export default Navbar;


/*
container: Creates a responsive fixed-width container.

fixed-top: Fixes the navbar at the top of the viewport.

navbar: Base class for the navbar component.

navbar-light: Sets the navbar's color scheme to light.

bg-light: Sets the background color of the navbar to light.

container-fluid: Makes the container full-width, spanning the entire viewport width.

navbar-brand: Styles the branding area of the navbar, typically used for the logo or site name.

d-flex: Sets display property to flex, allowing the element to use flexbox layout.

align-items-center: Aligns flex items vertically at the center.

navbar-nav: Styles the list of navigation items.

mr-auto: Sets the margin-right property to auto, pushing the navbar items to the right.

nav-item: Styles individual navigation items within the navbar.

nav-link: Styles the links within the navbar.

form-control: Styles an input element as a form control.

ms-auto: Aligns the element to the right margin of its containing block.

btn: Styles an element as a Bootstrap button.

btn-outline-success: Styles the button with success color and a transparent background.
*/