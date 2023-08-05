import { useState } from "react";
import styles from "./desc.module.css";
import Conffeti from "react-confetti";
export default function Description() {
  const firstHeader = "Shay Dvir";
  const secondHeader = "Fullstack Developer";
  const [isExploding, setIsExploding] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [btnText, setBtnText] = useState("Say Hello");
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{firstHeader}</h1>
      <h1
        onAnimationEnd={() => {
          setIsDone(true);
        }}
        className={styles.title}
      >
        {secondHeader}
      </h1>
      <p
        style={{ visibility: isDone ? "visible" : "hidden" }}
        className={styles.text}
      >
        My name is Shay Dvir. I'm a self-learner, creative, a team player, a
        highly motivated and passionate full-stack developer.
      </p>

      <div>
        <button
          onClick={() => {
            setBtnText("Thank You");
            setIsExploding(true);
          }}
          className={styles.button}
        >
          {btnText}
          {isExploding && (
            <Conffeti
              onConfettiComplete={() => {
                setIsExploding(false);
                setBtnText("Say Hello");
              }}
              numberOfPieces={200}
              recycle={false}
            />
          )}
        </button>
      </div>
    </div>
  );
}
