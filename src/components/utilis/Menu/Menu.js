import React from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { useState } from "react";
import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function Menu() {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="menu">
      <Navbar className="navbar navbar-dark bg-dark" dark>
        <NavbarBrand
          href="/"
          className="navbar-brand d-flex justify-content-center align-items-center mt-100"
        >
          <h3>Nhan Tam Dang</h3>
        </NavbarBrand>
        <div
          role="button"
          className="navbar-toggler"
          onClick={toggleNavbar}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <div className="menu-btn">
            <span className=".menu-btn__burger">
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: "white" }}
                size="2x"
              />
            </span>
          </div>
        </div>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/resume">Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://github.com/nhandang9594"
                target="_blank"
                onClick={toggleNavbar}
              >
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
