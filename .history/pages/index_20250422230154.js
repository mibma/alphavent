import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to MacGillivray Property Lawyers</h1>
        <p className={styles.description}>
          Professional legal services for property buyers and sellers
        </p>
        <Link href="/services" className={styles.link}>
          View Our Services
        </Link>
      </main>
    </div>
  );
} 