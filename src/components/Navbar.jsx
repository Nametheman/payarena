import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import Button from "./bits/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const links = [
    { path: "/", name: "Home" },
    { path: "/about-us", name: "About us" },
    { path: "/contact-us", name: "Contact us" },
  ];
  const navigate = useNavigate();
  const [isHomePage, setisHomePage] = useState(true);
  const location = useLocation();
  useEffect(() => {
    location.pathname === "/" ? setisHomePage(true) : setisHomePage(false);
  }, [location.pathname]);
  const handleNavigation = () => {
    navigate("/payment/payment-airtime");
  };
  return (
    <NavWrapper
      isHomePage={isHomePage}
      className="w-full flex items-center justify-between px-[8rem] z-10  h-[100px]"
    >
      <div className="flex items-center gap-[1.8rem]">
        <Link to="/">
          <img src={logo} alt="" className="w-[120px]" />
        </Link>
        {links.map((link, idx) => {
          let id = `li${idx}`;
          return (
            <Link
              className="text-white font-generalsans-medium text-[.75rem]"
              key={id}
              to={link.path}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <Button
        text="Get Started"
        background="#F58220"
        color="#fff"
        width="120px"
        height="40px"
        borderRadius="9px"
        fontSize="13px"
        fontFamily="GeneralSans-Regular, sans-serif"
        style={isHomePage ? { boxShadow: "0px 4px 20px 0px #00000059" } : {}}
        action={handleNavigation}
      />
    </NavWrapper>
  );
};

export default Navbar;

const NavWrapper = styled.nav`
  position: ${(props) => (props.isHomePage ? "fixed" : "absolute")};
  top: 0;
  div {
    a {
      color: ${(props) => (props.isHomePage ? "#ffffff" : "#000000")};
    }
  }
`;
