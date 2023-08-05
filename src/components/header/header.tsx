import NavBar from "../../helpers/navbar";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <NavBar />
    </div>
  );
}
