import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import OverLay from "./common/OverLay";

const Home: React.FC<{ title: string }> = ({ title = "Hi, I'm Công" }) => {
  const history = useHistory();

  const contactMe = useCallback(() => {
    history.push('/contact');
  }, [])

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
          <button onClick={contactMe} className="contact-button border border-[#03c5a9] px-6 py-2 text-[#03c5a9] text-base font-normal">
            Contact me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
