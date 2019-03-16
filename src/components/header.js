import React from "react";
import logo from "../imgs/logo.png";

const Header = props => {
  return (
    <div>
      <div class="card-body">
        <img src={logo} alt="application logo" />
      </div>
    </div>
  );
};

export default Header;
