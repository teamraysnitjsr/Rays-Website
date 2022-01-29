import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import logo from "../../assets/images/rays-logo.png";
const Navbar = ({toggle}) => {
  return (
    <Nav style={{backgroundColor: "rgb(255,255,255)",
background: 'linear-gradient(45deg, rgba(255,255,255,1) 25%, rgba(2,0,36,1) 48%)'}}>
      <NavbarContainer>
        <NavLogo to="/">
          {" "}
          <img
            src={logo}
            alt="logo"
            style={{
              width: "50px",
            }}
          />
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="achievements">Achievements</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="contact">Contact</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="teams">Teams</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="sponsor">Sponsor</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
