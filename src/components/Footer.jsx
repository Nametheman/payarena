import React from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import payattitude from "../assets/icons/payattitude.svg";
import visa from "../assets/icons/visa.svg";
import mastercard from "../assets/icons/mastercard.svg";
import amex from "../assets/icons/amex.svg";
import unionpay from "../assets/icons/unionpay.svg";
import mail from "../assets/icons/mail.svg";
import phone from "../assets/icons/phone.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import instagram from "../assets/icons/instagram.svg";
import linkedin from "../assets/icons/linkedin.svg";
import DownloadComponent from "./DownloadComponent";

const Footer = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }
  return (
    <footer className="bg-footer pt-[5rem] px-24 pb-[1.6rem]">
      <div className="flex justify-center">
        <div className="mr-[5rem]">
          <img src={logo} alt="" />
          <p className="text-white font-generalsans-light text-[.85rem] mt-5 leading-relaxed">
            Payarena is a group of companies <br /> with services including
            Financial <br /> Technology, Banking, Payment <br /> Scheme, Value
            Added Service, <br /> etc.
          </p>
          <div className="flex items-center gap-3 mt-7">
            <img src={payattitude} alt="" width="40px" />
            <img src={visa} alt="" width="35px" />
            <img src={mastercard} alt="" width="30px" />
            <img src={amex} alt="" width="25px" />
            <img src={unionpay} alt="" />
          </div>
        </div>
        <div className="flex flex-col mr-10">
          <div className="flex flex-col">
            <h3 className="text-footerHead font-semibold mb-6">Services</h3>
            <a href="#" className="footer-link">
              Verification Services
            </a>
            <a href="#" className="footer-link">
              Shooping Mall
            </a>
            <a href="#" className="footer-link">
              Our Products
            </a>
          </div>
          <div className="flex flex-col mt-8">
            <h3 className="text-footerHead font-semibold mb-6">Reach Us</h3>

            <div className="flex items-center gap-3 mb-7">
              <img src={mail} alt="" width="20px" />
              <p className="text-white font-light font-generalsans-light text-sm">
                info@payarena.com
              </p>
            </div>
            <div className="flex items-center gap-3 mb-7">
              <img src={phone} alt="" width="20px" />
              <p className="text-white font-light font-generalsans-light text-sm">
                +234 1 2704705
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mr-10">
          <h3 className="text-footerHead font-semibold mb-6">Company</h3>
          <a href="#" className="footer-link">
            About us{" "}
          </a>
          <a href="#" className="footer-link">
            FAQs{" "}
          </a>
          <a href="#" className="footer-link">
            Management{" "}
          </a>
          <a href="#" className="footer-link">
            Privacy Policy{" "}
          </a>
        </div>
        <div className="flex flex-col mr-20">
          <h3 className="text-footerHead font-semibold mb-6">Resources</h3>
          <a href="#" className="footer-link">
            API Docs{" "}
          </a>
          <a href="#" className="footer-link">
            Payattitude{" "}
          </a>
          <a href="#" className="footer-link">
            HopePSBank{" "}
          </a>
          <a href="#" className="footer-link">
            Unified Payments{" "}
          </a>
        </div>
        <div>
          <DownloadComponent />
        </div>
      </div>
      <div className="mt-[2.6rem] border-t border-[#667085] py-4 flex items-center justify-between">
        <div>
          <p className="text-white text-[.77vw] font-generalsans-extralight">
            © 2023 Payarena. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <img src={twitter} alt="" width="20px" />
          <img src={linkedin} alt="" width="20px" />
          <img src={instagram} alt="" width="20px" />
          <img src={facebook} alt="" width="20px" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
