import React, { useState, useEffect } from "react";
import backgroundImg1 from "../assets/images/l1.png";
import backgroundImg2 from "../assets/images/l2.png";
import backgroundImg3 from "../assets/images/l3.png";
import backgroundImg4 from "../assets/images/l4.png";
import { motion, AnimatePresence } from "framer-motion";
import ActiveBackgroundMarker from "../components/bits/ActiveBackgroundMarker";
import downloadIcon from "../assets/icons/downloadIcon.svg";
import people from "../assets/icons/people.svg";
import shop from "../assets/icons/shop.svg";
import shopLight from "../assets/icons/shopLight.svg";
import verify from "../assets/icons/verify.svg";
import verifyLight from "../assets/icons/verifyLight.svg";
import pay from "../assets/icons/pay.svg";
import payLight from "../assets/icons/payLight.svg";
import iconDivider from "../assets/icons/iconDivider.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  const [backgroundIndex, setbackgroundIndex] = useState(0);
  const [iconState, seticonState] = useState({
    icon1Hover: false,
    icon2Hover: false,
    icon3Hover: false,
  });
  const backgrounds = [
    backgroundImg1,
    backgroundImg2,
    backgroundImg3,
    backgroundImg4,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setbackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 7000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <section className="min-w-screen w-screen min-h-screen h-screen relative">
        <div className="bg-black">
          <AnimatePresence>
            {backgroundIndex !== null && (
              <motion.div
                key={backgroundIndex}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-black"
              >
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  src={backgrounds[backgroundIndex]}
                  alt=""
                  className="w-screen h-screen transition-bg duration-500 ease-in-out object-fill"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <ActiveBackgroundMarker
          currentIdx={backgroundIndex}
          backgroundLength={backgrounds}
        />
        <div className=" w-full h-[70%] bottom-0 absolute top-[53%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col	px-[8rem] py-[5rem] justify-center w-full border-3 border-white">
            {backgroundIndex == 0 && (
              <h1 className="text-white text-5xl font-bold leading-[1.1] font-roboto">
                Welcome to a world <br /> of more{" "}
                <span className="hover:bg-accent1 bg-accent2 rounded-lg p-[0.2rem] px-[0.3rem] ">
                  Options
                </span>
              </h1>
            )}
            {backgroundIndex == 1 && (
              <h1 className="text-white text-5xl font-bold leading-[1.1] font-roboto">
                Unveil endless Shopping <br /> delight: Your{" "}
                <span className="hover:bg-accent1 bg-accent2 rounded-lg p-[0.2rem] px-[0.3rem] ">
                  One-Stop
                </span>{" "}
                Shop
              </h1>
            )}
            {backgroundIndex == 2 && (
              <h1 className="text-white text-5xl font-bold leading-[1.1] font-roboto">
                Seamless Payments, <br />
                Boundless{" "}
                <span className="hover:bg-accent1 bg-accent2 rounded-lg p-[0.2rem] px-[0.3rem] ">
                  Possibilities.
                </span>
              </h1>
            )}
            {backgroundIndex == 3 && (
              <h1 className="text-white text-5xl font-bold leading-[1.1] font-roboto">
                Trust Assured: Where <br /> Authenticity finds{" "}
                <span className="hover:bg-accent1 bg-accent2 rounded-lg p-[0.2rem] px-[0.3rem] ">
                  its Proof
                </span>
                .{" "}
              </h1>
            )}
            <p className="text-white font-thin mt-10 text-lg font-generalsans-light">
              Experience the ultimate in mobile services with our payment <br />
              platform - where convenience meets innovation
            </p>
            <div className="mt-[3rem] flex items-center h-[220px] pr-[3rem]">
              <div className="bg-white flex-1 h-5/6 rounded-l-lg flex items-center pl-[3rem] ">
                <div className="flex-initial w-[45%]">
                  <h3 className="text-accent2 font-semibold text-xl mb-3">
                    The Payarena Experience
                  </h3>
                  <p className="text-[0.8rem] font-thin w-[78%]">
                    Experience the ultimate in mobile services with our payment
                    platform - where convenience meets innovation
                  </p>
                </div>
                <div className="flex flex-1 items-center gap-12">
                  <span>
                    {iconState.icon1Hover === false && (
                      <Link to="/payment/payment-airtime">
                        <motion.img
                          src={pay}
                          alt=""
                          initial={{ opacity: 0.4 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          onMouseEnter={() => {
                            seticonState((prev) => {
                              return { ...prev, icon1Hover: true };
                            });
                          }}
                          className="cursor-pointer"
                        />
                      </Link>
                    )}
                    {iconState.icon1Hover === true && (
                      <Link to="/payment/payment-airtime">
                        <motion.img
                          src={payLight}
                          alt=""
                          initial={{ opacity: 0.4 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          onMouseLeave={() => {
                            seticonState((prev) => {
                              return { ...prev, icon1Hover: false };
                            });
                          }}
                          className="cursor-pointer"
                        />
                      </Link>
                    )}
                  </span>
                  <img src={iconDivider} alt="" />
                  <span>
                    {iconState.icon2Hover === false && (
                      <Link to="/">
                        <motion.img
                          src={shop}
                          alt=""
                          initial={{ opacity: 0.4 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          onMouseEnter={() => {
                            seticonState((prev) => {
                              return { ...prev, icon2Hover: true };
                            });
                          }}
                          className="cursor-pointer"
                        />
                      </Link>
                    )}
                    {iconState.icon2Hover === true && (
                      <Link to="/">
                        <motion.img
                          src={shopLight}
                          alt=""
                          initial={{ opacity: 0.4 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          onMouseLeave={() => {
                            seticonState((prev) => {
                              return { ...prev, icon2Hover: false };
                            });
                          }}
                          className="cursor-pointer"
                        />
                      </Link>
                    )}
                  </span>
                  <img src={iconDivider} alt="" />
                  <span>
                    {iconState.icon3Hover === false && (
                      <Link to="/">
                        <motion.img
                          src={verify}
                          alt=""
                          initial={{ opacity: 0.4 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          onMouseEnter={() => {
                            seticonState((prev) => {
                              return { ...prev, icon3Hover: true };
                            });
                          }}
                          className="cursor-pointer"
                        />
                      </Link>
                    )}

                    {iconState.icon3Hover === true && (
                      <Link to="/">
                        <motion.img
                          src={verifyLight}
                          alt=""
                          initial={{ opacity: 0.4 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          onMouseLeave={() => {
                            seticonState((prev) => {
                              return { ...prev, icon3Hover: false };
                            });
                          }}
                          className="cursor-pointer"
                        />
                      </Link>
                    )}
                  </span>
                </div>
              </div>
              <div className="bg-accent2 rounded-r-lg px-[3.5rem] py-[1.5rem] flex flex-col items-center shadow-small-left">
                <img src={downloadIcon} alt="" className="w-12" />
                <p className="font-normal text-white border-b py-2 px-2	text-xs mb-3 border-#ededed font-roboto ">
                  Download Payarena
                </p>

                <img src={people} alt="" className="w-55" />
                <p className="text-center text-[0.5rem] mt-1 text-white font-thin">
                  Used by 10M+ users <br /> around the Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
