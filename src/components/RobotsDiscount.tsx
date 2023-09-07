import React, { useContext } from "react";
import styles from "./Robots.module.css";
import { appContext } from "../AppState";
import { useAddToCart } from "./AddToCart";

interface RobotProps {
  id: number;
  name: string;
  email: string;
}

const RobotDisCount: React.FC<RobotProps> = ({ id, name, email }) => {
  const value = useContext(appContext);

  const addToCart = useAddToCart();

  return (
    <div className={styles.cardContainer}>
      <img
        src={`https://robohash.org/%E9%98%BF%E8%8E%B1%E5%85%8B%E6%96%AF?set=set${id}`}
        alt="robot"
      />
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{value.username}</p>
      <button onClick={() => addToCart(id, name)}>加入购物车</button>
    </div>
  );
};

export default RobotDisCount;
