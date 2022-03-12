import React from "react";
import { motion } from "framer-motion";

const spanVariants = {
  visible: {
    y: 0,
    scaleY: 1,
  },
  hover: {
    y: [-2, -2, -2.8, 0.9, 0],
    scaleY: [1.2, 1.3, 0.8, 1, 1.2],
    color: "#bfbfbf",
  }
};

const TextAnimation: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="main-title">
      {title.split("").map((char, ind) => (
        <motion.span
          key={ind}
          className="text-6xl md:text-2xl lg:text-4xl font-extrabold"
          variants={spanVariants}
          initial="visible"
          whileHover="hover"
          style={{ color: char === "C" ? "#fd2055" : "white" }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default TextAnimation;
