import React from "react";
import "./OrderCard.css";
import { GrClose } from "react-icons/gr";

const OrderCard = ({ isOpen, handleClose }) => {
  return (
    isOpen && (
      <div className="app__modal--order">
        <div onClick={handleClose} className="modal-overlay"></div>
        <div className="app__modal--order-content">
          <div className="app__modal--order-content-title">
            <h2>Zamówienie</h2>
            <GrClose
              className="app__modal--order-content-title-btn"
              onClick={handleClose}
            />
          </div>
          <div className="app__modal--order-delivery">
            <h2>Restaruacja będzie realizować zamówienia od 11:00</h2>
            {/* Zamówienie */}
            <h3>Sposób realizacji</h3>
            <form
              className="app__modal--order-delivery-form p__cormorant"
              action=""
            >
              <label htmlFor="">
                <input type="radio" />
                <i></i>
                Dostawa
              </label>
              <label htmlFor="">
                <input type="radio" />
                <i></i>
                Odbiór osobisty
              </label>
              <label
                className="app__modal--order-delivery-form-adress"
                htmlFor=""
              >
                Ulica
                <input type="text" required />
                <i></i>
              </label>
              <label
                className="app__modal--order-delivery-form-adress"
                htmlFor=""
              >
                Numer domu
                <input type="text" required />
                <i></i>
              </label>
              <label
                className="app__modal--order-delivery-form-adress"
                htmlFor=""
              >
                Numer mieszkania
                <input type="number" />
                <i></i>
              </label>
              <label
                className="app__modal--order-delivery-form-adress"
                htmlFor=""
              >
                Uwagi do zamówienia
                <textarea type="text" />
                <i></i>
              </label>
            </form>
          </div>
          <div className="p__cormorant"></div>
          <div className="app__modal--order-buttons">
            <button
              className="modal-close custom__button"
              onClick={handleClose}
            >
              Kontynuuj zamawianie
            </button>
            <button className="custom__button">Złóż zamówienie</button>
          </div>
        </div>
      </div>
    )
  );
};

export default OrderCard;
