/* eslint-disable react/no-unknown-property */
import React from "react";
import styled from "styled-components";
import navigation from "../helpers/paymentnavpath";
import { Link, useLocation } from "react-router-dom";

const PaymentNav = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Wrapper className="w-100 bg-footer px-[8rem] py-[1.4rem] flex items-center justify-between sticky top-[-1px] z-10">
      {navigation.map((nav) => {
        return (
          <Link key={nav.id} to={nav.path}>
            <div
              className={`flex flex-col items-center cursor-pointer text-white hover:text-accent1 h-[90px] w-[90px] justify-around relative pb-2 ${
                location.pathname === nav.path ? "active" : ""
              }`}
            >
              <div>{nav.icon}</div>
              <p className="text-[.8rem] text-center w-[100%] leading-tight">
                {nav.name}
              </p>
            </div>
          </Link>
        );
      })}
    </Wrapper>
  );
};

export default PaymentNav;
const Wrapper = styled.section`
  a {
    div {
      &:hover svg path,
      &:hover svg circle {
        fill: #f58220;
      }

      p {
        transition: all 0.15s ease-in-out;
      }
      div {
        svg {
          width: 30px;
          path,
          circle {
            transition: all 0.15s ease-in-out;
          }
        }
      }
    }
    .active {
      border-bottom: 2px solid #f58220;
      svg path,
      svg circle {
        fill: #f58220;
      }

      p {
        transition: all 0.15s ease-in-out;
        color: #f58220;
      }
      div {
        svg {
          width: 30px;
          path,
          circle {
            transition: all 0.15s ease-in-out;
          }
        }
      }
    }
  }
`;
