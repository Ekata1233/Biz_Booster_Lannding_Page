import styles from './EndUserSection.module.css';

export default function EndUserSection() {
  return (
    <section className={styles.endUserSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Understanding End-User Relationships</h2>
        
        <div className={styles.contentGrid}>
          {/* Definition Card */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.icon}>👥</div>
              <h3 className={styles.cardTitle}>Who Are End-Users?</h3>
            </div>
            <div className={styles.cardContent}>
              <p>End-users are individual who request the service from the service provider for their business or personal work initiating and defining the scope and requirements of the engagement. </p>
              <p>They seek services, products, or solutions to fulfill their needs, and in return, they bring value, trust, and long-term growth opportunities for the service provider.</p>
            </div>
          </div>

          {/* Partnership Card */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.icon}>🤝</div>
              <h3 className={styles.cardTitle}>Active Engagement</h3>
            </div>
            <div className={styles.cardContent}>
              <p>Active engagement is when end-users actively participate in the process by sharing their needs, feedback, and involvement.</p>
              <p>This collaboration ensures transparency, trust, and long-term value for both client and service provider.</p>
            </div>
          </div>

          {/* Collaboration Card */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.icon}>🚀</div>
              <h3 className={styles.cardTitle}>Long-term Collaboration</h3>
            </div>
            <div className={styles.cardContent}>
              <p>Long-term collaboration is the continuous partnership between end-users and service providers, built on trust, transparency, and shared goals.</p>
              <p>It focuses on sustaining value through consistent engagement, adaptability, and innovation, ensuring mutual growth, stronger relationships, and lasting success for both parties.</p>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className={styles.benefits}>
          <h3 className={styles.benefitsTitle}>Key Benefits of End-User Partnerships</h3>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <span className={styles.benefitIcon}>💎</span>
              <span>Value Creation</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.benefitIcon}>🤝</span>
              <span>Trust Building</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.benefitIcon}>📈</span>
              <span>Growth Opportunities</span>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.benefitIcon}>🔄</span>
              <span>Recurrent Engagement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}