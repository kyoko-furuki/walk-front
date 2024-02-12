import Link from "next/link";
import styles from "../../styles/Home.module.css";
import React, { useState } from "react";

export default function Walk() {
  const [distance, setDistance] = useState(0);
  const [image, setImage] = useState("../img/tree_step1.png");
  const [walkText, setWalkText] = useState("Walk own feet!!");

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

  const handleInputChange = (event) => {
    const newDistance = parseInt(event.target.value);
    setDistance(newDistance);
    updateImage(newDistance);
  };

  return (
    <div className={styles.container2}>
      <h3>歩いた距離：{distance}km</h3>
      <input
        type="number"
        value={distance}
        onChange={handleInputChange}
        placeholder="歩数を入力してください"
      />
      <main className={styles.main}>
        <h2 className={styles.title}>{walkText}</h2>
        <img className={styles.image2} src={image} alt="Walking image" />
      </main>

      <div className={styles.container3}>
        <ul>
          <li>
            <Link href="/walk">
              <img
                className={styles.treeTop}
                src="../img/tree_top.png"
                alt="Tree top"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
