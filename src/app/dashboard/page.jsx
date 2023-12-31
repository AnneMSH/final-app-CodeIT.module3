"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from './page.module.css'

function Dashboard() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => console.log(json));
  }, [url]);

  return (
    <div className={styles.soooouu}>
      <h1 className={styles.h1}>Dashboard</h1>
      <Link className={styles.oke} href={"/dashboard/crud"}>Go to crud operations</Link>
      <br />
      <br />
      <Link className={styles.oke} href={"/dashboard/posts"}>Go to posts</Link>
    </div>
  );
}

export default Dashboard;
