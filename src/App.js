import React from 'react';

import { FindUs, Footer, Gallery, Header, Intro, SpecialMenu, 
  // AboutUs
 } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <SpecialMenu />
    {/* <AboutUs /> */}
    <Intro />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
