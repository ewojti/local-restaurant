import React, {useState} from "react";
import "./MenuItem.css";
import FoodCard from "../../components/FoodCard/FoodCard";

const MenuItem = ({ name, price30, price40, tags }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpenModal = () => setIsOpen(true);
    const handleCloseModal = () => setIsOpen(false);
  return (
    <>
      <div className="app__menuitem">
        <div className="app__menuitem-head">
          <div className="app__menuitem-name">
            <p className="p__cormorant" style={{ color: "#DCCA87" }}>
              {name}
            </p>
          </div>
          <div className="app__menuitem-dash"></div>
          <div className="app__menuitem-price">
            <button
              className="app__menuitem-price-item"
              onClick={handleOpenModal}
            >
              {price30}
            </button>
            <button
              className="app__menuitem-price-item"
              onClick={handleOpenModal}
            >
              {price40}
            </button>
          </div>
        </div>
        <div className="app__menuitem-sub">
          <p className="p__opensans" style={{ color: "#AAA" }}>
            {tags}
          </p>
        </div>
        <FoodCard isOpen={isOpen} handleClose={handleCloseModal} name={name} price30={price30} price40={price40} tags={tags} />
      </div>
    </>
  );
};

export default MenuItem;
