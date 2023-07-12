import React, { useState } from "react";
import "./FoodCard.css";
import { GrClose } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../features/counter/counterSlice";

const FoodCard = ({ isOpen, handleClose, name, tags, price30, price40 }) => {
  const [countFoodItem, setCountFoodItem] = useState(1);
  const [choosenPizza, setChoosenPizza] = useState(price30);
  const [newPrice, setNewPrice] = useState(choosenPizza);

  const handleAddFood = () => {
    setCountFoodItem((prevCountFoodItem) => (prevCountFoodItem += 1));
    setNewPrice(
      (prevNewPrice) => parseFloat(prevNewPrice) + parseFloat(choosenPizza)
    );
  };
  const handleSubtractionFood = () => {
    setCountFoodItem((prevCountFoodItem) => (prevCountFoodItem -= 1));
    setNewPrice(
      (prevNewPrice) => parseFloat(prevNewPrice) - parseFloat(choosenPizza)
    );
  };
  return (
    isOpen && (
      <div className="app__modal--food">
        <div onClick={handleClose} className="modal-overlay"></div>
        <div className="app__modal--food-item">
          <GrClose
            className="app__modal--food-item-close"
            onClick={handleClose}
          />
          <div className="app__modal--food-item-name">
            <div>{name}</div>
            <div>{tags}</div>
          </div>
          <div className="app__modal--food-item-options">
            <div className="app__modal--food-item-option">
              <div
                onClick={() => {
                  setChoosenPizza(price30);
                }}
              >
                {price30}
              </div>
              <div
                onClick={() => {
                  setChoosenPizza(price40);
                }}
              >
                {price40}
              </div>
            </div>
          </div>
          <div className="app__modal--food-item-stepper">
            <button onClick={handleSubtractionFood}>-</button>
            <p className="app__modal--food-item-stepper-step">
              {countFoodItem}
            </p>
            <button onClick={handleAddFood}>+</button>
          </div>
          <button className="custom__button">Dodaj {newPrice} zł</button>
        </div>
      </div>
    )
  );
};

export default FoodCard;
