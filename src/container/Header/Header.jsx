import React, { useState, useContext } from "react";
import CartContext from "../../CartContext";
import "./Header.css";
import OrderCard from "../../container/OrderCard/OrderCard";
import { GiNotebook } from "react-icons/gi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { foodItem } = useContext(CartContext);
  const countOrder = foodItem.reduce((accumulator, food) => {
    return accumulator + food.counter
  }, 0)
  const handleOpenModal = () => {setIsOpen(true);}
  const handleCloseModal = () => setIsOpen(false);
  return (
    <>
      <div className="app__header section__padding" id="home">
        <a href="#menu">
          <button className="custom__button">Odkryj Menu</button>
        </a>
        <button
          onClick={handleOpenModal}
          className="app__header-deliver-button"
        >
          Zamówienie
          <GiNotebook isOpen={isOpen} handleClose={handleCloseModal} />
          <span className="app__header-deliver-qty">{countOrder}</span>
        </button>
        <OrderCard isOpen={isOpen} handleClose={handleCloseModal} />
      </div>
    </>
  );
};

export default Header;
