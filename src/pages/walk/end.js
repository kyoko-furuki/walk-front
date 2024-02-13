import Link from "next/link";
import styles from "../../styles/Home.module.css";
import React, { useState, useEffect } from "react";

export default function End() {
  const [co2Reduction, setCo2Reduction] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/co2-reduction");
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setCo2Reduction(data.co2Reduction);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container_end}>
      <main className={styles.main}>
        {error ? (
          <h2 className={styles.title_end}>Error: {error}</h2>
        ) : (
          <h2 className={styles.title_end}>
            {co2Reduction !== null
              ? `CO2排出量が${co2Reduction}減りました!`
              : "Loading..."}
          </h2>
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
