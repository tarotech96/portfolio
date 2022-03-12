import React from "react";
import CardSkill from "./CardSkill";

const MySkill: React.FC<{ title: string }> = ({
  title = "Skills",
}) => {
  return (
    <div className="main text-white flex lg:flex-col lg:h-full">
      <div className="left-section w-1/2 mt-14 ml-14 lg:w-full md:ml-0">
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
        <p className="text-xl sm:text-base leading-8 mt-8 break-all">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit libero
          lectus duis massa ante. Magna sed ut enim amet ipsum. Metus, faucibus
          feugiat ullamcorper ac ut nulla dictum. Purus praesent mi massa ac
          varius ut donec sodales. Sed dui donec odio aliquam pellentesque ac
          mattis vitae aenean.
          <br />
          <br />
          In tempus, gravida nibh ut. Cursus nibh ut sit congue. Ornare nibh a
          suspendisse nascetur ipsum. Ipsum neque non mauris nulla est, sem.
          <br />
          <br />
          Imperdiet nibh ac eu est sem. Arcu a, fermentum, aliquam in quis
          ipsum, fringilla. Tempus malesuada mattis nibh sed vitae nunc.
        </p>
      </div>
      <div className="right-section w-1/2 lg:w-full text-white flex flex-col justify-center items-center space-y-5 lg:mt-14">
        <div className="card-skill">
          <CardSkill
            skillName="Frontend Developer"
            description="Design structure and implement frontend using React with TypeScript"
          />
        </div>
        <div className="card-skill">
          <CardSkill
            skillName="Backend Developer"
            description="Design database and build Restful API for product"
          />
        </div>
        <div className="card-skill">
          <CardSkill
            skillName="Infrastructure"
            description="Build and management infra by using AWS"
          />
        </div>
      </div>
    </div>
  );
};

export default MySkill;
