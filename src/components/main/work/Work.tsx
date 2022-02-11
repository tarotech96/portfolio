import React from "react";

const Work: React.FC<{ title: string }> = ({ title = "Work" }) => {
  return (
    <div className="main">
      <div className="left-section w-1/2 mt-14 ml-14">
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
      </div>
    </div>
  );
};

export default Work;
