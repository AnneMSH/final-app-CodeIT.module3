import styles from './page.module.css'
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.div1}>
        <div className={styles.images}>
          <Image
            className={styles.photo1}
            src="/1.2.png"
            alt="1"
            width={450}
            height={390}
          />
          <Image
            className={styles.photo12}
            src="/1.png"
            alt="1"
            width={390}
            height={390}
          />
        </div>
        <div className={styles.imtired}>
          <h1 className={styles.title}>Beauty Secrets</h1>
          <p className={styles.pp}>
            Habitant morbi tristique senectus et. Nec dui nunc mattis enim ut
            tellus. Semper auctor neque vitae tempus quam pellentesque nec nam
            aliquam.
          </p>
          <button className={styles.bt}>Read More</button>
        </div>
      </div>
    </main>
  );
}
