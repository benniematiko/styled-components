import React from "react";
import { Logo } from "../components/styles/layout/Nav.styled";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div>
          <Logo>
            <a href="#"> Komotobo Mission </a>
          </Logo>
        </div>
        <div>MENU</div>
        <div>NavList</div>
      </nav>
    </div>
  );
};

export default NavBar;
