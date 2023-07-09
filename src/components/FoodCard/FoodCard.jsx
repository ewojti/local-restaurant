import React, {useState} from "react";
import "./FoodCard.css";
import { GrClose } from "react-icons/gr";

const FoodCard = ({ isOpen, handleClose, name, tags, price30, price40 }) => {
  const [countFoodItem, setCountFoodItem] = useState(1)
  const handleAddFood = () => {
    setCountFoodItem(prevCountFoodItem =>
      prevCountFoodItem+=1
    )
  }
  const handleSubtractionFood = () => {
    setCountFoodItem((prevCountFoodItem) => (prevCountFoodItem -= 1));
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
          <div className="app__modal--food-item-stepper">
            <button onClick={handleSubtractionFood}>-</button>
            <p className="app__modal--food-item-stepper-step">
              {countFoodItem}
            </p>
            <button onClick={handleAddFood}>+</button>
          </div>
          <button className="custom__button">Dodaj {price30}</button>
          <button className="custom__button">Dodaj {price40}</button>
        </div>
      </div>
    )
  );
};

export default FoodCard;
