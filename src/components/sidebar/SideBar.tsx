import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import MenuBar from "./MenuBar";
import SocialMedia from "./SocialMedia";

const SideBar = () => {
  const toggleMenu = useCallback(() => {
    const navMobile = document.querySelector(".nav-mobile");
    const hamburger = document.querySelector(".icon");
    const links = document.querySelectorAll(".nav-links");

    if (!navMobile?.classList.contains("open")) {
      navMobile?.classList.toggle("open");
    } else {
      navMobile?.classList.toggle("open");
    }

    if (!hamburger?.classList.contains("close")) {
      hamburger?.classList.toggle("close");
    } else {
      hamburger?.classList.remove("close");
    }

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        navMobile?.classList.remove("open");
        hamburger?.classList.remove('close');
      });
    });
  }, []);

  return (
    <>
      <div className="nav-mobile hidden">
        <div className="navToggle">
          <div onClick={toggleMenu} className="icon cursor-pointer"></div>
        </div>
        {/* nav-links is used when display on mobile */}
        <ul className="nav-links lg:mt-28">
          <li>
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
      <div className="sidebar lg:hidden">
        {/* Logo */}
        <Logo />

        {/* MenuBar */}
        <MenuBar />

        {/* SocialMedia */}
        <SocialMedia />
      </div>
    </>
  );
};

export default SideBar;
