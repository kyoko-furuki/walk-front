import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Walk() {
  return (
    <div className={styles.container2}>
      <h3>歩いた距離：○○km</h3>
      <main className={styles.main}>
        <h2 className={styles.title}>Walk own feet!!</h2>
        <img className={styles.image2} src="../img/tree_step1.png" />
      </main>

      <div className={styles.container3}>
        <ul>
          <li>
            <Link href="/walk">
              <img className={styles.treeTop} src="../img/tree_top.png" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
