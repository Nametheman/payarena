import DownloadAndroidIcon from "../assets/icons/downloadAndroid.png";
import DownloadAppleIcon from "../assets/icons/downloadApple.png";
import React from "react";

export default function DownloadComponent({ appName = "Payarena" }) {
  return (
    <div className=" text-[#797979] grid place-items-center font-medium w-[27vw] h-full px-[10%] rounded-2xl bg-[#2F3355]">
      <div>
        <div className="text-white text-[1.5vw] font-semibold mt-[2%] text-center	">
          Download {appName} <br /> Mobile today!
        </div>
        <div className=" text-[1.2vw] my-[7%] text-center text-white font-generalsans-light">
          It is a long established fact that a reader will be distracted layout.
        </div>

        <div className="flex justify-between">
          <a className="w-[66%]" href="http://">
            {/* < width="100%" /> */}
            <img src={DownloadAndroidIcon} alt="" width="100%" />
          </a>
          &nbsp; &nbsp;
          <a className="w-[66%]" href="http://">
            <img src={DownloadAppleIcon} alt="" width="100%" />
          </a>
        </div>
      </div>
    </div>
  );
}
