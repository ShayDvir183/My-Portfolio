import styles from "./footer.module.css";

function Copyright() {
  const text = `Shay Dvir Portfolio | Developed by Shay Dvir 2023 - ${new Date().getFullYear()}`;
  return (
    <div className="container">
      <span color="inherit">Copyright ©{text}</span>
    </div>
  );
}

export default function Footer() {
  return (
    <div className={styles.box}>
      <div className="container-sm">
        <Copyright />
      </div>
    </div>
  );
}
