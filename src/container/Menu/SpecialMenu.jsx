import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { SubHeading, MenuItem } from "../../components";
import pizzas from "../../constants/data";

import "./SpecialMenu.css";

const SpecialMenu = ({foodItem}) => {

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Lorem Ipsum Dolor Sit Amet" />
        <h1 className="headtext__cormorant">Menu {foodItem}</h1>
      </div>
      <div className="app__specialMenu-menu">
        <a href='#pizza'
          className="app__specialMenu-menu_pizza flex__center"
        >
          <h2 className="app__specialMenu_menu_heading">Pizza</h2>
        </a>
        <a href='#burgery'
          className="app__specialMenu-menu_pizza flex__center"
        >
          <h2 className="app__specialMenu_menu_heading">Burgery</h2>
        </a>
          <div className="app__specialMenu_menu_items" id="pizza">
            {pizzas.map((pizza) => (
              <MenuItem
                id={pizza.id}
                name={pizza.name}
                price30={pizza.price30}
                price40={pizza.price40}
                tags={pizza.tags}
              />
            ))}
          </div>
          <div className="app__specialMenu_menu_items" id="burgery">
            <p>burger drwala</p>
          </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
