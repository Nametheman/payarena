import React, { useState } from "react";
// import mtn from "../../assets/images/mtn.svg";
// import airtel from "../../assets/images/airtel.svg";
// import glo from "../../assets/images/glo.svg";
// import ninemobile from "../../assets/images/9mobile.svg";
import ekedc from "../../assets/images/Electricity/ekedc.svg";
import ikedc from "../../assets/images/Electricity/ikeja.svg";
import ibedc from "../../assets/images/Electricity/ibedc.svg";
import phedc from "../../assets/images/Electricity/phedc.svg";
import aedc from "../../assets/images/Electricity/aedc.svg";
import styled from "styled-components";

const BillsSelect = () => {
  const billers = [
    { img: ekedc, name: "EKEDC", id: "ekedc" },
    { img: ikedc, name: "IKEDC", id: "ikedc" },
    { img: ibedc, name: "IBEDC", id: "ibedc" },
    { img: phedc, name: "PHEDC", id: "phedc" },
    { img: aedc, name: "AEDC", id: "aedc" },
  ];

  const [selectedNetwork, setSelectedNetwork] = useState("ekedc");
  return (
    <div className="h-[450px] flex gap-[2rem] relative">
      <ProgressBar></ProgressBar>
      <div className="flex flex-col py-[0rem] absolute left-[0]">
        {billers.map((biller) => {
          return (
            <Network
              key={biller.id}
              onClick={() => {
                setSelectedNetwork(biller.id);
              }}
            >
              <div
                className={selectedNetwork === biller.id ? "light" : "dark"}
              ></div>
              <div className="flex items-center gap-[1.3rem]">
                <img
                  src={biller.img}
                  alt={`${biller.id}`}
                  className="w-[50px]"
                />
                <p className="text-[#667085] font-generalsans-medium text-[.9rem]">
                  {biller.name}
                </p>
              </div>
            </Network>
          );
        })}
      </div>
    </div>
  );
};

export default BillsSelect;

const Network = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 112.5px;
  cursor: pointer;
  &:not(:last-child) {
  }

  .light {
    height: 100%;
    width: 8px;
    border-radius: 40px;
    background: #f58220;
    transition: all 0.4s ease-in-out;
  }
  .dark {
    height: 100%;
    width: 8px;
    border-radius: 40px;
    background: #f2f4f7;
    transition: all 0.4s ease-in-out;
  }
`;

const ProgressBar = styled.div`
  height: 100%;
  width: 8px;
  border-radius: 40px;
  background: #f2f4f7;
`;
