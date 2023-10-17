import React, { useState } from "react";
import mtn from "../../assets/images/mtn.svg";
import airtel from "../../assets/images/airtel.svg";
import glo from "../../assets/images/glo.svg";
import ninemobile from "../../assets/images/9mobile.svg";
import styled from "styled-components";

const AirtimeSelect = () => {
  const networks = [
    { img: mtn, name: "MTN NG", id: "mtn" },
    { img: airtel, name: "Airtel", id: "airtel" },
    { img: glo, name: "Glo", id: "glo" },
    { img: ninemobile, name: "9mobile", id: "9mobile" },
  ];

  const [selectedNetwork, setSelectedNetwork] = useState("mtn");
  return (
    <div className="h-[450px] flex gap-[2rem] relative">
      <ProgressBar></ProgressBar>
      <div className="flex flex-col py-[0rem] absolute left-[0]">
        {networks.map((network) => {
          return (
            <Network
              key={network.id}
              onClick={() => {
                setSelectedNetwork(network.id);
              }}
            >
              <div
                className={selectedNetwork === network.id ? "light" : "dark"}
              ></div>
              <div className="flex items-center gap-[1.3rem]">
                <img
                  src={network.img}
                  alt={`${network.id}`}
                  className="w-[50px]"
                />
                <p className="text-[#667085] font-generalsans-medium text-[.9rem]">
                  {network.name}
                </p>
              </div>
            </Network>
          );
        })}
      </div>
    </div>
  );
};

export default AirtimeSelect;

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
