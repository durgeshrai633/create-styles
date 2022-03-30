import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <header className='header'>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__list__item'>
            {" "}
            <Link to={"/"}>Home</Link>{" "}
          </li>
          {/* <li className='nav__list__item'>
            {" "}
            <Link to={"/text"}>Text</Link>{" "}
          </li>
          <li className='nav__list__item'>
            {" "}
            <Link to={"/button"}>Button</Link>{" "}
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
