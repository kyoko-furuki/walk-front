import Link from "next/link";
import styles from "../../styles/Home.module.css";
import React, { useState, useEffect } from "react";

export default function Walk() {
  const [distance, setDistance] = useState(0);
  const [image, setImage] = useState("../img/tree_step1.png");
  const [walkText, setWalkText] = useState("Let's go!!");

  useEffect(() => {
    async function fetchWalkingDistance() {
      try {
        const response = await fetch("/walking-distance");
        const data = await response.json();
        setDistance(data.distance);
        updateImage(data.distance);
      } catch (error) {
        console.error("Error fetching walking distance:", error);
      }
    }

    fetchWalkingDistance();
  }, []);

  const updateImage = (newDistance) => {
    if (newDistance >= 60) {
      setImage("../img/tree_step7.png");
      setWalkText("Completion!!");
    } else if (newDistance >= 13) {
      setImage("../img/tree_step6.png");
      setWalkText("Walk own feet!!");
    } else if (newDistance >= 10) {
      setImage("../img/tree_step5.png");
      setWalkText("Congratulation");
    } else if (newDistance >= 7) {
      setImage("../img/tree_step4.png");
      setWalkText("Walk own feet!!");
    } else if (newDistance >= 5) {
      setImage("../img/tree_step3.png");
      setWalkText("Walk own feet!!");
    } else if (newDistance >= 3) {
      setImage("../img/tree_step2.png");
      setWalkText("Walk own feet!!");
    } else {
      setImage("../img/tree_step1.png");
      setWalkText("Let's go!!");
    }
  };

  return (
    <div className={styles.container2}>
      <h3>歩いた距離：{distance}km</h3>
      <main className={styles.main}>
        <h2 className={styles.title}>{walkText}</h2>
        <img className={styles.image2} src={image} alt="Walking image" />
      </main>

      <div className={styles.container3}>
        <div className={styles.treeContainer}>
          <Link href="/walk">
            <img
              className={styles.treeTop}
              src="../img/tree_top.png"
              alt="Tree top"
            />
          </Link>
        </div>
        <div className={styles.treeContainer}>
          <Link href="/end">
            <img
              className={styles.treeEnd}
              src="../img/tree_end.png"
              alt="Tree end"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
