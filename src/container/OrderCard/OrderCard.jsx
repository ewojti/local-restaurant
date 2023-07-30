import React, { useState } from "react";
import "./OrderCard.css";
import { GrClose } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  resetValue,
} from "../../features/counter/counterSlice";

const OrderCard = ({ isOpen, handleClose }) => {
  const [formDelivery, setFormDelivery] = useState(false);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
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
            <h2>Koszyk jest pusty</h2>
            {count}
            <h2>Sposób realizacji</h2>
            <form
              className="app__modal--order-delivery-form p__cormorant"
              action=""
            >
              <label htmlFor="delivery">
                <input
                  type="radio"
                  name="title"
                  id="delivery"
                  onChange={() => setFormDelivery(true)}
                />
                Dostawa(+ 5zł)
              </label>
              <label htmlFor="takeaway">
                <input
                  type="radio"
                  name="title"
                  id="takeaway"
                  onChange={() => setFormDelivery(false)}
                />
                Odbiór osobisty
              </label>
              {formDelivery && (
                <div>
                  <label
                    className="app__modal--order-delivery-form-adress"
                    htmlFor=""
                    required
                    checked
                  >
                    Ulica
                    <input type="text" required />
                  </label>
                  <div className="app__modal--order-delivery-number">
                    <label
                      className="app__modal--order-delivery-form-adress"
                      htmlFor=""
                      required
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
                  </div>
                  <label
                    className="app__modal--order-delivery-form-adress"
                    required
                    htmlFor=""
                  >
                    Numer telefonu
                    <input type="number" />
                    <i></i>
                  </label>
                  <label
                    className="app__modal--order-delivery-form-adress"
                    required
                    htmlFor=""
                  >
                    Uwagi do zamówienia
                    <textarea type="text" />
                    <i></i>
                  </label>
                </div>
              )}
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
