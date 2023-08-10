import React from "react";
import robots from "./mockData/robots.json";
import Robots from "./components/Robots";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.robotList}>
        {robots.map((r) => (
          <Robots id={r.id} name={r.name} email={r.email} />
        ))}
      </div>
    </div>
  );
}

export default App;
