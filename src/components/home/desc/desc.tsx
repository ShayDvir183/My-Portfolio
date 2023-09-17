import styles from "./desc.module.css";
export default function Description() {
  const firstHeader = "Shay Dvir";
  const secondHeader = "Fullstack Developer";
  const text = ` My name is Shay Dvir. I'm a self-learner, creative, a team player, a
  highly motivated and passionate full-stack developer.`;
  return (
    <div className="container-fluid">
      <div className={` col-md-5 p-4`}>
        <h1 className={`${styles.title}`}>{firstHeader}</h1>
        <h2 className={`${styles.title} `}>{secondHeader}</h2>
      </div>
      <p className={`${styles.text} col-md-6 p-4`}>{text}</p>
    </div>
  );
}
