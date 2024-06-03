// components/Footer.js
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} 3D Print Service. All rights reserved.</p>
      <ul className={styles.footerNav}>
        <li className={styles.footerNavItem}>
          <a href="/privacy-policy">Privacy Policy</a>
        </li>
        <li className={styles.footerNavItem}>
          <a href="/terms-of-service">Terms of Service</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
