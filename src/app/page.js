//replaces index.js from React < v13
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  console.log("styles", styles);
  return (
    <main className={styles.main}>
      <h1>Java Sprint</h1>
      <div className={styles.center}>
        <div className={styles.grid}>
          <div className={styles.card}>Grid-X-X-X-X-X-X-X-X-X-X-Grid</div>
          <div className={styles.card}>Grid-X-X-X-X-X-X-X-X-X-X-Grid</div>
          <div className={styles.card}>Grid-X-X-X-X-X-X-X-X-X-X-Grid</div>
          <div className={styles.card}>Grid-X-X-X-X-X-X-X-X-X-X-Grid</div>
          <div className={styles.card}>Grid-X-X-X-X-X-X-X-X-X-X-Grid</div>
          <div className={styles.card}>Grid-X-X-X-X-X-X-X-X-X-X-Grid</div>
        </div>
      </div>
    </main>
  );
}
