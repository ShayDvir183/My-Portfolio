import styles from "./portfolio.module.css";
import myBalanceImage from "../../../assets/images/projectsImages/myBalance.png";
import ticTacToeImage from "../../../assets/images/projectsImages/TicTacToe.png";
import pookingImage from "../../../assets/images/projectsImages/pooking.png";
export default function Portfolio() {
  return (
    <div className={styles.container}>
      <h1>Portfolio</h1>
      <h3>Most recent works</h3>
      <div className={styles.projectsWrapeer}>
        <div className={styles.projectWrap}>
          <img src={myBalanceImage} alt="" />
          <div>
            <h3>My Balance</h3>
            <p>This site will help you manage your expenses and incomes</p>
            <h5>Technologies: Html, Css, Typescript,Bootstrap.</h5>
            <a
              href="https://github.com/ShayDvir183/MyBalance"
              rel="noreferrer"
              target="_blank"
            >
              Dive into this code &#8614;
            </a>
          </div>
        </div>
        <div className={styles.projectWrap}>
          <img src={ticTacToeImage} alt="" />
          <div>
            <h3>Tic Tac Toe</h3>
            <p>
              In this site you can play Tic Tac Toe with friends when your bored
            </p>
            <h5>Technologies: React ,Typescript.</h5>
            <a
              href="https://github.com/ShayDvir183/TicTacToe"
              rel="noreferrer"
              target="_blank"
            >
              Dive into this code &#8614;
            </a>
          </div>
        </div>
        <div className={styles.projectWrap}>
          <img style={{ width: "90% !important" }} src={pookingImage} alt="" />
          <div>
            <h3>Pooking</h3>
            <p>This site will show you vacations feed</p>
            <h5>
              Technologies: React,Typescript,Material Ui - MUI, Node.JS, MySQL,
              Docker.
            </h5>
            <a
              href="https://github.com/ShayDvir183/Vacations_Feed"
              rel="noreferrer"
              target="_blank"
            >
              Dive into this code &#8614;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
