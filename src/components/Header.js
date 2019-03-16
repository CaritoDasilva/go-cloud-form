import React from "react";
import logo from "../imgs/logo.png";

const Header = props => {
  return (
    <div>
      <div className="card-body">
        <img className="logoPicture" src={logo} alt="application logo" />
      </div>
    </div>
  );
};

export default Header;
