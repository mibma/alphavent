import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const buyerServices = [
  {
    id: '01',
    title: 'Title Search and Encumbrances',
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
    title: 'Post-Closing Reporting',
    icon: '/Capture.JPG'
  }
];

export default function BuyerPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Working with Buyers | MacGillivray Property Lawyers</title>
        <meta name="description" content="Professional property law services for buyers" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            <span className={styles.mainTitle}>WORKING WITH</span>
            <div className={styles.titleRow}>
              <span className={styles.largeTitle}>Buyers</span>
              <span className={styles.divider}>/</span>
              <Link href="/sellers" className={styles.smallTitle}>Sellers</Link>
            </div>
          </h1>
          
          <p className={styles.description}>
            MacGillivray Property Lawyers works with buyers to ensure their purchase is made efficiently and that their interests are reflected and protected in the agreement of purchase and sale. When you work with MacGillivray Property Lawyers, we include the following services for residential property buyers:
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {buyerServices.map((service) => (
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