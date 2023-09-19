import styles from "./portfolio.module.css";
import myBalanceImage from "../../../assets/images/projectsImages/myBalance.png";
import ticTacToeImage from "../../../assets/images/projectsImages/TicTacToe.png";
import pookingImage from "../../../assets/images/projectsImages/pooking.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Portfolio() {
  return (
    <div className={styles.container} id="portfolio">
      <h1 className={styles.title}>Portfolio</h1>
      <h3 className={styles.secondTitle}>My most recent works</h3>
      <div className={`${styles.projectsWrapeer}`}>
        <CarouselComponent />
      </div>
    </div>
  );
}

function CarouselComponent() {
  return (
    <div className={styles.carouselWrap}>
      <Carousel
        emulateTouch={true}
        width="100%"
        infiniteLoop
        labels={{
          item: "project item",
          leftArrow: "'previous project / item'",
          rightArrow: "'next project / item'",
        }}
      >
        <div>
          <img src={myBalanceImage} alt="" />
          {createProjectContainer(projects[0])}
        </div>
        <div>
          <img src={ticTacToeImage} alt="" />
          {createProjectContainer(projects[1])}
        </div>
        <div>
          <img src={pookingImage} alt="" />
          {createProjectContainer(projects[2])}
        </div>
      </Carousel>
    </div>
  );
}

function createProjectContainer(project: IProject) {
  return (
    <div
      className={`card text-center mb-5 mt-3 `}
      style={{ width: "90%", margin: "auto auto" }}
    >
      <h3 className="card-header">{project.project_name}</h3>
      <p className="card-title mb-2 p-2 ">{project.description}</p>
      <div className="align-items-start d.flex bg-light ml-5">
        <ul className="list-group list-group-flush">
          <h5 className="card-title">Technologies : </h5>
          {project.technologies.map((tech: string) => {
            return (
              <li className="list-group-item" key={tech}>
                {tech}
              </li>
            );
          })}
        </ul>
        <a
          href={`https://github.com/ShayDvir183/${project.github_param}`}
          rel="noreferrer"
          target="_blank"
          className="btn btn-primary"
        >
          Dive into this code &#8614;
        </a>
      </div>
    </div>
  );
}
const projects: Array<IProject> = [
  {
    description: "This site will help you manage your expenses and incomes",
    github_param: "MyBalance",
    image_url: myBalanceImage,
    project_name: "My Balance",
    technologies: ["Html", "Css", "Typescript", "Bootstrap"],
  },
  {
    description:
      "In this site you can play Tic Tac Toe with friends when your bored",
    github_param: "TicTacToe",
    image_url: ticTacToeImage,
    project_name: "Tic Tac Toe",
    technologies: ["React", "Typescript"],
  },
  {
    description: "This site will show you vacations feed",
    github_param: "Vacations_Feed",
    image_url: pookingImage,
    project_name: "Pooking",
    technologies: [
      "React",
      "Typescript",
      "Material Ui - MUI",
      "Node.JS",
      " MySql",
      "Docker",
    ],
  },
];
interface IProject {
  image_url: string;
  github_param: string;
  project_name: string;
  description: string;
  technologies: Array<string>;
}
