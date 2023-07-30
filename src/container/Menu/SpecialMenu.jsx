import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { SubHeading, MenuItem } from "../../components";
import pizzas from "../../constants/data";

import "./SpecialMenu.css";

const SpecialMenu = () => {
  const [isOpenPizza, setIsOpenPizza] = useState(false);
  const handleOpenMenu = () => {
    setIsOpenPizza(!isOpenPizza);
  };

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Lorem Ipsum Dolor Sit Amet" />
        <h1 className="headtext__cormorant">Menu</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div
          className="app__specialMenu-menu_pizza flex__center"
          onClick={handleOpenMenu}
        >
          <h1 className="app__specialMenu_menu_heading">Pizza</h1>
          <div className="app__react-icons">
            <FaAngleDown />
          </div>
        </div>
        {isOpenPizza && (
          <div className="app__specialMenu_menu_items">
            {pizzas.map((pizza, index) => (
              <MenuItem
                key={pizza.name + index}
                name={pizza.name}
                price30={pizza.price30}
                price40={pizza.price40}
                tags={pizza.tags}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecialMenu;
