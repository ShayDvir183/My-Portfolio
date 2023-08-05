import styles from "./home.module.css";
import Description from "./desc/desc";
import Social from "./socail/social";

export default function Home() {
  return (
    <div className={styles.container}>
      <Social />
      <Description />
      <div className={styles.image}></div>
    </div>
  );
}
