import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import OverLay from "./common/OverLay";
import TextAnimation from "./common/TextAnimation";

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
        <TextAnimation title="Hi, I'm Công" />
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
