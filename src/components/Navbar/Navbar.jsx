import React, {useState} from 'react';
import {GiHamburgerMenu, GiNotebook} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="app__navbar">
      <a href="#home">
        <div className="app__navbar-logo">
          <img src={images.logo55} alt="app logo" />
        </div>
      </a>

      <ul className="app__navbar-links p__cormorant">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#about">O nas</a>
        </li>
        <li>
          <a href="#gallery">Galeria</a>
        </li>
        <li>
          <a href="#contact">Kontakt</a>
        </li>
        <li>
          <a href=''><GiNotebook /></a>
        </li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app__navbar-smallscreen_links p__opensans">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#about">O nas</a>
              </li>
              <li>
                <a href="#gallery">Galeria</a>
              </li>
              <li>
                <a href="#contact">Kontakt</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );};

export default Navbar;
