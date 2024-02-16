import Link from "next/link";
import styles from "../../styles/Home.module.css";
import React, { useState } from "react";

export default function End() {
  const co2Reduction = 50; // CO2排出量の減少値を設定します
  const [error, setError] = useState(null);

  return (
    <div className={styles.container_end}>
      <h3 className={styles.text_end}>歩いた距離：__km</h3>
      <main className={styles.main}>
        {error ? (
          <h2 className={styles.title_end}>Error: {error}</h2>
        ) : (
          <h2 className={styles.title_end}>CO2排出量が___kg減りました!</h2>
        )}
        <h3 className={styles.subtitle}>
          Let's continue our earth-friendly activities!
        </h3>
        <img
          src="../img/end_earth.png"
          className={`${styles.earth} ${styles.rotate}`}
          style={{ width: "500px" }}
          alt="Earth"
        />
      </main>
    </div>
  );
}
