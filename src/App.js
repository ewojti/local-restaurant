import React from "react";

import {
  FindUs,
  Footer,
  Gallery,
  Header,
  SpecialMenu
} from "./container";
import { Navbar } from "./components";
import "./App.css";
import { CartProvider } from "./CartContext";

const App = () => (
  <div>
    <CartProvider>
      <Navbar />
      <Header />
      <SpecialMenu />
      <Gallery />
      <FindUs />
      <Footer />
    </CartProvider>
  </div>
);

export default App;
