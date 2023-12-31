"use client";
import React, { useEffect, useState } from "react";
import styles from './page.module.css'

function Crud() {
  const handleDelete = async (id) => {
    try {

      const res = await fetch(`https://jsonplaceholder.typode.com/posts/1`, {
        method: "DELETE",
      });

      const deletedPost = await res.json();
      console.log(deletedPost);

    } catch (error) {
      console.log("somthing is wrong");
    }
  };

  return (
    <div className={styles.soooouu}>
      <button className={styles.oke} onClick={handleDelete}>delete</button>
    </div>
  );
}

export default Crud;
