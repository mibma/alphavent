import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

const sellerServices = [
  {
    id: '01',
    title: 'Review and Prepertion of Documents',
    icon: '/Capture.JPG'
  },
  {
    id: '02',
    title: 'Discharge of Mortgage',
    icon: '/Capture.JPG'
  },
  {
    id: '03',
    title: 'Proper',
    icon: '/Capture.JPG'
  },
  {
    id: '04',
    title: 'Property Tax Adjustments',
    icon: '/Capture.JPG'
  },
  {
    id: '05',
    title: 'Post-Sale Support',
    icon: '/Capture.JPG'
  }
];

export default function SellerPage() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleBuyerClick = (e) => {
    e.preventDefault();
    setIsTransitioning(true);
    setTimeout(() => {
      router.push('/');
    }, 300);
  };

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
              <Link 
                href="/" 
                className={styles.smallTitle}
                onClick={handleBuyerClick}
              >
                Buyers
              </Link>
              <span className={styles.divider}>/</span>
              <span className={`${styles.largeTitle} ${isTransitioning ? styles.exitToRight : ''}`}>
                Sellers
              </span>
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