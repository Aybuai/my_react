import React from "react";
import logo from "./assets/images/logo.svg";
import robots from "./mockData/robots.json";
import Robots from "./components/Robots";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>罗伯特机器人吊炸天平台</h1>
      </div>
      <div className={styles.robotList}>
        {robots.map((r) => (
          <Robots id={r.id} name={r.name} email={r.email} />
        ))}
      </div>
    </div>
  );
}

export default App;
