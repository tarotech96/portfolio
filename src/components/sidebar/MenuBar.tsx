import React from "react";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div className="text-white flex items-center justify-center menu-bar p-5">
      <ul className="flex flex-col items-center justify-center space-y-5">
        <li onClick={handleClick}>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skills">MySkills</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;
