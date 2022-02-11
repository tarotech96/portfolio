import React from "react";
import linkedin from "../../assets/images/linkedin.png";
import facebook from "../../assets/images/facebook.png";
import github from "../../assets/images/github.png";

const SocialMedia = () => {
  return (
    <div className="social-media flex flex-row flex-wrap items-center justify-center space-x-4">
      <div className="linkedin">
        <img className="w-6" src={linkedin} alt="linkedin" />
      </div>
      <div className="facebook">
        <img className="w-6" src={facebook} alt="facebook" />
      </div>
      <div className="github">
        <img className="w-6" src={github} alt="github" />
      </div>
    </div>
  );
};

export default SocialMedia;
