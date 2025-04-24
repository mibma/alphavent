import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const sellerServices = [
  {
    id: '01',
    title: 'Document Review',
    icon: '/Capture.JPG'
  },
  {
    id: '02',
    title: 'Title Clearance',
    icon: '/Capture.JPG'
  },
  {
    id: '03',
    title: 'Financial Calculations',
    icon: '/Capture.JPG'
  },
  {
    id: '04',
    title: 'Closing Management',
    icon: '/Capture.JPG'
  },
  {
    id: '05',
    title: 'Post-Sale Support',
    icon: '/Capture.JPG'
  }
];

export default function SellerPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Working with Sellers | MacGillivray Property Lawyers</title>
        <meta name="description" content="Professional property law services for sellers" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            <span className={styles.mainTitle}>WORKING WITH</span>
            <div className={styles.titleRow}>
              <Link href="/" className={styles.smallTitle}>Buyers</Link>
              <span className={styles.divider}>/</span>
              <span className={styles.largeTitle}>Sellers</span>
            </div>
          </h1>
          
          <p className={styles.description}>
            MacGillivray Property Lawyers works with sellers to ensure their sale process is smooth and their interests are protected throughout the transaction. Our comprehensive services for residential property sellers include:
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {sellerServices.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceContent}>
                <div className={styles.iconContainer}>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className={styles.icon}
                  />
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
              </div>
              <div className={styles.serviceNumber}>{service.id}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 