import React from "react";

const CardSkill: React.FC<{ skillName: string, description: string }> = ({
  skillName,
  description,
}) => {
  return (
    <div className="rounded shadow border p-6 w-80 lg:w-96 cursor-pointer">
      <h5 className="text-blue-400 text-2xl font-bold mb-4 mt-0">{skillName}</h5>
      <p className="text-pink-300 text-sm" >{description}</p>
    </div>
  );
};

export default CardSkill;
