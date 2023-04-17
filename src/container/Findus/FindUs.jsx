import React from 'react';

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id='contact'>
    <div className="app__wrapper_info">
      <SubHeading title="Kontakt" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Odwiedź nasz lokal
      </h1>
      <div className="app__wrapper-cormorant">
        <p className="p__cormorant">
          Białostocka 55, Sokółka
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Godziny otwarcia
        </p>
        <p className="p__opensans">Wt - Pt: 10:00 - 22:00 </p>
        <p className="p__opensans">Sat - Sun: 10:00 - 23:00 </p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}}>Znajdź nas</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome2} alt="findus" />
    </div>
  </div>
);

export default FindUs;
