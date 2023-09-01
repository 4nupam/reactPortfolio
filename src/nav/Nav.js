import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import astronautHelmet from "../assets/astronauthelmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import envelope from "../assets/envelope.png";
import "../styles/Nav.css";

export default function Nav() {
  const location = useLocation();


   // this is for pages
  const getNavPositionClass = () => {
    switch (location.pathname) {
      case "/":
        return "nav-about";
      case "/skills":
        return "nav-skills";
      case "/projects":
        return "nav-projects";
      case "/contact":
        return "nav-contact";
      default:
        return "";
    }
  };


  // this is for the page title in navbar
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "ABOUT";
      case "/skills":
        return "SKILLS";
      case "/projects":
        return "PROJECTS";
      case "/contact":
        return "CONTACT";
      default:
        return "";
    }
  };

  // here we are calling the functions

  const navPositionClass = getNavPositionClass();
  const pageTitle = getPageTitle();


   // this is for checking the current page
  const isCurrentPage = (navClass) => {
    return navClass === navPositionClass;
  };

  const renderNavLink = (to, imgSrc, altText, navClass) => {
    const isCurrent = isCurrentPage(navClass);

     // Condtional rendering
    const linkClass = isCurrent ? "nav-link current" : "nav-link";

    return (
      <Link to={to} className={linkClass}>
        <img src={imgSrc} alt={altText} />
        {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
      </Link>
    );
  };

  return (
    <nav className={`nav ${navPositionClass}`}>
      {renderNavLink(
         // these are all argument that renderNavlink is taking
        "/",
        astronautHelmet,
        "astronaut helmet icon",
        "nav-about"
      )}
      {renderNavLink("/skills", deadEye, "deadEye icon", "nav-skills")}
      {renderNavLink("/projects", stack, "stack icon", "nav-projects")}
      {renderNavLink("contact", envelope, "envelope icon", "nav-contact")}
    </nav>
  );
}