import React, { useEffect } from "react";
import OverLay from "./common/OverLay";

const Home: React.FC<{ title: string }> = ({ title = "Hi, I'm Công" }) => {

  useEffect(() => {
    const overlay = document.querySelector(".overlay");
    overlay?.classList.toggle("show");
  }, []);

  return (
    <div className="main">
      <OverLay />
      <div className="flex flex-col justify-center items-start left-14 top-96 absolute z-20">
        <div className="main-title">
          {title.split("").map((char, ind) => (
            <span
              key={ind}
              className="text-6xl md:text-2xl lg:text-4xl font-extrabold"
            >
              {char}
            </span>
          ))}
        </div>
        <div>
          <button className="border contact-button rounded border-[#03c5a9] px-6 py-2 text-[#03c5a9] text-xl font-medium hover:border-white ">
            Contact me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
