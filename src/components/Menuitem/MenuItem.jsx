import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

import "./MenuItem.css";

const MenuItem = ({ name, price30, price40, tags }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {name}
        </p>
      </div>
      <div className="app__menuitem-dash"></div>
      <div className="app__menuitem-price">
        <div className="app__menuitem-price-item">
          <button className="p__cormorant">
            {price30}
            <AiOutlinePlus />
          </button>
        </div>
        <div className="app__menuitem-price-item">
          <button className="p__cormorant">
            {price40}
            <AiOutlinePlus />
          </button>
        </div>
      </div>
    </div>
    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: "#AAA" }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
