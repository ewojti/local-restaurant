import React, { useState } from "react";

import { SubHeading, MenuItem } from "../../components";
import { data } from "../../constants";

import "./SpecialMenu.css";

const SpecialMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenMenu = () => {
    setIsOpen(true)
  }

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
          <p className="app__specialMenu_menu_heading">Pizza</p>
          {isOpen ? (
            <div className="app__specialMenu_menu_items">
              {data.pizzas.map((pizza, index) => (
                <MenuItem
                  key={pizza.name + index}
                  name={pizza.name}
                  price={pizza.price}
                  tags={pizza.tags}
                />
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="app__specialMenu-menu_burger flex__center">
          <p className="app__specialMenu_menu_heading">Burgery</p>
          {isOpen ? (
            <div className="app__specialMenu_menu_items">
              {data.burgers.map((burger, index) => (
                <MenuItem
                  key={burger.name + index}
                  name={burger.name}
                  price={burger.price}
                  tags={burger.tags}
                />
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
