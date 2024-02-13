import Link from "next/link";
import styles from "../../styles/Home.module.css";
import React from "react";

export default function End() {
  return (
    <div className={styles.container_end}>
      <main className={styles.main}>
        <h2 className={styles.title_end}>CO2排出量が○○減りました!</h2>
        <h3 className={styles.subtitle}>
          Let's continue our earth-friendly activities!
        </h3>

        <img
          src="../img/end_earth.png"
          className={`${styles.earth} ${styles.rotate}`} // rotateクラスを追加
          style={{ width: "500px" }}
          alt="Earth"
        />
      </main>
    </div>
  );
}
