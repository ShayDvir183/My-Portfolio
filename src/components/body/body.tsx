import About from "../about/about";
import Contact from "../contact/contact";
import Home from "../home/home";
import Portfolio from "../portfolio/skills/portfolio";
import Skills from "../skills/skills";
import styles from "./body.module.css";

export default function Body() {
  return (
    <div className={styles.container}>
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}
