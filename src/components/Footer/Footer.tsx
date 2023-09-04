import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <a href="#oNama" className={styles.link}>O nama</a>
          <a href="#projekti" className={styles.link}>Naši projekti</a>
          <a href="#novosti" className={styles.link}>Novosti</a>
        </div>
        <div className={styles.section}>
        <p>&copy; {new Date().getFullYear()} Ime Vaše Firme</p>
        </div>
        <div className={styles.section}>
          <a
            className={styles.link}
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className={styles.link}
            href="https://dribbble.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dribbble
          </a>
          <a
            className={styles.link}
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className={styles.link}
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;
