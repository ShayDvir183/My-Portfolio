import styles from "./desc.module.css";
export default function Description() {
  const firstHeader = "Shay Dvir";
  const secondHeader = "Fullstack";
  const secondHeader2 = "Developer";
  const text = ` My name is Shay Dvir. I'm a self-learner, creative, a team player, a
  highly motivated and passionate full-stack developer.`;
  return (
    <div className="container-fluid">
      <div className={`${styles.wrapper} p-4`}>
        <div>
          <h1 className={`${styles.title}`}>{firstHeader}</h1>
        </div>
        <div className={styles.row}>
          <h2 className={`${styles.title} `}>{secondHeader}</h2>
          <h2 className={`${styles.title} `}>{secondHeader2}</h2>
        </div>
      </div>
      <p className={`${styles.text} col-md-6 p-4`}>{text}</p>
    </div>
  );
}
