import React from "react";

interface RobotProps {
  id: number;
  name: string;
  email: string;
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  return (
    <li>
      <img
        src={`https://robohash.org/%E9%98%BF%E8%8E%B1%E5%85%8B%E6%96%AF?set=set${id}`}
        alt="robot"
      />
      <h2>{name}</h2>
      <span>{email}</span>
    </li>
  );
};

export default Robot;
