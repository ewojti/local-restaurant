import React from 'react';
import {BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import { SubHeading } from "../../components";
import { images } from "../../constants";
import './Gallery.css';

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
  images.gallery05,
  images.gallery06,
  images.gallery07
];

const Gallery = () => {
const scrollRef = React.useRef(null)

const scroll = (direction) => {
  const {current} = scrollRef;

  if(direction === 'left'){
    current.scrollLeft -= 300
  } else {
    current.scrollLeft += 300
  }
}
return (
  <div className="app__gallery flex__center" id="gallery">
    <div className="app__gallery-content">
      <SubHeading title="Instagram" />
      <h1 className="headtext__cormorant">Galeria Menu</h1>
      <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra
        Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet
        Eu Proin Mauris Et.
      </p>
      <button className='custom__button'>Zobacz więcej</button>
    </div>
    <div className='app__gallery-images'>
      <div className='app__gallery-images_container' ref={scrollRef}>
        {galleryImages.map((image, index) => (
          <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
            <img src={image} alt="gallery"/>
          </div>
        ))}
      </div>
      <div className='app__gallery-images_arrows'>
        <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
        <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
      </div>
    </div>
  </div>
);
}
export default Gallery;
