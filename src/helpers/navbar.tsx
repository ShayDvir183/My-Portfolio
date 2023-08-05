import styles from "./cssfiles/navbar.module.css";
export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.link_wrapper}>
        <span className={styles.linkWrapper}>Shay Dvir Portfolio</span>
      </div>
      <div className={styles.link_wrapper}>
        <span className={`${styles.inner_wrapper} ${styles.wrapper}`}>
          <a className={`${styles.hoverLink} ${styles.link}`} href="/">
            Home
          </a>
        </span>
      </div>
      <div className={styles.link_wrapper}>
        <span className={`${styles.inner_wrapper} ${styles.wrapper}`}>
          <a className={`${styles.hoverLink} ${styles.link}`} href="/">
            About
          </a>
        </span>
      </div>
      <div className={styles.link_wrapper}>
        <span className={`${styles.inner_wrapper} ${styles.wrapper}`}>
          <a className={`${styles.hoverLink} ${styles.link}`} href="/">
            Skills
          </a>
        </span>
      </div>
      <div className={styles.link_wrapper}>
        <span className={`${styles.inner_wrapper} ${styles.wrapper}`}>
          <a className={`${styles.hoverLink} ${styles.link}`} href="/">
            Portfolio
          </a>
        </span>
      </div>
      <div className={styles.link_wrapper}>
        <span className={`${styles.inner_wrapper} ${styles.wrapper}`}>
          <a className={`${styles.hoverLink} ${styles.link}`} href="/">
            Contact
          </a>
        </span>
      </div>
    </div>
  );
}
