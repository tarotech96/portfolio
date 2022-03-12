import React from "react";
// import { LogoText3D } from "../common/LogoText3D";

const Logo = () => {
  return (
    <div className="logo flex flex-col justify-center items-center cursor-pointer text-center">
      <h1 className="main-char">C</h1>
      {/* <LogoText3D /> */}
      <div>
        <h4 className="sub-char text-white text-xl">Nguyen</h4>
        <h5 className="text-[#a5a5a5] pb-2">Full-Stack Developer</h5>
      </div>
    </div>
  );
};

export default Logo;
