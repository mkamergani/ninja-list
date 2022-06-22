import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title> Ninja List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}> Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          repudiandae labore sed error, accusamus vitae at doloribus itaque
          nostrum a temporibus id fuga facere cupiditate corrupti minima ab!
          Necessitatibus, quos.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          repudiandae labore sed error, accusamus vitae at doloribus itaque
          nostrum a temporibus id fuga facere cupiditate corrupti minima ab!
          Necessitatibus, quos.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
