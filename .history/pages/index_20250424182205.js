import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image';

const buyerServices = [
  {
    id: '01',
    title: 'Title Search and Encumbrances',
    icon: '/Capture.JPG'
  },
  {
    id: '02',
    title: 'Document Preparation',
    icon: '/Capture.JPG'
  },
  {
    id: '03',
    title: 'Closing Coordination',
    icon: '/Capture.JPG'
  },
  {
    id: '04',
    title: 'Property Tax Adjustments',
    icon: '/Capture.JPG'
  },
  {
    id: '05',
    title: 'Post-Closing Reporting',
    icon: '/Capture.JPG'
  }
];

const sellerServices = [
  {
    id: '01',
    title: 'Review and Preparation of Documents',
    icon: '/Capture.JPG'
  },
  {
    id: '02',
    title: 'Discharge of Mortgage',
    icon: '/Capture.JPG'
  },
  {
    id: '03',
    title: 'Property Tax Adjustments',
    icon: '/Capture.JPG'
  },
  {
    id: '04',
    title: 'Closing Coordination',
    icon: '/Capture.JPG'
  },
  {
    id: '05',
    title: 'Post-Closing Support',
    icon: '/Capture.JPG'
  }
];

export default function HomePage() {
  const [isSeller, setIsSeller] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const toggleView = () => {
    setIsTransitioning(true);
    setIsFlipping(true);
    setTimeout(() => {
      setIsSeller(!isSeller);
      setIsTransitioning(false);
      setIsFlipping(false);
    }, 600);
  };

  const services = isSeller ? sellerServices : buyerServices;
  const description = isSeller 
    ? "MacGillivray Property Lawyers works with sellers to ensure their sale process is smooth and their interests are protected throughout the transaction. Our comprehensive services for residential property sellers include:"
    : "MacGillivray Property Lawyers works with buyers to ensure their purchase is made efficiently and that their interests are reflected and protected in the agreement of purchase and sale. When you work with MacGillivray Property Lawyers, we include the following services for residential property buyers:";

  return (
    <div className={styles.container}>
      <Head>
        <title>Working with {isSeller ? 'Sellers' : 'Buyers'} | MacGillivray Property Lawyers</title>
        <meta name="description" content="Professional property law services" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            <span className={styles.mainTitle}>WORKING WITH</span>
            <div className={styles.titleRow}>
              <div className={styles.titleWrapper}>
                <span 
                  className={styles.largeTitle}
                  onClick={toggleView}
                  style={{ fontSize: isSeller ? '2.5rem' : 'clamp(3rem, 8vw, 5rem)' }}
                >
                  Buyers
                </span>
                <span className={styles.divider}>/</span>
                <span 
                  className={styles.largeTitle}
                  onClick={toggleView}
                  style={{ fontSize: isSeller ? 'clamp(3rem, 8vw, 5rem)' : '2.5rem' }}
                >
                  Sellers
                </span>
              </div>
            </div>
          </h1>
          
          <p className={`${styles.description} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}>
            {description}
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {(isSeller ? sellerServices : buyerServices).map((service, index) => (
            <div 
              key={service.id} 
              className={`${styles.serviceCard} ${isFlipping ? styles.flipCard : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.serviceContent}>
                <div className={styles.iconContainer}>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={80}
                    height={80}
                    className={styles.icon}
                  />
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <div className={styles.serviceNumber}>{service.id}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 