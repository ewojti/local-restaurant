import React, { useState } from "react";
import "./FoodCard.css";
import { GrClose } from "react-icons/gr";
import CartContext from "../../CartContext";
import { useContext } from "react";

const FoodCard = ({
  isOpen,
  handleClose,
  id,
  name,
  tags,
  price30,
  price40,
  pizzaChoosen,
  setPizzaChoosen,
}) => {
  const { addToCart } = useContext(CartContext);
  const { combinedFoodItem } = useContext(CartContext);
  const [count, setCount] = useState(1);

  const handleAddFood = () => {
    setCount((prevCount) => (prevCount += 1));
  };
  const handleSubtractionFood = () => {
    setCount((prevCount) => (prevCount -= 1));
  };
  let totalFoodPrice = pizzaChoosen * count;

  const exitCard = () => {
    handleClose();
    console.log(combinedFoodItem);
    setCount(1);
  };

  // const addFood = (value) => {
  //   exitCard();
  // };

  return (
    isOpen && (
      <div className="app__modal--food">
        <div onClick={exitCard} className="modal-overlay"></div>
        <div className="app__modal--food-item">
          <div className="app__modal--food-item-close">
            <span>
              <GrClose
                onClick={exitCard}
                className="app__modal--food-content-title-btn"
              />
            </span>
          </div>
          <div className="app__modal--food-item-name">
            <div className="foodname__cormorant">{name}</div>
            <div>{tags}</div>
          </div>
          <div className="app__modal--food-item-options">
            <div className="app__modal--food-item-option">
              <input
                type="radio"
                name="title"
                value={price30}
                checked={pizzaChoosen === price30}
                onChange={(e) => {
                  setPizzaChoosen(e.target.value);
                }}
              ></input>
              <label htmlFor="pizza30">⌀ 30cm {price30}</label>
              <input
                type="radio"
                name="title"
                value={price40}
                checked={pizzaChoosen === price40}
                onChange={(e) => {
                  setPizzaChoosen(e.target.value);
                }}
              ></input>
              <label htmlFor="pizza40">⌀ 40cm {price40}</label>
            </div>
          </div>
          <div className="app__modal--food-item-stepper">
            <button
              className="app__modal--food-item-stepper-button"
              onClick={handleAddFood}
            >
              +
            </button>
            <p className="app__modal--food-item-stepper-step">{count}</p>
            <button
              className={
                count === 1
                  ? "btn-disable app__modal--food-item-stepper-button"
                  : "app__modal--food-item-stepper-button"
              }
              onClick={handleSubtractionFood}
            >
              -
            </button>
          </div>
          <button
            className="custom__button app__modal--food-btn"
            onClick={() => {
              addToCart(
                id,
                name.toString(),
                tags,
                totalFoodPrice,
                count,
                pizzaChoosen
              );
              }}
          >
            Dodaj {totalFoodPrice} zł
          </button>
        </div>
      </div>
    )
  );
};

export default FoodCard;
