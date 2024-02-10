import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Walk() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>Let's grow trees</h2>

        <ul>
          <li>
            <Link href="/walk/tree">Tap here</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
