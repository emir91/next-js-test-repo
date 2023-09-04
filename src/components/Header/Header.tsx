import styles from './Header.module.css'

const Header = () => {
    return (
      <header className={styles.headerContainer}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>Logo</div>

          <div className={styles.navLinks}>  
          <a href="#oNama">O nama</a>
          <a href="#projekti">Naši projekti</a>
          <a href="#novosti">Najava novih funkcionalnosti</a>
          </div>
        </nav>
        <section className={styles.heroArea}>
          <h1 className={styles.heroTitle}>Naslov hero area</h1>
          <p className={styles.heroDescription}>Opis ili slogan</p>
        </section>
      </header>
    );
  }
  
  export default Header;
  