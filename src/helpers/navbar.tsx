import styles from "./cssfiles/navbar.module.css";
export default function NavBar() {
  return (
    <div className={` container `}>
      <nav className={`${styles.background} navbar navbar-expand-md fixed-top`}>
        <div className="container-fluid m-0">
          <a className={`navbar-brand `} href="#home">
            Shay Dvir Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className={`navbar-nav ${styles.nav_bar}`}>
              <a
                className={`${styles.link} nav-link `}
                aria-current="page"
                href="#home"
              >
                Home
              </a>
              <a
                className={`${styles.link} nav-link `}
                aria-current="page"
                href="#about"
              >
                About
              </a>
              <a
                className={`${styles.link} nav-link `}
                aria-current="page"
                href="#skills"
              >
                Skills
              </a>
              <a
                className={`${styles.link} nav-link `}
                aria-current="page"
                href="#portfolio"
              >
                Portfolio
              </a>
              <a
                className={`${styles.link} nav-link `}
                aria-current="page"
                href="#contact"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
