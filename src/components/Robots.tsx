import React, { useContext } from "react";
import styles from "./Robots.module.css";
import { appContext } from "../index";

interface RobotProps {
  id: number;
  name: string;
  email: string;
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContext);
  return (
    <div className={styles.cardContainer}>
      <img
        src={`https://robohash.org/%E9%98%BF%E8%8E%B1%E5%85%8B%E6%96%AF?set=set${id}`}
        alt="robot"
      />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
    </div>
  );
};

export default Robot;
