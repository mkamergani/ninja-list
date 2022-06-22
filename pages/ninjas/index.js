import React from "react";
import Head from "next/head";
import Link from "next/Link";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      ninjas: data,
    },
  };
};
export default function Ninjas({ ninjas }) {
  return (
    <>
      <Head>
        <title> Ninja List | Ninjas</title>
      </Head>
      <div>
        <h1> All Ninjas </h1>
        {ninjas.map((ninja) => (
          <Link key={ninja.id} href={`/ninjas/${ninja.id}`}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}
