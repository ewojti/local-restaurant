import React, { useContext, useState } from "react";
import "./OrderCard.css";
import { GrClose } from "react-icons/gr";
import CartContext from "../../CartContext";
import { ImBin } from "react-icons/im";

const OrderCard = ({ isOpen, handleClose }) => {
  const [formDelivery, setFormDelivery] = useState(false);
  const { foodItem } = useContext(CartContext);
  const { mergedAndSummedFoodItems } = useContext(CartContext);
  const { removeFromCart } = useContext(CartContext);
  const { increaseCounter } = useContext(CartContext);
  const { removeCounter } = useContext(CartContext);
      const removeFromCard = (id) => {
        return mergedAndSummedFoodItems.filter((food) => food.id !== id);
      };

  return (
    isOpen && (
      <div className="app__modal--order" id="order-card">
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
            <div>
              {mergedAndSummedFoodItems.map((food) => (
                <div key={food.id}>
                  {food.name}
                  <div className="app__modal--food-item-stepper">
                    <button
                      className="app__modal--food-item-stepper-button"
                      onClick={() => increaseCounter(food.id, food.price)}
                    >
                      +
                    </button>
                    {food.counter}
                    <button
                      className={
                        food.counter === 1
                          ? "btn-disable app__modal--food-item-stepper-button"
                          : "app__modal--food-item-stepper-button"
                      }
                      onClick={() => removeCounter(food.id, food.price)}
                    >
                      -
                    </button>
                    <div
                      onClick={() => {
                        removeFromCart(food.id, food.price);
                      }}
                    >
                      <span>{food.pizzaPrice * food.counter} zł</span>
                      <ImBin />
                    </div>
                  </div>
                </div>
              ))}
            </div>

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
