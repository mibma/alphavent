import React from 'react';
import Head from 'next/head';
import styles from '../styles/Buyer.module.css';

const services = [
  {
    id: '01',
    title: 'Title Search and Review',
    icon: '🔍',
    description: 'Comprehensive title search and review of property documents'
  },
  {
    id: '02',
    title: 'Document Preparation',
    icon: '📄',
    description: 'Preparation and review of all necessary legal documents'
  },
  {
    id: '03',
    title: 'Closing Coordination',
    icon: '🤝',
    description: 'Coordinating the closing process between all parties'
  },
  {
    id: '04',
    title: 'Property Tax Review',
    icon: '🏠',
    description: 'Review of property tax assessments and obligations'
  },
  {
    id: '05',
    title: 'Post-Closing Support',
    icon: '✅',
    description: 'Ongoing support and documentation after closing'
  }
];

export default function BuyerPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Working with Buyers/Sellers | Property Lawyers</title>
        <meta name="description" content="Professional property law services for buyers and sellers" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            <span className={styles.mainTitle}>Buyers</span>
            <span className={styles.subTitle}>/ Sellers</span>
          </h1>
          
          <p className={styles.description}>
            MacGillivray Property Lawyers works with buyers to ensure their purchase is made efficiently and that their interests are reflected and protected in the purchase and sale. When you work with MacGillivray Property Lawyers, we include the following services for residential property buyers:
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <div className={styles.serviceNumber}>{service.id}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}