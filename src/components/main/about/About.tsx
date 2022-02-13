import React from "react";
import ListTechnologies from "./ListTechnologies";

const About: React.FC<{ title: string }> = ({ title = "About me" }) => {
  return (
    <div className="main text-white lg:flex flex-col justify-center items-center">
      <div className="left-section w-1/2 mt-14 ml-14 lg:w-full ">
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
          <strong>Hi there !!! </strong>
          <br />
          <br />
          I'm a Full-Stack Web Developer located in Tokyo. During to 4 years of
          my experience, I always have a serious passion for UI effects,
          animations and creating intuitive which make me create incredible
          ideas.experience<br/> working on software such as web application.
          <br />
          <br />
          I have strong knowledge about MySQL, NoSQL, JavaScript, TypeScript,<br/>
          NodeJs, ReactJs and AWS services, Docker, Webpack...vv for<br/> development
          web app.I love working at startup environment where i can be creative
          to build interesting products with new technologies.🥳
          <br />
          <br />
          So I'm very confident in building products that bring good experience
          to users. My hobby is traveling, reading book,coding and so on...😁
          <br />
        </p>
      </div>
      <div className="right-section w-1/2 text-white lg:w-full">
        <ListTechnologies />
      </div>
    </div>
  );
};

export default About;
