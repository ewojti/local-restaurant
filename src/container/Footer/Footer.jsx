import React from 'react';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';

import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Skontaktuj się z nami</h1>
        <p className="p__opensans">Białostocka 55, Sokółka</p>
        <p className="p__opensans">+48 600-700-800</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.logo55} alt="footer_logo" />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Godziny otwarcia</h1>
        <p className="p__opensans">Białostocka 55, Sokółka</p>
        <p className="p__opensans">Poniedziałek-Piątek</p>
        <p className="p__opensans">11:00-21:00</p>
        <p className="p__opensans">Sobota-Niedziela</p>
        <p className="p__opensans">11:00-22:00</p>
      </div>
    </div>
    <div className="footer_copyright">
      <p className="p__opensans">2022 55 fifty five. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
