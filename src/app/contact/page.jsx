import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

function Contact() {
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.photo1}
            src="/1.2.png"
            width={530}
            height={400}
          />
          <Image
            className={styles.photo12}
            src={"/6.png"}
            width={530}
            height={420}
          />
        </div>
        <div className={styles.formdiv}>
          <h1 className={styles.title}>Let's Keep in Touch</h1>
          <form className={styles.form}>
            <input type="text" placeholder="name" className={styles.input} />
            <input type="text" placeholder="email" className={styles.input} />
            <textarea
              className={styles.textArea}
              placeholder="message"
              cols="30"
              rows="5"
            ></textarea>
            <Button title={"Send"} url={"/"} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;