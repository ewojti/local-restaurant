import React from "react";
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
        <button className="app__menuitem-price-item">
          {price30}
        </button>
        <button className="app__menuitem-price-item">
          {price40}
        </button>
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
